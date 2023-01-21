import React from "react";

import {
    Flex,
    Box,
    Center,
    FormControl,
    Input,
    FormLabel,
    HStack,
    Checkbox,
    Textarea,
    CheckboxGroup,
    Radio,
    RadioGroup,
    Button
} from "@chakra-ui/react"

function AddNewsView () {
    return (
        <Box h="100v">
            <Center 
                as="header"
                h={150}
                bg="teal.500"
                color="white"
                fontWeight="bold"
                fontSize="4x1"
                pb="8">
                Cadastro de notícias
            </Center>
            <Flex 
                align="center"
                justify="center"
                bg="blackAlpha.200"
                h="calc(100vh - 150px)">

                <Center 
                    w="100%"
                    maxW={840}
                    bg="white"
                    top={100}
                    position="absolute"
                    borderRadius={5}
                    p="6"
                    boxShadow="0 1px 2px #ccc">
                        <FormControl display="flex" flexDirection="column" gap="4">
                            <HStack spacing="4">
                                <Box w="100%">
                                    <FormLabel htmlFor="title">Título</FormLabel>
                                    <Input id="title"></Input>
                                </Box>
                                <Box w="100%">
                                    <FormLabel htmlFor="content">Conteúdo</FormLabel>
                                    <Textarea id="content" placeholder='Here is a sample placeholder' />
                                </Box>
                            </HStack>
                            <HStack spacing="4">
                                <Box w="100%">
                                    <FormLabel htmlFor="photoNews">Foto</FormLabel>
                                    <Input id="photoNews" type="file"></Input>
                                </Box>
                                <Box w="100%">
                                    <Checkbox id="active" defaultChecked>Ativado</Checkbox>
                                </Box>
                            </HStack>
                            <HStack justify="center">
                                <Button
                                    w={240}
                                    p="6"
                                    type="submit"
                                    bg="teal.600"
                                    color="white"
                                    fontWeight="bold"
                                    fontSize="x1"
                                    mt="2"
                                    _hover={{ bg: "teal.800" }}
                                >
                                    Cadastrar
                                </Button>
                            </HStack>
                        </FormControl>
                </Center>

            </Flex>
        </Box>
    );
}

export default AddNewsView;