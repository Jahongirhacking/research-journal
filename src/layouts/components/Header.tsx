import { MenuOutlined } from "@ant-design/icons"
import { Button, Drawer, Flex, FlexProps, Image, Select, Typography } from "antd"
import { FC, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { LoginIcon, PhoneIcon, TiuIcon } from "../../assets/icons"

const Header: FC<Omit<FlexProps, 'children'>> = (props) => {
    const navbar = [
        { label: "Asosiy sahifa", href: '/' },
        { label: "Maqolalar", href: '/articles' },
        { label: "Jurnal haqida", href: '/about' },
        { label: "Tahririyat", href: '/editorial' },
        { label: "E’lonlar", href: '/announcements' },
        { label: "Bog’lanish", href: '/contact' },
    ]
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <Flex vertical {...props}>
            <Flex justify="space-between" className="header-top padding-box">
                <Button type="link" icon={<TiuIcon />} href="https://www.tiu.uz/" target="_blank">tiu.uz</Button>
                <Flex gap={32} align="center" style={{ minWidth: 0 }} className="header-control">
                    <Typography.Text>ISSN: 6729-0988</Typography.Text>
                    <Button type="link" icon={<PhoneIcon />} href="tel:+998977777777" target="_blank">+998977777777</Button>
                    <Select />
                </Flex>
            </Flex>
            <Flex justify="space-between" className="header-bottom padding-box" align="center" gap={24}>
                <Link to={'/'}>
                    <Image src="/images/logo.svg" preview={false} />
                </Link>
                <Flex gap={40} className="links" style={{ minWidth: 0 }}>
                    {
                        navbar.map(el => (
                            <NavLink to={el?.href} key={el?.href || 'index'}>
                                <Typography.Text>{el?.label}</Typography.Text>
                            </NavLink>
                        ))
                    }
                </Flex>
                <Flex gap={24} align="center">
                    <Link to={"/auth/login"}>
                        <Button icon={<LoginIcon />} className="main-btn primary-btn">Kirish</Button>
                    </Link>
                    <Button className="menu-btn main-btn secondary-btn" icon={<MenuOutlined />} onClick={() => setIsDrawerOpen(true)} />
                </Flex>
            </Flex>
            <Drawer
                open={isDrawerOpen}
                closable={false}
                onClose={() => setIsDrawerOpen(false)}
                placement="left"
                width={"auto"}
                style={{ padding: '30px 80px' }}
            >
                <Flex className="links" vertical>
                    {
                        navbar.map(el => (
                            <NavLink className="nav-link" to={el?.href} key={el?.href || 'index'} onClick={() => setIsDrawerOpen(false)}>
                                <Typography.Text>{el?.label}</Typography.Text>
                            </NavLink>
                        ))
                    }
                </Flex>
            </Drawer>
        </Flex>
    )
}

export default Header