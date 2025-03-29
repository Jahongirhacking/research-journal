import { Flex, Pagination } from "antd"
import LongArticle from "../../components/Article/LongArticle"

const ProfileArticles = () => {
    return (
        <Flex vertical>
            <Flex vertical gap={20}>
                <LongArticle />
                <LongArticle />
                <LongArticle />
            </Flex>
            <Pagination pageSize={8} total={10} />
        </Flex>
    )
}

export default ProfileArticles