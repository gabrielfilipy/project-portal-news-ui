import React, { useState } from "react";

import {
    Flex,
    Box,
    Center,
    FormControl,
    Input,
    FormLabel,
    HStack,
    Textarea,
    Select,
    Button,
    Switch
} from "@chakra-ui/react"
import FileUpload from "../../../components/FileUpload/FileUpload";
import './Add-news.css'

function AddNewsView () {
    const [files, setFiles] = useState([{
        name: 'myFile.pdf'
    }])

    return (
        <Flex 
            align="center"
            justify="center"
            bg="rgb(236, 236, 236)"
            padding={5}>
            <Box maxW={900}  bg="white" w="100%"  margin={5} px={2} padding={30}>
                <Center 
                    w="100%"
                    maxW="100%"
                    bg="white"
                    top={100}
                    borderRadius={5}
                    p="30"
                    borderWidth='1px'>
                        <FormControl display="flex" flexDirection="column" gap="4">
                            <HStack spacing="4">
                                <Box w="100%">
                                    <FormLabel htmlFor="title">Título</FormLabel>
                                    <Input placeholder='Basic usage' />
                                </Box>
                                <Box w="100%">
                                    <FormLabel htmlFor="category">Categoria</FormLabel>
                                    <Select icon={'<MdArrowDropDown />'} placeholder='Selecione uma categoria...' />
                                </Box>
                            </HStack>
                            <HStack spacing="4">
                                <Box w="100%">
                                    <FileUpload files={files} setFiles={setFiles} />
                                </Box>
                            </HStack>
                            <HStack>
                                <Box w="100%">
                                    <FormLabel htmlFor="content">Conteúdo</FormLabel>
                                    <Textarea id="content"  placeholder='Here is a sample placeholder' />
                                </Box>
                            </HStack>
                            <HStack>
                                <Box w="100%">
                                    <FormControl display='flex' alignItems='center'>
                                        <FormLabel htmlFor='email-alerts' mb='0'>
                                            Essa notícia é ativa?
                                        </FormLabel>
                                        <Switch id='active' />
                                    </FormControl>
                                </Box>
                            </HStack>
                            <HStack justify="right">
                                <Button colorScheme='blue'>
                                    Cadastrar
                                </Button>
                            </HStack>
                        </FormControl>
                </Center>
                </Box>
            </Flex>
       
    );
}

export default AddNewsView;