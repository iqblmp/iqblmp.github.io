"use client";
const DownloadCV = () => {
    const cvUrl = "/cv/cv.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default DownloadCV;
