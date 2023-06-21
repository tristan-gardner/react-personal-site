import { Box, Button } from "@material-ui/core";

import React, { useState, useEffect } from "react";
// import { readFileSync } from "fs";
import ReactFileDownload from 'js-file-download';

// const reader = new FileReader();
// reader.readAsArrayBuffer
// const pdfFile = readFileSync('./resume.pdf')
// const fileContents = new Uint8Array(pdfFile).reduce((data, byte) => data + String.fromCharCode(byte), '');


const PdfButton: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [fileData, setFileData] = useState<string|null>(null);
    useEffect(() => {
        fetch('/resume.pdf')
          .then(response => response.blob())
          .then(blob => {
              console.log(blob)
              setFileData(URL.createObjectURL(blob))
            })
          .catch(error => console.error(error))
      }, []);

    const handleDownload = () => {
        if (fileData) return ReactFileDownload(fileData, 'tgreze.pdf')
        console.log("no file data")
    }
  
    return (
      <Button variant="contained" color="primary" onClick={handleDownload} disabled={loading}>
        {loading ? 'Loading...' : 'Download PDF'}
      </Button>
    );
  };

const pdfUrl = "https://res.cloudinary.com/dgnqdbhjg/image/upload/v1687308391/tristan_gardner_resume_xf7pan.pdf";

const DownloadButton = () => {
    const handleDownload = () => {
      // Create a temporary link element
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "resume.pdf";
      link.target = "_blank";
  
      // Simulate a click event to trigger the download
      link.click();
    };
  
    return (
      <Box style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <button onClick={handleDownload}>
          Download PDF
        </button>
      </Box>
    );
};

export const Resume = (): JSX.Element => {
    return <Box>
        <iframe
        src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
        width="100%"
        height="600px"
        title="PDF Viewer"
      />
      <DownloadButton />
    </Box>
}