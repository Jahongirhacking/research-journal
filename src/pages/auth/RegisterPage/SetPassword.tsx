import { ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons';
import { Button, Flex, Input, InputRef, message, Typography } from 'antd';
import { useContext, useRef, useState } from 'react';
import ControlledFlowContext from '../../../components/ControlledFlow/ControlledFlowContext';
import { isAlpha, nonAlphabeticCharacters } from '../../../utils/stringUtils';

const SetPassword = ({ handleSubmit }: { handleSubmit: (data: object) => Promise<boolean> }) => {
  const { setNextIndex } = useContext(ControlledFlowContext);
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const inputRef1 = useRef<InputRef>(null);

  // useEffect(() => {
  //   inputRef1.current.focus();
  // }, []);

  const checkLettersCount = () => {
    const MIN_LETTERS = 8;
    return password1.length >= MIN_LETTERS;
  };

  const hasLetter = () => {
    return !!password1.split('').filter(i => isAlpha(i)).length;
  };

  const hasNumber = () => {
    return !!password1.split('').filter(i => !isNaN(Number(i))).length;
  };

  const hasSymbol = () => {
    return !!password1
      .split('')
      .filter(i => nonAlphabeticCharacters.includes(i)).length;
  };

  const isSamePassword = () => {
    return password1 !== '' && password1 === password2;
  };

  const criteria: { label: string; fn: () => boolean }[] = [
    {
      label: 'Kamida 8 ta belgi',
      fn: checkLettersCount,
    },
    {
      label: 'Harflar',
      fn: hasLetter,
    },
    {
      label: 'Raqamlar',
      fn: hasNumber,
    },
    {
      label: 'Belgilar',
      fn: hasSymbol,
    },
    {
      label: 'Parollar mos',
      fn: isSamePassword,
    },
  ];

  const isPasswordCorrect = () => {
    return criteria.reduce((acc, curr) => acc && curr.fn(), true);
  };

  const onNext = async () => {
    try {
      if (isPasswordCorrect()) {
        handleSubmit({ password: password1 });

        if (setNextIndex) {
          setNextIndex(1);
        }
      } else {
        message.warning(
          `Parolda kamchilik bor: ${criteria
            .filter(c => !c.fn())
            .map(c => c.label)
            .join(', ')} bo'lishi kerak!`
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onPrev = async () => {
    if (setNextIndex) {
      setNextIndex(-1)
    }
  };

  return (
    <Flex vertical gap={24} className="set-password-page">
      <Typography.Title level={2} style={{ margin: 0 }}>
        Parol yaratish
      </Typography.Title>

      <Flex vertical gap={16}>
        <Input.Password
          value={password1}
          onChange={({ target: { value } }) => setPassword1(value)}
          placeholder="Parol"
          ref={inputRef1}
        />
        <Input.Password
          value={password2}
          onChange={({ target: { value } }) => setPassword2(value)}
          placeholder="Parolni takror kiriting"
        />
      </Flex>

      <Flex vertical gap={4}>
        <Typography.Title level={5} style={{ margin: 0 }}>
          Parol talablariga e'tibor bering
        </Typography.Title>
        {criteria.map((criterion, index) => (
          <Typography.Text
            key={index}
            className={`criteria ${criterion.fn() ? 'passed-criteria' : 'failed-criteria'}`}
          >
            {criterion.fn() ? <CheckOutlined /> : '-'} {criterion.label}
          </Typography.Text>
        ))}
      </Flex>

      <Flex vertical gap={16}>
        <Button
          className="main-type-btn primary-btn confirm-btn"
          onClick={onNext}
        >
          Tasdiqlash
        </Button>
        <Button
          className="main-type-btn secondary-btn prev-btn"
          icon={<ArrowLeftOutlined />}
          iconPosition="start"
          onClick={onPrev}
        >
          Orqaga qaytish
        </Button>
      </Flex>
    </Flex>
  );
};

export default SetPassword;
