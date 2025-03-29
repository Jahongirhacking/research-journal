import { DeleteOutlined } from "@ant-design/icons";
import { Button, Flex, Input } from "antd";
import { useEffect, useState } from "react";
import InputMask from "../../../components/Form/InputMask";
import { IAuthor } from "../SendArticle";


interface AddAuthorProps {
    handleChange: (data: IAuthor) => void;
    handleRemove: () => void;
}

const AddAuthor = ({ handleChange, handleRemove }: AddAuthorProps) => {
    const [phone, setPhone] = useState('');
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [middlename, setMiddlename] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");

    useEffect(() => {
        handleChange({
            phone,
            firstname,
            lastname,
            middlename,
            email,
            position
        });
    }, [phone, firstname, lastname, middlename, email, position])

    return (
        <Flex vertical gap={12} className="authors-input">
            <Flex gap={20} wrap>
                <Input placeholder="Familiya" value={lastname} onChange={({ target: { value } }) => setLastname(value)} />
                <Input placeholder="Ism" value={firstname} onChange={({ target: { value } }) => setFirstname(value)} />
                <Input placeholder="Otasining ismi" value={middlename} onChange={({ target: { value } }) => setMiddlename(value)} />
                <Input placeholder="Email" value={email} onChange={({ target: { value } }) => setEmail(value)} />
                <Input placeholder="Ish joyi" value={position} onChange={({ target: { value } }) => setPosition(value)} />
                <InputMask
                    format={['!+', '!9', '!9', '!8', ...('(99) 999 99 99').split('')]}
                    maskChar={[' ', '(', ')']}
                    setValue={setPhone}
                    placeholder="Telefon raqam"
                    className='input-mask phone-input'
                />
            </Flex>
            <Button icon={<DeleteOutlined />} onClick={handleRemove} variant="outlined" color="danger" />
        </Flex>
    )
}

export default AddAuthor