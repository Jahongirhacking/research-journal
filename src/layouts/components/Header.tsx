import { LogoutOutlined, MenuOutlined } from "@ant-design/icons"
import { Avatar, Button, Drawer, Flex, FlexProps, Image, Select, Typography } from "antd"
import { FC, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { LoginIcon, PhoneIcon, TiuIcon } from "../../assets/icons"
import { logout } from "../../store/slices/userSlice"
import { RootState } from "../../store/store"

const Header: FC<Omit<FlexProps, 'children'>> = (props) => {
    const navbar = [
        { label: "Asosiy sahifa", href: '/' },
        { label: "Maqolalar", href: '/articles' },
        { label: "Jurnal haqida", href: '/about' },
        { label: "Tahririyat", href: '/editorial' },
        { label: "E’lonlar", href: '/announcements' },
        { label: "Bog’lanish", href: '/contact' },
        { label: "Maqola yuborish", href: '/profile/send-article' },
    ]
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { token, user } = useSelector((store: RootState) => store.user);
    const dispatch = useDispatch();

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
                    {
                        token ? (
                            <Flex gap={9} className="profile-link" align="center">
                                <Flex vertical gap={4} align="flex-end">
                                    <Typography.Text strong>{user?.firstName ?? ""} {user?.lastName[0] ?? ""}.</Typography.Text>
                                    <Button
                                        type="text"
                                        color="danger"
                                        variant="text"
                                        size="small"
                                        icon={<LogoutOutlined />}
                                        onClick={() => dispatch(logout())}
                                    >
                                        Chiqish
                                    </Button>
                                </Flex>
                                <Link to={"/profile"}>
                                    <Avatar src={user?.photoId}>
                                        {`${(user?.firstName ?? "")[0] ?? ""}${(user?.lastName ?? "")[0] ?? ""}`}
                                    </Avatar>
                                </Link>
                            </Flex>
                        ) : (
                            <Link to={"/auth/login"}>
                                <Button icon={<LoginIcon />} className="main-btn primary-btn">Kirish</Button>
                            </Link>
                        )
                    }

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