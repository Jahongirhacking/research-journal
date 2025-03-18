import { Button, Result } from "antd"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Kechirasiz sahifa topilmadi!"
            extra={<Link to={'/'}><Button type="primary">Bosh sahifaga qaytish</Button></Link>}
        />
    )
}

export default NotFoundPage