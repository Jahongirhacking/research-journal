
import { Flex, message } from 'antd';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import ControlledFlow from '../../../components/ControlledFlow/ControlledFlow';
import { useRegisterMutation } from "../../../services/users";
import { IRegister } from '../../../services/users/type';
import { getLocalStorage, localStorageNames, setLocalStorage } from '../../../utils/storageUtils';
import GetPhone from './GetPhone';
import GetSMS from './GetSMS';
import SetPassword from './SetPassword';

export const RegisterPage = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState({});
  const [register] = useRegisterMutation();

  const handleGetPhone = async (data: object) => {
    console.log(data);
    let deviceId = getLocalStorage(localStorageNames.deviceId);
    if (!deviceId) {
      deviceId = uuidv4();
      setLocalStorage(localStorageNames.deviceId, deviceId);
    }
    setData((prevData) => ({ ...prevData, ...data, deviceId, deviceName: navigator.userAgent }));
    return true;
  };

  const handleSetPassword = async (data: object) => {
    setData((prevData) => ({ ...prevData, ...data }));
    return true;
  };

  const handleGetSMS = async (data: object) => {
    console.log("hi", data);
    try {
      let newData = data;
      setData((prevData) => {
        newData = { ...prevData, ...data };
        return newData;
      })
      const res = await register(newData as IRegister).unwrap();
      console.log('res', res);
      const isSuccess = !!res.accessToken;
      if (isSuccess) {
        message.success(res.message)
      } else {
        message.error(res.message)
      }
      return isSuccess;
    } catch (err) {
      console.error(err);
      return false;
    }
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
