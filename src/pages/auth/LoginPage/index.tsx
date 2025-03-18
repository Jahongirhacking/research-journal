import ControlledFlow from "@/components/ControlledFlow";
import { IBaseDataRes } from "@/services/type";
import { useLoginMutation, useVerifyOtpMutation } from "@/services/users";
import { ILogin, ILoginRes, IVerifyLogin } from "@/services/users/type";
import { Flex } from "antd";
import { useState } from "react";
import GetSMS from "../RegisterPage/GetSMS";
import { LoginForm } from "./LoginForm";

const LoginPage = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState({});
  const [login] = useLoginMutation();
  const [verify] = useVerifyOtpMutation();

  const handleLoginForm = async (data: object) => {
    try {
      setData(prev => ({ ...prev, ...data }));
      const res = await login(data as ILogin);
      if ((res as IBaseDataRes<ILoginRes>).data.validateOtp) {
        setIndex(prev => prev + 1);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const handleGetSMS = async (data: object) => {
    try {
      let newData = {};
      setData(prev => {
        newData = { ...prev, ...data };
        return newData;
      })
      await verify(newData as IVerifyLogin);
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <Flex vertical style={{ width: '100%' }} className="login-page pd-box">
      <ControlledFlow indexState={[index, setIndex]} data={data}>
        <LoginForm handleSubmit={handleLoginForm} />
        <GetSMS handleSubmit={handleGetSMS} />
      </ControlledFlow>
    </Flex>
  )
}

export default LoginPage