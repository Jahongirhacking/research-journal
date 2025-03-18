import { Button, ButtonProps } from "antd";
import React from "react";

interface DownloadFileProps extends ButtonProps {
    fileUrl: string;
    fileName?: string;
    buttonLabel?: string;
}

const DownloadFile: React.FC<DownloadFileProps> = ({
    fileUrl,
    fileName = "document.docx",
    buttonLabel = "Download DOCX",
    ...props
}) => {
    const downloadFile = async () => {
        try {
            const response = await fetch(fileUrl);
            if (!response.ok) throw new Error("Failed to fetch file");

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Download failed:", error);
        }
    };

    return <Button type={'link'} onClick={downloadFile} {...props}>{buttonLabel}</Button>;
};

export default DownloadFile;