import { Button, Divider, Flex, Form, Image, Input, Segmented, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthIcon } from '../../../assets/icons';
import InputMask from '../../../components/Form/InputMask';

export const LoginForm = ({ handleSubmit }: { handleSubmit: (data: object) => Promise<boolean> }) => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [form] = Form.useForm(); // Form instance to control state

    useEffect(() => {
        // Sync state with Form fields
        form.setFieldsValue({
            phoneNumber,
            password,
        });
    }, [phoneNumber, password]);

    const handleLogin = async () => {
        await handleSubmit({});
        // let deviceId = getLocalStorage(localStorageNames.deviceId);
        // if (!deviceId) {
        //     deviceId = uuidv4();
        //     setLocalStorage(localStorageNames.deviceId, deviceId);
        // }
        // handleSubmit({ deviceId, phoneNumber: phoneNumber.split('').filter((el) => !isNaN(Number.parseInt(el))).join(''), password });
    };

    const handleOneIdLogin = () => {
        // dispatch(loginTest());
    };

    return (
        <div style={{ width: '100%' }} className="login-page">
            <Typography.Title level={2} className="main-title"><AuthIcon /> Tizimga kirish</Typography.Title>
            <Flex vertical className='padding-box'>
                <Flex className='auth-content'>
                    <Flex className='image-container'>
                        <Image src='/images/auth_img.png' preview={false} />
                    </Flex>
                    <Flex vertical className='auth-main'>
                        <Segmented
                            defaultValue={"/auth/login"}
                            options={[
                                { label: `Tizimga kirish`, value: "/auth/login" },
                                { label: `Ro‘yxatdan o‘tish`, value: "/auth/register" },
                            ]}
                            block
                            onChange={value => {
                                navigate(value);
                            }}
                        />

                        <Form form={form} onFinish={handleLogin} autoComplete='off'>
                            <Flex vertical gap={90} style={{ width: '100%' }}>
                                <Flex vertical gap={20}>
                                    <Form.Item
                                        name={'phoneNumber'}
                                        label="Telefon raqamingizni kiriting"
                                        rules={[
                                            { required: true, message: 'Telefon raqami kiritilishi shart!' },
                                            { pattern: /^\+998\d{9}$/, message: 'Telefon raqami formati noto‘g‘ri!' },
                                        ]}
                                        layout='vertical'
                                    >
                                        <InputMask
                                            format={['!+', '!9', '!9', '!8', ...('(99) 999 99 99').split('')]}
                                            maskChar={[' ', '(', ')']}
                                            setValue={setPhoneNumber}
                                            placeholder="Telefon raqam"
                                            className='input-mask phone-input'
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name={'password'}
                                        rules={[
                                            { required: true, message: 'Parol kiritilishi shart!' },
                                        ]}
                                        label="Parolingizni kiriting"
                                        layout='vertical'
                                    >
                                        <Input.Password placeholder="Parol" size="large" value={password} onChange={({ target: { value } }) => setPassword(value)} />
                                    </Form.Item>

                                    <Flex justify="flex-end" style={{ marginLeft: 'auto' }}>
                                        <Link to={"/auth/reset-password"} className="login__pathchanger">
                                            Parolni unutdingizmi ?
                                        </Link>
                                    </Flex>
                                </Flex>
                                <Flex vertical align='center' gap={20}>
                                    <Button
                                        className="main-btn primary-btn login-btn"
                                        htmlType='submit'
                                    >
                                        Kirish
                                    </Button>

                                    <Divider>Boshqa yo'l bilan kiring</Divider>

                                    <Button className="main-btn one-id-btn" onClick={handleOneIdLogin}>
                                        ONE ID orqali kirish
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
