import { Avatar, Card, Flex, Typography } from "antd"
import { useSelector } from "react-redux"
import { EducationIcon, JobIcon, MailIcon, PhoneIcon } from "../../../assets/icons"
import { RootState } from "../../../store/store"

const ProfileCard = () => {
    const { user } = useSelector((store: RootState) => store.user);
    return (
        <Card className="profile-card">
            <Flex gap={20}>
                <Avatar shape="square" src={user?.photoId}>
                    {`${(user?.firstName ?? "")[0]}${(user?.lastName ?? "")[0]}`}
                </Avatar>
                <Flex vertical gap={25}>
                    <Typography.Text strong>{`${user?.fullName}`}</Typography.Text>
                    <Flex vertical gap={20} className="profile-info">
                        <Typography.Text><MailIcon /> {user?.email || "Email topilmadi"}</Typography.Text>
                        <Typography.Text><PhoneIcon /> +{user?.phoneNumber || "Telefon raqam topilmadi"}</Typography.Text>
                        <Typography.Text><JobIcon /> {user?.academicTitle || "Lavozim haqida ma'lumot topilmadi"}</Typography.Text>
                        <Typography.Text><EducationIcon /> {user?.organization || "Tashkilot haqida ma'lumot topilmadi"}</Typography.Text>
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    )
}

export default ProfileCard