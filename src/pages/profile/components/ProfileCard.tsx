import { Card, Flex, Image, Typography } from "antd"
import { MailIcon, PhoneIcon } from "../../../assets/icons"

const ProfileCard = () => {
    return (
        <Card className="profile-card">
            <Flex gap={20}>
                <Image src="/images/profile.png" preview={false} />
                <Flex vertical gap={25}>
                    <Typography.Text strong>Shamsiddinov Saidamir Shavkatovich</Typography.Text>
                    <Flex vertical gap={20} className="profile-info">
                        <Typography.Text><MailIcon /> saidamirwork@gmail.com</Typography.Text>
                        <Typography.Text><PhoneIcon /> +998936789843</Typography.Text>
                        <Typography.Text><MailIcon /> saidamirwork@gmail.com</Typography.Text>
                        <Typography.Text><MailIcon /> saidamirwork@gmail.com</Typography.Text>
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    )
}

export default ProfileCard