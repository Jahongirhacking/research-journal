import { Flex, Pagination, Typography } from "antd"
import { AuthorsIcon, LeftIcon, RightIcon } from "../../assets/icons"
import EditorialProfile from "./components/EditorialProfile"
import SendArticle from "./components/SendArticle"

const EditorialPage = () => {
    return (
        <Flex vertical className="editorial-page">
            <Typography.Title className="main-title" level={2} style={{ margin: 0 }}>
                <AuthorsIcon /> Tahririyat
            </Typography.Title>
            <Flex vertical className="padding-box" gap={76}>
                <Flex vertical gap={20}>
                    {
                        Array.from({ length: 8 }).map((_, index) => (
                            <EditorialProfile key={index} />
                        ))
                    }
                    <Pagination pageSize={8} total={10} nextIcon={<RightIcon />} prevIcon={<LeftIcon />} />
                </Flex>
                <SendArticle />
            </Flex>
        </Flex>
    )
}

export default EditorialPage