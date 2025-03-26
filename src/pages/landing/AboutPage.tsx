import { Flex, Image, Typography } from "antd"
import { CupIcon, JournalIcon, MagicIcon, StandingsIcon } from "../../assets/icons"
import SendArticle from "./components/SendArticle"

const AboutPage = () => {
    return (
        <Flex vertical className="about-page">
            <Flex vertical className="main-title" gap={40}>
                <Typography.Title level={2} style={{ margin: 0 }}>
                    <JournalIcon /> Jurnal haqida
                </Typography.Title>
                <Flex gap={37} justify="center" align="center" className="journal-info">
                    <Image src="/images/journal_cover.png" preview={false} />
                    <Typography.Text strong>Jurnal pedagogika, moliya, yurispridensiya, raqamli iqtisodiyot, pedagogika va psixologiya sohalaridagi ilmiy-amaliy innovatsion yangiliklarni har tomonlama yoritishni, jurnalxonlarning pedagogik, iqtisodiy, ilmiy-innovatsion axborotga bo‘lgan talab-ehtiyojlarini yanada to‘laroq qondirishni, jurnal imkoniyatlaridan keng va samarali foydalanishni, shuningdek fan, ta’lim va ishlab chiqarishning samarali integratsiyasini olib borish, yangiliklar, ilmiy-amaliy ishlar, innovatsion g‘oyalar va ishlab chiqarishdagi yutuqlarni, shuningdek tizimda faoliyat ko‘rsatayotgan xodimlarning ilg‘or tajribalari va olib borgan ilmiy-tadqiqot natijalarini targ‘ib qilish va ommalashtirish maqsad qilingan.</Typography.Text>
                </Flex>
            </Flex>
            <Flex vertical className="padding-box" gap={90}>
                <Flex vertical className="ambition-box" gap={60}>
                    <Flex gap={50}>
                        <CupIcon />
                        <Flex vertical>
                            <Typography.Text strong>Biz qadrlaymiz</Typography.Text>
                            <Typography.Text>Taqdim etilgan maqolalar sifati, asosliligi va ahamiyatini shu sohadagi mutaxassislar baholaydigan o‘zaro baholash jarayonini qo‘llash bizning qadriyatimiz. Bundan tashqari, biz ilmiy tadqiqotlarni arxivlashning tizimli va tashkiliy usulini taqdim etamiz. Ushbu arxiv funksiyasi kelajak avlodlarga turli sohalardagi bilimlarning rivojlanishini o'rganish va tushunish imkonini berish uchun juda muhimdir.</Typography.Text>
                        </Flex>
                    </Flex>
                    <Flex gap={50}>
                        <MagicIcon />
                        <Flex vertical>
                            <Typography.Text strong>Biz qadrlaymiz</Typography.Text>
                            <Typography.Text>Taqdim etilgan maqolalar sifati, asosliligi va ahamiyatini shu sohadagi mutaxassislar baholaydigan o‘zaro baholash jarayonini qo‘llash bizning qadriyatimiz. Bundan tashqari, biz ilmiy tadqiqotlarni arxivlashning tizimli va tashkiliy usulini taqdim etamiz. Ushbu arxiv funksiyasi kelajak avlodlarga turli sohalardagi bilimlarning rivojlanishini o'rganish va tushunish imkonini berish uchun juda muhimdir.</Typography.Text>
                        </Flex>
                    </Flex>
                    <Flex gap={50}>
                        <StandingsIcon />
                        <Flex vertical>
                            <Typography.Text strong>Biz qadrlaymiz</Typography.Text>
                            <Typography.Text>Taqdim etilgan maqolalar sifati, asosliligi va ahamiyatini shu sohadagi mutaxassislar baholaydigan o‘zaro baholash jarayonini qo‘llash bizning qadriyatimiz. Bundan tashqari, biz ilmiy tadqiqotlarni arxivlashning tizimli va tashkiliy usulini taqdim etamiz. Ushbu arxiv funksiyasi kelajak avlodlarga turli sohalardagi bilimlarning rivojlanishini o'rganish va tushunish imkonini berish uchun juda muhimdir.</Typography.Text>
                        </Flex>
                    </Flex>
                </Flex>
                <SendArticle />
            </Flex>
        </Flex>
    )
}

export default AboutPage