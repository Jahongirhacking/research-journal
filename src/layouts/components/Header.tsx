import { Flex, FlexProps } from "antd"
import { FC } from "react"

const Header: FC<Omit<FlexProps, 'children'>> = (props) => {
    return (
        <Flex vertical {...props}>
            Header
        </Flex>
    )
}

export default Header