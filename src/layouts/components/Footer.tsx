import { Flex, FlexProps } from "antd"
import { FC } from "react"

const Footer: FC<Omit<FlexProps, 'children'>> = (props) => {
    return (
        <Flex vertical {...props}>
            Footer
        </Flex>
    )
}

export default Footer