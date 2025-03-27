
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Flex, Input, InputRef, Typography } from 'antd';
import axios from 'axios';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import ControlledFlowContext from '../../../components/ControlledFlow/ControlledFlowContext';
import { baseUrl } from '../../../services/api/const';
import { IRegister } from '../../../services/users/type';

const GetSMS = ({ handleSubmit }: { handleSubmit: (data: object) => Promise<boolean> }) => {
  const SMS_LENGTH = 4;
  const INITIAL_SMS = Array.from({ length: SMS_LENGTH }).map(() => '_');
  const { setNextIndex, data } = useContext(ControlledFlowContext);
  const [sms, setSms] = useState(INITIAL_SMS);
  const inputRef = useRef<InputRef>(null);

  const handleRequestOtp = useCallback(async () => {
    try {
      await axios.post(`${baseUrl}/auth/request-otp`, { phoneNumber: (data as IRegister).phoneNumber });
    } catch (err) {
      console.error(err);
    }
  }, [])

  useEffect(() => {
    handleRequestOtp();
  }, [handleRequestOtp])

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus();
      const pos = sms.findIndex(char => char === '_') * 2;
      inputRef.current.setSelectionRange(pos, pos);
    }
  }, [sms]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = [
      ...event.target.value
        .split('')
        .filter(char => char !== ' ' && char !== '_'),
    ];
    if (newValue.length > SMS_LENGTH) {
      newValue[SMS_LENGTH - 1] = newValue[newValue.length - 1];
    }
    setSms(
      Array.from({ length: SMS_LENGTH }).map(
        (_, index) => newValue[index] ?? '_'
      )
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace') {
      const lastFilledIndex = sms.findIndex(char => char === '_') - 1;
      if (lastFilledIndex === -1) return;
      if (lastFilledIndex >= 0) {
        setSms([
          ...sms.slice(0, lastFilledIndex),
          '_',
          ...sms.slice(lastFilledIndex + 1),
        ]);
      } else {
        setSms([...sms.slice(0, sms.length - 1), '_']);
      }
    }
  };

  const onNext = async () => {
    try {
      const res = await handleSubmit({ otp: sms.filter(el => !isNaN(Number(el))).join('') });
      if (!res) {
        setSms(INITIAL_SMS);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onPrev = async () => {
    if (setNextIndex) {
      setNextIndex(-1);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <Flex vertical gap={24} className="get-sms-page padding-box">
      <Flex vertical gap={8}>
        <Typography.Title level={3} style={{ margin: 0 }}>
          SMS kodni tasdiqlash
        </Typography.Title>
        <Typography.Paragraph style={{ margin: 0 }}>
          SMS kodni <Typography.Text strong>{ }</Typography.Text>{' '}
          raqamiga yubordik. Telefon raqamingizni tasdiqlash uchun quyidagi
          maydonga kodni kiriting.
        </Typography.Paragraph>
      </Flex>
      <Flex vertical gap={32}>
        <Flex vertical gap={12}>
          <Flex vertical className="sms-input" gap={3}>
            <Typography.Text>SMS kod</Typography.Text>
            <Input
              value={sms.join(' ')}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              ref={inputRef}
            />
          </Flex>
          <Button type="link" className="resend-sms-btn" onClick={handleRequestOtp}>
            SMS kodni qayta yuborish
          </Button>
        </Flex>
        <Flex vertical gap={16}>
          <Button
            className="main-btn primary-btn sms-prev-btn"
            onClick={onNext}
          >
            Tasdiqlash
          </Button>
          <Button
            className="main-btn secondary-btn sms-prev-btn"
            icon={<ArrowLeftOutlined />}
            iconPosition="start"
            onClick={onPrev}
          >
            Orqaga qaytish
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default GetSMS;
