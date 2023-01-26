import React from "react";
import './List-news.css';
import {
    Flex,
    Box,
    Table,
    Thead,
    Tbody,
    Button,
    Tr,
    Th,
    Td,
    TableContainer
} from "@chakra-ui/react"


function ListNewsView () {

    return (
        <Flex 
            align="center"
            justify="center"
            bg="rgb(236, 236, 236)"
            padding={5}>
            <Box maxW={900} bg="white" w="100%"  margin={5} px={2} padding={30}>

            <Box  w="100%" marginBottom={8}>
                <h1 className="title">Cadastro de reivindicação acatadas</h1>
            </Box>

            <Box 
                w="100%"
                maxW="100%"
                bg="white"
                borderRadius={1}
                p="30"
                borderWidth='1px'>
            
            <Box w="100%">
                <Button colorScheme='blue' w={180} marginBottom={6}>Nova</Button>
            </Box>
                <TableContainer borderWidth='1px'>
                    <Table variant='simple'>
                        <Thead >
                        <Tr>
                            <Th>#ID</Th>
                            <Th>Título</Th>
                            <Th>Categoria</Th>
                            <Th>Usuário</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td>1</Td>
                            <Td>Corrupção na educação de Mancapuru</Td>
                            <Td>Educação</Td>
                            <Td>Jaziel Alencar</Td>
                        </Tr>
                        <Tr>
                            <Td>2</Td>
                            <Td>Aterramento do lixão da entrada de novo Airão</Td>
                            <Td>Saneamento</Td>
                            <Td>Loiane Dias</Td>
                        </Tr>
                        <Tr>
                            <Td>3</Td>
                            <Td>Limpeza na praça de alimentação</Td>
                            <Td>Saneamento</Td>
                            <Td>Loiane Dias</Td>
                        </Tr>
                        <Tr>
                            <Td>4</Td>
                            <Td>Fila do Bradesco</Td>
                            <Td>Social</Td>
                            <Td>Loiane Dias</Td>
                        </Tr>
                        <Tr>
                            <Td>5</Td>
                            <Td>Aniversário da cidade 2023</Td>
                            <Td>Festival floclórico</Td>
                            <Td>Loiane Dias</Td>
                        </Tr>
                        </Tbody>
                        
                        </Table>
                        
                    </TableContainer>
                    </Box>
                </Box>
        </Flex>
    );
}

export default ListNewsView;