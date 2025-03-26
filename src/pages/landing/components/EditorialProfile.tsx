import { Card, Flex, Image, Typography } from "antd"
import { ProfileIcon } from "../../../assets/icons"
import "./EditorialProfile.scss"

const EditorialProfile = () => {
    return (
        <Card className="editorial-profile-card">
            <Flex gap={70} wrap>
                <Image src="/images/profile.png" preview={false} />
                <Flex vertical gap={38} className="profile-info">
                    <Typography.Text strong className="profile-role">Tahririyat Kengashi Raisi</Typography.Text>
                    <Typography.Text strong className="profile-name"><ProfileIcon /> Alixonov Bekzod Nurillayevich</Typography.Text>
                    <Flex vertical className="profile-honours" gap={4}>
                        <Typography.Text>Pedagogika fanlari nomzodi</Typography.Text>
                        <Typography.Text>Nizomiy nomidagi Toshkent davlat pedagogika universiteti professori</Typography.Text>
                        <Typography.Text>"Science and Innovation" xalqaro ilmiy jurnali tahrir hay'ati raisi</Typography.Text>
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    )
}

export default EditorialProfile