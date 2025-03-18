import { Flex, Typography } from "antd"
import { useEffect, useState } from "react"
import { UploadFileIcon } from "../assets/icons"
import { translateText } from "../utils/translationUtils"
import DownloadFile from "./DownloadFile"

const TestComponent = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        (async () => {
            const res = await translateText("Hello World")
            setText(res);
        })()
    }, [])

    return (
        <Flex vertical>
            <DownloadFile
                fileName={"hello"}
                fileUrl={"http://muhandis.edu.uz/media-files/example_files/1_37TvL9r._Ariza.docx"}
                className='template-file'
                icon={<UploadFileIcon />}
                buttonLabel='Namunani yuklab oling'
            />
            <Typography.Text>{text}</Typography.Text>
        </Flex>

    )
}

export default TestComponent