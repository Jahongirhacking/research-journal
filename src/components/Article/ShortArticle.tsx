import { Card, Flex, Tag, Typography } from "antd"
import { Link } from "react-router-dom"
import { AuthorsIcon } from "../../assets/icons"
import "./ShortArticle.scss"

const ShortArticle = () => {
    return (
        <Card className="short-article-card">
            <Flex vertical gap={20}>
                <Typography.Title level={3} style={{ margin: 0 }}>Infokommunikatsiya tarmoqlarda Buyurtmalarni tushish va ularga xizmat ko’rsatish jarayonlarini modellashtirish</Typography.Title>
                <Tag>Ilmiy maqola</Tag>
                <Flex align="center" gap={6} wrap>
                    <AuthorsIcon />
                    <Typography.Text>Mualliflar:</Typography.Text>
                    <Flex><Link to={'#'}>Shamsiddinov S.Sh, Ahmedov. B.D</Link></Flex>
                </Flex>
            </Flex>
        </Card>
    )
}

export default ShortArticle