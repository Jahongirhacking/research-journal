const PdfViewer = ({ fileUrl }: { fileUrl: string }) => {
    return (
        <iframe
            src={`https://docs.google.com/gview?url=${fileUrl}&embedded=true`}
            width="100%"
            height="600px"
            style={{ border: "none" }}
        />
    )
};

export default PdfViewer;
