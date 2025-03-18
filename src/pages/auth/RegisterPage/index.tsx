
import { Flex } from 'antd';
import { useState } from 'react';
import ControlledFlow from '../../../components/ControlledFlow/ControlledFlow';
import GetPhone from './GetPhone';
import GetSMS from './GetSMS';
import SetPassword from './SetPassword';
import './style.scss';

export const RegisterPage = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState({});
  // const [register] = useRegisterMutation();

  const handleGetPhone = async (data: object) => {
    console.log(data);
    return true;
    // let deviceId = getLocalStorage(localStorageNames.deviceId);
    // if (!deviceId) {
    //   deviceId = uuidv4();
    //   setLocalStorage(localStorageNames.deviceId, deviceId);
    // }
    // setData((prevData) => ({ ...prevData, ...data, deviceId, deviceName: navigator.userAgent }));
  };

  const handleSetPassword = async (data: object) => {
    setData((prevData) => ({ ...prevData, ...data }));
    return true;
  };

  const handleGetSMS = async (data: object) => {
    console.log(data);
    return true;
    //   try {
    //     let newData = data;
    //     setData((prevData) => {
    //       newData = { ...prevData, ...data };
    //       return newData;
    //     })
    //     const res = await register(newData as IRegister);
    //     console.log('res', res);
    //     const isSuccess = !!(res as IBaseDataRes<ILoginRes>).data.accessToken;
    //     if (isSuccess) {
    //       message.success((res as IBaseDataRes<ILoginRes>).data.message)
    //     } else {
    //       message.error((res as IBaseDataRes<ILoginRes>).data.message)
    //     }
    //     return isSuccess;
    //   } catch (err) {
    //     console.error(err);
    //   }
  };

  return (
    <Flex vertical style={{ width: '100%' }} className="register-page pd-box">
      <ControlledFlow current={index} setCurrent={setIndex} data={data} setData={setData}>
        <GetPhone handleSubmit={handleGetPhone} />
        <SetPassword handleSubmit={handleSetPassword} />
        <GetSMS handleSubmit={handleGetSMS} />
      </ControlledFlow>
    </Flex>
  );
};
