import { Viewer } from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Button, Flex, Tag, Typography } from "antd";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthorsIcon, CalendarIcon, DownloadIcon, EyeIcon, JournalIcon, PopularArticlesIcon, RightIcon } from "../../assets/icons";

const ArticleDetailsPage = () => {
    const { id } = useParams();
    console.log(id);

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    return (
        <Flex vertical className="article-details-page">
            <Flex vertical className="main-title" gap={40}>
                <Typography.Title level={2} style={{ margin: 0 }}>
                    <PopularArticlesIcon /> Maqola
                </Typography.Title>
                <Typography.Title level={1} style={{ margin: 0 }}>Infokommunikatsiya tarmoqlarda Buyurtmalarni tushish va ularga xizmat ko’rsatish jarayonlarini modellashtirish va rivojlantirish</Typography.Title>
            </Flex>
            <Flex vertical gap={23} className="article-main padding-box">
                <Flex wrap align="center" gap={40} justify="space-between">
                    <Flex vertical className="meta-info" gap={8}>
                        <Flex wrap gap={40}>
                            <Typography.Text><CalendarIcon /> 15.02.2025</Typography.Text>
                            <Typography.Text><EyeIcon /> 568</Typography.Text>
                        </Flex>
                        <Typography.Text><AuthorsIcon /> <strong>Mualliflar:</strong> Shamsiddinov Saidamir Shavkatovich</Typography.Text>
                        <Typography.Text><JournalIcon /> <strong>Jurnal soni:</strong> Toshkent International University</Typography.Text>
                    </Flex>
                    <Flex vertical gap={20}>
                        <Button type="primary" icon={<RightIcon />} className="main-btn primary-btn">Onlayn o'qish</Button>
                        <Button icon={<DownloadIcon />} className="main-btn secondary-btn">Yuklab olish</Button>
                    </Flex>
                </Flex>
                <Flex vertical gap={40} className="article-description">
                    <Flex vertical gap={30}>
                        <Typography.Text strong className="sub-title"><AuthorsIcon /> Mualliflar ish joyi</Typography.Text>
                        <ul>
                            <li>University of management and Future Technologies</li>
                            <li>Oliy ta’lim, fan va innovatsiyalar vazirligi, Toshkent, O‘zbekiston</li>
                            <li>Kommunikatsiya va raqamli texnologiyalar kafedrasi, “University of management and future technologies” universiteti, Toshkent, 100208, O‘zbekiston</li>
                            <li>Oliy ta’lim, fan va innovatsiyalar vazirligi, Toshkent, O‘zbekiston</li>
                        </ul>
                    </Flex>
                    <Flex vertical gap={30}>
                        <Typography.Text strong className="sub-title"><PopularArticlesIcon /> Mualliflar ish joyi</Typography.Text>
                        <Typography.Text>Maqolada Temuriylar davrida tasavvuf rivoji va uni tadqiq qilishning nazariy-metodologik muammolari, Temuriylar davri mutasavvuflarining tasavvufiy falsafiy qarashlarida komil inson talqini, Temuriylar davrida mutafakkirlarining komil insonni tarbiyalash borasidagi qarashlarining bugungi kundagi ahamiyati o‘rganilgan. Shuningdek, Temuriylar davri mutafakkirlari tasavvufiy-falsafiy qarashlarida komil insonga oid g‘oyalarning rivojlanishida Amir Temurning o‘rni tahlil qilingan.</Typography.Text>
                    </Flex>
                    <Flex gap={20} wrap>
                        <Tag>Resurs turi: <span>Ilmiy maqola</span></Tag>
                        <Tag>Resurs tili: <span>Ilmiy maqola</span></Tag>
                        <Tag>ISSN raqami: <span>2345-1234</span></Tag>
                        <Tag>Sahifa soni: <span>25</span></Tag>
                        <Tag>Resurs sohasi: <span>Falsafa</span></Tag>
                        <Tag>Nashr yili: <span>2025</span></Tag>
                        <Tag>Nashriyot: <span>Ilmiy institut</span></Tag>
                        <Tag>Kalit so'zlar: <span>Temuriylar davri, tasavvuf, ma’naviy-ruhiy, kamolot, ijtimoiy-himoya, tarix, siyosat</span></Tag>
                    </Flex>
                </Flex>
                <Viewer
                    fileUrl={"/test.pdf"}
                    plugins={[defaultLayoutPluginInstance]}
                    defaultScale={1}
                    enableSmoothScroll
                />
            </Flex>
        </Flex>
    )
}

export default ArticleDetailsPage