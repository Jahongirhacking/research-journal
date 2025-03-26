import { Button, Flex, Input, Radio, Typography } from "antd"
import { useEffect, useState } from "react"
import { ClearIcon, InstagramIcon, MailIcon, PhoneIcon, SendIcon, TelegramIcon } from "../../assets/icons"
import InputMask from "../../components/Form/InputMask"
import SendArticle from "./components/SendArticle"

const ContactPage = () => {
    const [phone, setPhone] = useState("");

    console.log(phone);

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    return (
        <Flex vertical className="contact-page">
            <Typography.Title className="main-title" level={2} style={{ margin: 0 }}>
                <PhoneIcon /> Bog’lanish
            </Typography.Title>
            <Flex vertical className="padding-box">
                <Flex wrap gap={19} className="contact-main">
                    <Flex vertical gap={24} className="address">
                        <Typography.Title level={3} style={{ margin: 0 }}>Google Xaritadan qidiring!</Typography.Title>
                        <div style={{ width: '100%', margin: 'auto' }} className="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95819.63011084078!2d69.16715285347956!3d41.366187870066284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b01854a3e49%3A0x5486cbd4c871c4da!2sTIU-Tashkent%20International%20University!5e0!3m2!1sen!2s!4v1742974915433!5m2!1sen!2s"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <Flex wrap gap={20} className="social-networks">
                            <Button icon={<MailIcon />} href="mailto:jurnaltiu@gmail.uz">Jurnaltiu@gmail.uz</Button>
                            <Button icon={<PhoneIcon />} href="tel:+99895674356">+99895674356</Button>
                            <Button icon={<TelegramIcon />} href="mailto:jurnaltiu@gmail.uz">Telegram</Button>
                            <Button icon={<InstagramIcon />} href="mailto:jurnaltiu@gmail.uz">Jurnaltiu@gmail.uz</Button>
                        </Flex>
                    </Flex>
                    <Flex vertical gap={24} className="contact">
                        <Typography.Title level={3} style={{ margin: 0 }}>Biz bilan bog’laning</Typography.Title>
                        <Flex vertical className="contact-box" gap={20}>
                            <Flex gap={20} wrap>
                                <label>
                                    Ismingiz
                                    <Input placeholder="Ismingizni kiriting..." />
                                </label>
                                <label>
                                    Familiyangiz
                                    <Input placeholder="Familiyangizni kiriting..." />
                                </label>
                            </Flex>
                            <label>
                                Email
                                <Input placeholder="Emailni kiriting..." />
                            </label>
                            <Flex align="flex-end" gap={20} wrap>
                                <label>
                                    Telefon raqam
                                    <InputMask
                                        format={['!+', '!9', '!9', '!8', ...('(99) 999 99 99').split('')]}
                                        maskChar={[' ', '(', ')']}
                                        setValue={setPhone}
                                        placeholder="Telefon raqam"
                                        className='input-mask phone-input'
                                    />
                                </label>
                                <Radio.Group options={[
                                    { value: 'writer', label: "Yozuvchi" },
                                    { value: 'reader', label: "O'quvchi" },
                                ]} />
                            </Flex>
                            <label>
                                Xabar
                                <Input.TextArea placeholder="Xabaringizni yozing..." />
                            </label>
                            <Flex gap={20} wrap justify="space-between">
                                <Button icon={<ClearIcon />} className="main-btn secondary-btn">Tozalash</Button>
                                <Button icon={<SendIcon />} iconPosition="end" className="main-btn primary-btn">Yuborish</Button>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <SendArticle />
        </Flex>
    )
}

export default ContactPage