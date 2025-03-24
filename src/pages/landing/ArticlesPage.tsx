import { Flex, Typography } from "antd"
import { PopularArticlesIcon } from "../../assets/icons"

const ArticlesPage = () => {
    return (
        <Flex vertical className="articles-page">
            <Flex vertical className="main-title">
                <Typography.Title level={2} style={{ margin: 0 }}>
                    <PopularArticlesIcon /> Maqolalar
                </Typography.Title>
            </Flex>
        </Flex>
    )
}

export default ArticlesPage