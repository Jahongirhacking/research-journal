import { PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Flex, Image, Input, Select, Typography } from "antd";
import { useCallback, useState } from "react";
import { v4 } from "uuid";
import { PopularArticlesIcon, RightIcon } from "../../assets/icons";
import AddAuthor from "./components/AddAuthor";
import ProfileTabs from "./components/ProfileTabs";

export interface IAuthor {
    firstname: string;
    lastname: string;
    middlename: string;
    position: string;
    email: string;
    phone: string;
}


const SendArticle = () => {
    const [authors, setAuthors] = useState<({ id: string } & Partial<IAuthor>)[]>([{ id: v4() }]);

    const handleAddAuthor = () => {
        setAuthors(prev => [...prev, { id: v4() }]);
    }

    const handleChange = useCallback((id: string) => (data: IAuthor) => {
        setAuthors((prev) => prev.map(el => el.id === id ? { id: el.id, ...data } : el));
    }, [])

    const handleRemove = useCallback((id: string) => () => {
        setAuthors((prev) => prev.filter(el => el.id !== id));
    }, [])

    return (
        <Flex vertical className="profile__send-article">
            <Typography.Title level={2} className="main-title"><PopularArticlesIcon /> Maqola yuborish</Typography.Title>
            <Flex vertical gap={80} className="padding-box">
                <ProfileTabs />
                <Flex gap={20} wrap>
                    <Image src={"/images/tiu-image.jpeg"} width={650} preview={false} />
                    <Flex vertical gap={46} align="center" className="instruction">
                        <Typography.Title level={3} style={{ margin: 0 }}>Hurmatli mualliflar maqola yuborish bo’limiga xush kelibsiz!</Typography.Title>
                        <Flex vertical gap={30} align="center">
                            <Typography.Text>Maqola yuborishdan oldin yo’riqnoma bilan tanishib chiqishingiz tavsiya etiladi!</Typography.Text>
                            <Button
                                icon={<RightIcon />}
                                iconPosition="end"
                                className="main-btn primary-btn"
                            >
                                Yo’riqnomaga o’tish
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex vertical className="form-box-container" gap={80}>
                    <Flex vertical className="form-box" gap={34}>
                        <Flex gap={20} className="base-inputs" wrap>
                            <label>
                                <span>Maqola sarlavhasi</span>
                                <Input placeholder="Maqola nomini kiriting..." />
                            </label>
                            <label>
                                <span>Maqola turi</span>
                                <Select placeholder="Maqola turini tanlang" />
                            </label>
                            <label>
                                <span>Maqola tili</span>
                                <Select placeholder="Maqola tilini tanlang" />
                            </label>
                            <label>
                                <span>Resurs sohasi</span>
                                <Select placeholder="Resurs sohasini tanlang" />
                            </label>
                            <label>
                                <span>Jurnal soni</span>
                                <Select placeholder="Jurnal sonini tanlang" />
                            </label>
                            <label>
                                <span>Mamlakat</span>
                                <Select placeholder="Mamlakatni tanlang" />
                            </label>
                            <label>
                                <span>Maqola nashr sanasi</span>
                                <DatePicker placeholder="Sanani tanlang" />
                            </label>
                        </Flex>
                        <label>
                            <span>Mualliflar</span>
                            <Flex vertical gap={30}>
                                {
                                    authors.map((author) => (
                                        <AddAuthor
                                            handleChange={handleChange(author.id)}
                                            handleRemove={handleRemove(author.id)}
                                            key={author.id}
                                        />
                                    ))
                                }
                            </Flex>
                            <Button icon={<PlusOutlined />} onClick={handleAddAuthor} type="primary" />
                        </label>
                        <label>
                            <span>Annotatsiya</span>
                            <Input.TextArea placeholder="Annotatsiya kiriting..." />
                        </label>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default SendArticle