import { Flex } from "antd";
import console from "console";
import { useState } from "react";
import ControlledFlow from "../../../components/ControlledFlow/ControlledFlow";
import GetSMS from "../RegisterPage/GetSMS";
import { LoginForm } from "./LoginForm";

const LoginPage = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState({});
  // const [login] = useLoginMutation();
  // const [verify] = useVerifyOtpMutation();

  const handleLoginForm = async (data: object) => {
    try {
      setData(prev => ({ ...prev, ...data }));
      // const res = await login(data as ILogin);
      // if ((res as IBaseDataRes<ILoginRes>).data.validateOtp) {
      //   setIndex(prev => prev + 1);
      // }
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  const handleGetSMS = async (data: object) => {
    try {
      let newData = {};
      setData(prev => {
        newData = { ...prev, ...data };
        return newData;
      })
      return true;
      // await verify(newData as IVerifyLogin);
    } catch (err) {
      console.log(err);
      return false
    }
  }



  return (
    <Flex vertical style={{ width: '100%' }} className="login-page pd-box">
      <ControlledFlow current={index} setCurrent={setIndex} data={data} setData={setData}>
        <LoginForm handleSubmit={handleLoginForm} />
        <GetSMS handleSubmit={handleGetSMS} />
      </ControlledFlow>
    </Flex>
  )
}

export default LoginPage