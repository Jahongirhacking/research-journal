import { Button, Flex, Image, Typography } from "antd"
import { PopularArticlesIcon, RightIcon } from "../../assets/icons"

const SendArticle = () => {
    return (
        <Flex vertical className="profile__send-article">
            <Typography.Title level={2} className="main-title"><PopularArticlesIcon /> Maqola yuborish</Typography.Title>
            <Flex vertical gap={80} className="padding-box">
                <Flex gap={20} wrap>
                    <Image src={"/images/tiu-image.jpeg"} width={650} preview={false} />
                    <Flex vertical gap={46} align="center" className="instruction">
                        <Typography.Title level={3} style={{ margin: 0 }}>Hurmatli mualliflar maqola yuborish bo’limiga xush kelibsiz!</Typography.Title>
                        <Flex vertical gap={30} align="center">
                            <Typography.Text>Maqola yuborishdan oldin yo’riqnoma bilan tanishib chiqishingiz tavsiya etiladi!</Typography.Text>
                            <Button
                                icon={<RightIcon />}
                                iconPosition="end"
                                className="main-btn primary-btn"
                            >
                                Yo’riqnomaga o’tish
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default SendArticle