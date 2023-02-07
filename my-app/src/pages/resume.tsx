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


const DownloadButton = (): JSX.Element => {
    return (
    // <Button onClick={}>Download PDF</Button>
      <a download="resume.pdf" href={require("./resume.pdf")}>
        <button>Download PDF</button>
      </a>
    );
  }

export const Resume = (): JSX.Element => {
    return <Box>
        <img src={require('./resume.png')} alt={'resume'} />
    </Box>
}