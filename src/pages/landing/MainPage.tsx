import { Button, Card, Flex, Typography } from "antd"
import { Link } from "react-router-dom"
import { LastJournalIcon, PopularArticlesIcon, Question1Icon, Question2Icon, Question3Icon } from "../../assets/icons"
import Article from "../../components/Article"
import Journal from "../../components/Journal"

const MainPage = () => {
    const questionCards = [
        {
            title: "Jurnal haqida?",
            icon: <Question1Icon />,
            info: "Maqola – bu muayyan mavzuda yozilgan tahliliy, axborot beruvchi yoki ilmiy asoslangan matn bo‘lib, odatda ommaga yoki mutaxassislarga mo‘ljallangan bo‘ladi.",
            url: "#"
        },
        {
            title: "Jurnal haqida?",
            icon: <Question2Icon />,
            info: "Maqola – bu muayyan mavzuda yozilgan tahliliy, axborot beruvchi yoki ilmiy asoslangan matn bo‘lib, odatda ommaga yoki mutaxassislarga mo‘ljallangan bo‘ladi.",
            url: "#"
        },
        {
            title: "Jurnal haqida?",
            icon: <Question3Icon />,
            info: "Maqola – bu muayyan mavzuda yozilgan tahliliy, axborot beruvchi yoki ilmiy asoslangan matn bo‘lib, odatda ommaga yoki mutaxassislarga mo‘ljallangan bo‘ladi.",
            url: "#"
        },
    ]
    return (
        <Flex vertical className="main-page">
            <Flex className="hero padding-box">
                <Flex vertical gap={60} className="hero-content">
                    <Typography.Title level={2} style={{ margin: 0 }}>Jurnal va Maqolalar</Typography.Title>
                    <Typography.Text strong>Maqola – bu muayyan mavzuda yozilgan tahliliy, axborot beruvchi yoki ilmiy asoslangan matn bo‘lib, odatda ommaga yoki mutaxassislarga mo‘ljallangan bo‘ladi.</Typography.Text>
                    <Button className="main-btn secondary-btn">Maqola yuborish</Button>
                </Flex>
            </Flex>
            <Flex vertical className="questions">
                <Flex className="question-card-container padding-box" gap={20}>
                    {
                        questionCards.map((card, index) => (
                            <Card key={index} className="question-card">
                                <Flex vertical gap={12}>
                                    <Typography.Text strong>{card.title}</Typography.Text>
                                    <Flex gap={24} wrap>
                                        {card.icon}
                                        <Typography.Text>{card.info}</Typography.Text>
                                    </Flex>
                                    <Link to={card.url} style={{ marginLeft: 'auto' }}>Batafsil</Link>
                                </Flex>
                            </Card>
                        ))
                    }
                </Flex>
            </Flex>
            <Flex vertical className="popular-articles padding-box" gap={70} align="center">
                <Typography.Title level={2} className="main-page__title"><PopularArticlesIcon /> Ommabop Maqolalar</Typography.Title>
                <Flex gap={20} wrap className="card-container">
                    {
                        Array.from({ length: 6 }).map((_, index) => (
                            <Article key={index} />
                        ))
                    }
                </Flex>
                <Link to={'#'}>
                    <Button className="main-btn primary-btn">Barchasini ko'rish</Button>
                </Link>
            </Flex>
            <Flex vertical className="last-journals padding-box" align="center" gap={58}>
                <Typography.Title level={2} className="main-page__title"><LastJournalIcon /> Jurnalning So’ngi Sonlari </Typography.Title>
                <Flex gap={20} wrap className="card-container">
                    {
                        Array.from({ length: 4 }).map((_, index) => (
                            <Journal key={index} />
                        ))
                    }
                </Flex>
            </Flex>
            <Flex vertical className="send-article">
                <Flex vertical className="padding-box" align="center" gap={28}>
                    <Typography.Title level={1} style={{ margin: 0 }}>O’z maqolangizni bizning online jurnalimizda chop eting!</Typography.Title>
                    <Typography.Text>Taklif va Kansultatsiyalar uchun biz bilan bog’laning!</Typography.Text>
                    <Button className="main-btn primary-btn">Maqola yuborish</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default MainPage