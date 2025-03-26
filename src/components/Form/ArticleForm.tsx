import { ClearOutlined, CloseCircleOutlined, FilterOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Flex, Input, Row, Select, Typography } from "antd";
import moment from "moment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ArticleForm.scss";


const ArticleForm = () => {
    const sortTypeOptions = [
        { label: "Kod bo'yicha", value: 'code' },
        { label: "Nom bo'yicha", value: 'name' }
    ];
    const sortOrderOptions = [
        { label: "O'sish tartibida", value: 'asc' },
        { label: "Kamayish tartibida", value: 'desc' }
    ];
    const [showFilter, setShowFilter] = useState(false);
    const [articleName, setArticleName] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [countryName, setCountryName] = useState(null);
    const [resourceLanguage, setResourceLanguage] = useState(null);
    const [resourceField, setResourceField] = useState(null);
    const [articleDate, setArticleDate] = useState<number | null>(null);
    const [sortType, setSortType] = useState(sortTypeOptions[0].value);
    const [sortOrder, setSortOrder] = useState(sortOrderOptions[0].value);
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log(articleDate);
    }

    const handleClearFilters = () => {
        navigate(window.location.pathname, { replace: true });
    }

    return (
        <Flex vertical className="article-form-container">
            <Flex vertical={showFilter} gap={20} wrap justify="center" align="flex-end">
                <Row gutter={[20, 20]} className="article-inputs" wrap>
                    <Col span={8}>
                        <label>
                            <Typography.Text strong>Maqola nomi</Typography.Text>
                            <Input
                                value={articleName}
                                onChange={(({ target: { value } }) => setArticleName(value))}
                                placeholder="Maqola nomini kiriting"
                            />
                        </label>
                    </Col>
                    <Col span={8}>
                        <label>
                            <Typography.Text strong>Muallif ismi</Typography.Text>
                            <Input
                                value={authorName}
                                onChange={(({ target: { value } }) => setAuthorName(value))}
                                placeholder="Muallif ismini kiriting"
                            />
                        </label>
                    </Col>
                    {
                        showFilter && (
                            <>
                                <Col span={8}>
                                    <label>
                                        <Typography.Text strong>Davlat nomi</Typography.Text>
                                        <Select
                                            value={countryName}
                                            onChange={((value) => setCountryName(value))}
                                            placeholder="Davlat nomini kiriting" />
                                    </label>
                                </Col>
                                <Col span={8}>
                                    <label>
                                        <Typography.Text strong>Resurs tili</Typography.Text>
                                        <Select
                                            value={resourceLanguage}
                                            onChange={((value) => setResourceLanguage(value))}
                                            placeholder="Resurs tilini kiriting" />
                                    </label>
                                </Col>
                                <Col span={8}>
                                    <label>
                                        <Typography.Text strong>Resurs sohasi</Typography.Text>
                                        <Select
                                            value={resourceField}
                                            onChange={((value) => setResourceField(value))}
                                            placeholder="Resurs sohasini kiriting" />
                                    </label>
                                </Col>
                                <Col span={8}>
                                    <label>
                                        <Typography.Text strong>Nashr yili</Typography.Text>
                                        <DatePicker
                                            picker="year"
                                            onChange={(value) => setArticleDate(value ? value.year() : null)}
                                            disabledDate={(current) => current.year() > moment().year()}
                                            placeholder="Nashr yilini kiriting"
                                        />
                                    </label>
                                </Col>
                                <Col span={8}>
                                    <label>
                                        <Typography.Text strong>Saralash turi</Typography.Text>
                                        <Select
                                            value={sortType}
                                            onChange={(value) => setSortType(value)}
                                            options={sortTypeOptions}
                                            placeholder="Saralash turini kiriting"
                                        />
                                    </label>
                                </Col>
                                <Col span={8}>
                                    <label>
                                        <Typography.Text strong>Saralash tartibi</Typography.Text>
                                        <Select
                                            value={sortOrder}
                                            onChange={(value) => setSortOrder(value)}
                                            options={sortOrderOptions}
                                            placeholder="Saralash tartibini kiriting"
                                        />
                                    </label>
                                </Col>
                            </>
                        )
                    }
                </Row>
                <Flex gap={20} className="article-filter-controls" wrap justify="flex-end">
                    <Button className="normal-type-btn" icon={<SearchOutlined />} onClick={handleSearch}>Qidirish</Button>
                    <Button icon={<ClearOutlined />} onClick={handleClearFilters}>Tozalash</Button>
                    <Button icon={showFilter ? <CloseCircleOutlined /> : <FilterOutlined />} onClick={() => setShowFilter(prev => !prev)}>{showFilter ? "Filtrni yopish" : "Qidiruv filtri"}</Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ArticleForm