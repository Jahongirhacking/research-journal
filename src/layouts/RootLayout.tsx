import { Flex } from "antd"
import { Outlet } from "react-router-dom"
import './RootLayout.scss'
import Footer from "./components/Footer"
import Header from "./components/Header"

const RootLayout = () => {
    return (
        <Flex className="root-layout" vertical>
            <Header className="root-header" />
            <Flex vertical className="root-main">
                <Outlet />
            </Flex>
            <Footer className="root-footer" />
        </Flex>
    )
}

export default RootLayout