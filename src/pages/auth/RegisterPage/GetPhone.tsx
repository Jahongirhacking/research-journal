import { Button, Flex, Form, Input, Segmented, Typography } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthIcon } from '../../../assets/icons';
import ControlledFlowContext from '../../../components/ControlledFlow/ControlledFlowContext';
import InputMask from '../../../components/Form/InputMask';

const GetPhone = ({ handleSubmit }: { handleSubmit: (data: object) => Promise<boolean> }) => {
  const { setNextIndex } = useContext(ControlledFlowContext);
  const navigate = useNavigate();
  const [form] = Form.useForm(); // Form instance to control state
  const [phone, setPhone] = useState('');
  const [passport, setPassport] = useState('');
  const [pinfl, setPinfl] = useState('');

  useEffect(() => {
    // Sync state with Form fields
    form.setFieldsValue({
      phoneNumber: phone,
      passport,
      pinfl,
    });
  }, [phone, passport, pinfl, form]);

  const onNext = async () => {
    try {
      const values = await form.validateFields();
      handleSubmit({
        ...values,
        phoneNumber: values.phoneNumber.split('').filter((el: string) => !isNaN(Number.parseInt(el))).join('')
      });
      if (setNextIndex) {
        setNextIndex(1);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ width: '100%' }} className="login-page">
      <Typography.Title level={2} className="main-title"><AuthIcon /> Ro‘yxatdan o‘tish</Typography.Title>
      <Flex vertical className='padding-box' align='center'>
        <Flex className='auth-content'>
          <Flex vertical className='auth-main'>
            <Segmented
              defaultValue={"/auth/register"}
              options={[
                { label: `Tizimga kirish`, value: "/auth/login" },
                { label: `Ro‘yxatdan o‘tish`, value: "/auth/register" },
              ]}
              block
              onChange={value => {
                navigate(value);
              }}
            />
            <Form form={form} onFinish={onNext}>
              <Flex vertical gap={35} style={{ width: '100%' }}>
                <Flex vertical gap={20}>
                  <Form.Item
                    name={'firstName'}
                    rules={[
                      { required: true, message: 'Ism kiritilishi shart!' },
                    ]}
                    layout='vertical'
                  >
                    <Input placeholder='Ism' />
                  </Form.Item>

                  <Form.Item
                    name={'lastName'}
                    rules={[
                      { required: true, message: 'Familiya kiritilishi shart!' },
                    ]}
                    layout='vertical'
                  >
                    <Input placeholder='Familiya' />
                  </Form.Item>

                  <Form.Item
                    name="phoneNumber"
                    rules={[
                      { required: true, message: 'Telefon raqami kiritilishi shart!' },
                      { pattern: /^\+998\d{9}$/, message: 'Telefon raqami formati noto‘g‘ri!' },
                    ]}
                    layout='vertical'
                  >
                    <InputMask
                      format={['!+', '!9', '!9', '!8', ...('(99) 999 99 99').split('')]}
                      maskChar={[' ', '(', ')']}
                      setValue={setPhone}
                      placeholder='Telefon raqam'
                      className='input-mask phone-input'
                    />
                  </Form.Item>

                  <Form.Item
                    name="passport"
                    rules={[
                      { required: true, message: 'Pasport seriya va raqami kiritilishi shart!' },
                      { pattern: /^[A-Z]{2}\d{7}$/, message: 'Pasport formati noto‘g‘ri!' },
                    ]}
                    layout='vertical'
                  >
                    <InputMask
                      format={'AA 9999999'.split('')}
                      maskChar={[' ']}
                      setValue={setPassport}
                      placeholder="Pasport seriya va raqam"
                      className='input-mask passport-input'
                    />
                  </Form.Item>

                  <Form.Item
                    name="pinfl"
                    rules={[
                      { required: true, message: 'JShShIR kiritilishi shart!' },
                      { pattern: /^\d{14}$/, message: 'JShShIR faqat 14 ta raqamdan iborat bo‘lishi kerak!' },
                    ]}
                    layout='vertical'
                  >
                    <InputMask
                      format={Array.from({ length: 14 }, () => '9')}
                      maskChar={[' ']}
                      setValue={setPinfl}
                      placeholder="JShShIR"
                      className='input-mask pinfl-input'
                    />
                  </Form.Item>
                </Flex>

                <Flex gap={20} justify='center' align='center' wrap>
                  <Button className="main-btn one-id-btn">
                    ONE ID orqali kirish
                  </Button>

                  <Button
                    className="main-btn primary-btn register-btn"
                    htmlType="submit"
                  >
                    Ro‘yxatdan o‘tish
                  </Button>
                </Flex>
              </Flex>
            </Form>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default GetPhone;
