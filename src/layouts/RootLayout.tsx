import { Flex } from "antd"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useLazyGetResearcherUserQuery } from "../services/users"
import './RootLayout.scss'
import Footer from "./components/Footer"
import Header from "./components/Header"

const RootLayout = () => {
    const [getResearcher] = useLazyGetResearcherUserQuery();

    useEffect(() => {
        getResearcher();
    }, [getResearcher])

    return (
        <Flex className="root-layout" vertical>
            <Header className="root-header" />
            <Flex vertical className="root-main">
                <Outlet />
            </Flex>
            <Footer className="root-footer padding-box" />
        </Flex>
    )
}

export default RootLayout