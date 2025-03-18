import InputMask from '@/components/Form/InputMask';
import { paths } from '@/router/paths';
import { getLocalStorage, localStorageNames, setLocalStorage } from '@/utils/storageUtils';
import { Button, Divider, Flex, Form, Input, Segmented } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export const LoginForm = ({ handleSubmit }) => {
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

    const handleLogin = () => {
        let deviceId = getLocalStorage(localStorageNames.deviceId);
        if (!deviceId) {
            deviceId = uuidv4();
            setLocalStorage(localStorageNames.deviceId, deviceId);
        }
        handleSubmit({ deviceId, phoneNumber: phoneNumber.split('').filter((el) => !isNaN(Number.parseInt(el))).join(''), password });
    };

    const handleOneIdLogin = () => {
        // dispatch(loginTest());
    };

    return (
        <div style={{ width: '100%' }} className="login-page pd-box">
            <h2 className="login__main--title">Kirish yoki ro‘yxatdan o‘tish</h2>
            <Segmented
                defaultValue={paths.login}
                options={[
                    { label: `Tizimga kirish`, value: paths.login },
                    { label: `Ro‘yxatdan o‘tish`, value: paths.register },
                ]}
                block
                style={{ marginBottom: 16 }}
                onChange={value => {
                    navigate(value);
                }}
            />

            <Form form={form} onFinish={handleLogin}>
                <Form.Item
                    name={'phoneNumber'}
                    rules={[
                        { required: true, message: 'Telefon raqami kiritilishi shart!' },
                        { pattern: /^\+998\d{9}$/, message: 'Telefon raqami formati noto‘g‘ri!' },
                    ]}
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
                >
                    <Input.Password placeholder="Parol" size="large" value={password} onChange={({ target: { value } }) => setPassword(value)} />
                </Form.Item>

                <Flex justify="flex-end">
                    <Link to={paths.resetPassword} className="login__pathchanger">
                        Parolni unutdingizmi ?
                    </Link>
                </Flex>

                <Button
                    className="main-type-btn primary-btn login-btn"
                    htmlType='submit'
                    style={{ marginTop: 24 }}
                >
                    Kirish
                </Button>

                <Divider>Boshqa yo'l bilan kiring</Divider>

                <Button className="main-type-btn one-id-btn" onClick={handleOneIdLogin}>
                    ONE ID orqali kirish
                </Button>
            </Form>
        </div>
    );
};
