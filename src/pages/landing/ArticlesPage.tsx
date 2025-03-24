import { Flex, Typography } from "antd"
import { PopularArticlesIcon } from "../../assets/icons"
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
        </Flex>
    )
}

export default ArticlesPage