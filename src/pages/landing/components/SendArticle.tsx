import { Button, Flex, Typography } from "antd"
import "./SendArticle.scss"

const SendArticle = () => {
    return (
        <Flex vertical className="send-article">
            <Flex vertical className="padding-box" align="center" gap={28}>
                <Typography.Title level={1} style={{ margin: 0 }}>O’z maqolangizni bizning online jurnalimizda chop eting!</Typography.Title>
                <Typography.Text>Taklif va Kansultatsiyalar uchun biz bilan bog’laning!</Typography.Text>
                <Button className="main-btn primary-btn">Maqola yuborish</Button>
            </Flex>
        </Flex>
    )
}

export default SendArticle