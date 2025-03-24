import { Flex, Typography } from "antd"
import { AuthorsIcon } from "../../assets/icons"
import SendArticle from "./components/SendArticle"

const EditorialPage = () => {
    return (
        <Flex vertical className="editorial-page">
            <Typography.Title className="main-title" level={2} style={{ margin: 0 }}>
                <AuthorsIcon /> Tahririyat
            </Typography.Title>
            <SendArticle />
        </Flex>
    )
}

export default EditorialPage