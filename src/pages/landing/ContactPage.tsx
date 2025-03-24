import { Flex, Typography } from "antd"
import { PhoneIcon } from "../../assets/icons"
import SendArticle from "./components/SendArticle"

const ContactPage = () => {
    return (
        <Flex vertical className="contact-page">
            <Typography.Title className="main-title" level={2} style={{ margin: 0 }}>
                <PhoneIcon /> Bog’lanish
            </Typography.Title>
            <SendArticle />
        </Flex>
    )
}

export default ContactPage