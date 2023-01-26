import React from "react";
import './FileUpload.css'
import { AddIcon } from '@chakra-ui/icons'
import { Button } from "@chakra-ui/react"

const FileUpload = ({files, setFiles}) => {
    const uploadHandler = () => {}
    return (
        <>
            <div className="file-card">
                <div className="file-inputs">
                    <input className="inputUpload" type="file" />
                    <Button className="buttonUpload" colorScheme='blue'>
                        <AddIcon w={4} h={4} color="black.500" />
                        Upload
                    </Button>
                </div>

                <p className="main">Suport files</p>
                <p className="info">JPG, JPEG, PNG</p>
            </div>
        </>
    )
}

export default FileUpload;