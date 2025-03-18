import { Card, CardProps, Skeleton } from "antd"
import { FC } from "react"

const CardSkeleton: FC<CardProps> = (props) => {
    return (
        <Card {...props} title={<Skeleton.Input active />}>
            <Skeleton active />
        </Card>
    )
}

export default CardSkeleton