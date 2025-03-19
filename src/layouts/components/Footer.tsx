import { Button, Flex, FlexProps, Image, Typography } from "antd"
import { FC } from "react"
import { Link } from "react-router-dom"
import { FacebookIcon, InstagramIcon, LinkedInIcon, LocationIcon, MailIcon, PhoneIcon, TwitterIcon, YouTubeIcon } from "../../assets/icons"

const Footer: FC<Omit<FlexProps, 'children'>> = (props) => {
    return (
        <Flex vertical gap={135} align="center" {...props}>
            <Flex gap={90} justify="space-between" align="center" style={{ width: '100%' }} wrap>
                <Flex vertical gap={67}>
                    <Link to={'/'}>
                        <Image preview={false} src="/images/logo.svg" />
                    </Link>
                    <a href="https://edu.uz/" target="_blank">
                        <Image preview={false} src="/images/edu.png" />
                    </a>
                </Flex>
                <Flex className="footer-nav" justify="space-between" wrap>
                    <Flex vertical gap={40}>
                        <Typography.Title level={3}>Bo’limlar</Typography.Title>
                        <Flex vertical gap={30}>
                            <Link to={'/'}>Asosiy sahifa</Link>
                            <Link to={'/editorial'}>Tahririyat</Link>
                            <Link to={'/profile/send'}>Maqola yuborish</Link>
                            <Link to={'/announcements'}>E’lonlar</Link>
                        </Flex>
                    </Flex>
                    <Flex vertical gap={40}>
                        <Typography.Title level={3}>Resurslar</Typography.Title>
                        <Flex vertical gap={30}>
                            <Link to={'/about'}>Jurnal</Link>
                            <Link to={'/articles'}>Maqolalar</Link>
                        </Flex>
                    </Flex>
                    <Flex vertical gap={40}>
                        <Typography.Title level={3}>Bog’lanish</Typography.Title>
                        <Flex vertical gap={30}>
                            <Button type="text" icon={<LocationIcon />} href="#">Toshkent sh., 2-Chimboy ko’chasi, 96-uy</Button>
                            <Button type="text" icon={<MailIcon />} href="#">press@edu.uz</Button>
                            <Button type="text" icon={<PhoneIcon />} href="#">+998 93 5990740</Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex gap={80} justify="space-between" align="center" style={{ width: '100%' }} wrap>
                <Typography.Text>Copyright © 2025  <a href="https://www.tiu.uz/" target="_blank">tiu.uz</a> | Barcha huquqlar himoyalangan</Typography.Text>
                <Flex gap={20} align="center" className="social-links" wrap>
                    <Button href="#" target="_blank" icon={<FacebookIcon />} shape="circle" />
                    <Button href="#" target="_blank" icon={<LinkedInIcon />} shape="circle" />
                    <Button href="#" target="_blank" icon={<InstagramIcon />} shape="circle" />
                    <Button href="#" target="_blank" icon={<YouTubeIcon />} shape="circle" />
                    <Button href="#" target="_blank" icon={<TwitterIcon />} shape="circle" />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Footer