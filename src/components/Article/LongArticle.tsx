import { Card, Flex, Typography } from "antd"
import { AuthorsIcon, CalendarIcon, EyeIcon } from "../../assets/icons"
import "./LongArticle.scss"

const LongArticle = () => {
    return (
        <Card hoverable className="long-article" title={"Infokommunikatsiya tarmoqlarda Buyurtmalarni tushish va ularga xizmat ko’rsatish jarayonlarini modellashtirish va rivojlantirish"}>
            <Flex vertical gap={20}>
                <Flex vertical gap={10} className="meta-info">
                    <Flex wrap style={{ columnGap: 40, rowGap: 12 }}>
                        <Typography.Text><CalendarIcon /> 15.02.2025</Typography.Text>
                        <Typography.Text><EyeIcon /> 568</Typography.Text>
                    </Flex>
                    <Flex wrap gap={40}>
                        <Typography.Text><AuthorsIcon /> Shamsiddinov Saidamir Shavkatovich</Typography.Text>
                    </Flex>
                </Flex>
                <Typography.Text className="article-annotation">
                    Maqolada Temuriylar davrida tasavvuf rivoji va uni tadqiq qilishning nazariy-metodologik muammolari, Temuriylar davri mutasavvuflarining tasavvufiy falsafiy qarashlarida komil inson talqini, Temuriylar davrida mutafakkirlarining komil insonni tarbiyalash borasidagi qarashlarining bugungi kundagi ahamiyati o‘rganilgan. Shuningdek, Temuriylar davri mutafakkirlari tasavvufiy-falsafiy qarashlarida komil insonga oid g‘oyalarning rivojlanishida Amir Temurning o‘rni tahlil qilingan.
                </Typography.Text>
            </Flex>
        </Card>
    )
}

export default LongArticle