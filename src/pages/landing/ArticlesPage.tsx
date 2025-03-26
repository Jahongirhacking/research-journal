import { Flex, Pagination, Typography } from "antd"
import { Link } from "react-router-dom"
import { LeftIcon, PopularArticlesIcon, RightIcon } from "../../assets/icons"
import LongArticle from "../../components/Article/LongArticle"
import ArticleForm from "../../components/Form/ArticleForm"

const ArticlesPage = () => {
    return (
        <Flex vertical className="articles-page">
            <Flex vertical className="main-title" gap={60}>
                <Typography.Title level={2} style={{ margin: 0 }}>
                    <PopularArticlesIcon /> Maqolalar
                </Typography.Title>
                <ArticleForm />
            </Flex>
            <Flex vertical className="padding-box" align="center">
                <Flex vertical gap={20} className="article-container">
                    {
                        Array.from({ length: 8 }).map((_, index) => (
                            <Link to={'/articles/1'} key={index} >
                                <LongArticle />
                            </Link>
                        ))
                    }
                </Flex>
                <Pagination total={100} nextIcon={<RightIcon />} prevIcon={<LeftIcon />} />
            </Flex>
        </Flex>
    )
}

export default ArticlesPage