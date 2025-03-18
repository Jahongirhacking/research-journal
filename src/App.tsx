import { LoadingOutlined } from "@ant-design/icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import MainRouter from "./routes";
import './style.scss';


const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    setIsReady(true);
  }, [])

  if (!isReady) return (
    <>
      {
        createPortal(
          <LoadingOutlined className="loading" />,
          document.body
        )
      }
    </>
  )

  return <MainRouter />
}

export default App
