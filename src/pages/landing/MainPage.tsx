import { Button, Card, Flex, Image, Typography } from "antd"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { LastJournalIcon, NewsIcon, PopularArticlesIcon, Question1Icon, Question2Icon, Question3Icon } from "../../assets/icons"
import ShortAnnouncement from "../../components/Announcement/ShortAnnouncement"
import ShortArticle from "../../components/Article/ShortArticle"
import Journal from "../../components/Journal"
import SendArticle from "./components/SendArticle"

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

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    return (
        <Flex vertical className="main-page">
            <Flex className="hero padding-box" gap={20} justify="space-between">
                <Flex vertical gap={60} className="hero-content">
                    <Typography.Title level={2} style={{ margin: 0 }}>Jurnal va Maqolalar</Typography.Title>
                    <Typography.Text strong>Maqola – bu muayyan mavzuda yozilgan tahliliy, axborot beruvchi yoki ilmiy asoslangan matn bo‘lib, odatda ommaga yoki mutaxassislarga mo‘ljallangan bo‘ladi.</Typography.Text>
                    <Button className="main-btn secondary-btn">Maqola yuborish</Button>
                </Flex>
                <Image className="hero-img" src="/images/hero-bg-1.png" preview={false} />
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
                            <ShortArticle key={index} />
                        ))
                    }
                </Flex>
                <Link to={'#'}>
                    <Button className="main-btn primary-btn">Barchasini ko'rish</Button>
                </Link>
            </Flex>
            <Flex vertical className="last-journals padding-box" align="center" gap={58}>
                <Typography.Title level={2} className="main-page__title"><LastJournalIcon /> Jurnalning So’ngi Sonlari</Typography.Title>
                <Flex gap={20} wrap className="card-container">
                    {
                        Array.from({ length: 4 }).map((_, index) => (
                            <Journal key={index} />
                        ))
                    }
                </Flex>
            </Flex>
            <Flex vertical className="announcements padding-box" align="center" gap={43}>
                <Typography.Title level={2} className="main-page__title"><NewsIcon /> Yangiliklar</Typography.Title>
                <Flex gap={20} wrap className="card-container">
                    {
                        Array.from({ length: 6 }).map((_, index) => (
                            <ShortAnnouncement key={index} />
                        ))
                    }
                </Flex>
            </Flex>
            <SendArticle />
        </Flex>
    )
}

export default MainPage