import { Button, Card, Flex, Image, Typography } from "antd"
import { CalendarIcon, DownloadIcon, EyeIcon, RightIcon } from "../../assets/icons"
import "./style.scss"

const Journal = () => {
    return (
        <Card className="journal-card">
            <Flex vertical gap={14}>
                <Flex vertical gap={9}>
                    <Typography.Text>Volume 1 Issue 1</Typography.Text>
                    <Image src="/images/journal_cover.png" preview={false} />
                </Flex>
                <Flex vertical gap={8}>
                    <Flex gap={20} justify="space-between" align="center">
                        <Button type="text" icon={<CalendarIcon />}>15.02.2025</Button>
                        <Button type="text" icon={<EyeIcon />}>568</Button>
                    </Flex>
                    <Flex gap={20} justify="space-between" align="center" className="journal-btns">
                        <Button icon={<DownloadIcon />} className="download-btn">Yuklash</Button>
                        <Button icon={<RightIcon />} iconPosition="end" className="detail-btn">Batafsil</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    )
}

export default Journal