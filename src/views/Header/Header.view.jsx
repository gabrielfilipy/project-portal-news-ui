import React from "react";
import './Header.css';
import { BrowserRouter as Router, Link, Routes, Route  } from 'react-router-dom';

import {
    Flex,
    Box,
    Grid,
    GridItem
} from "@chakra-ui/react"
import AddNewsView from "../News/Add/Add-news.view";

function HeaderView () {

    return (
        <div className="header">
            <Flex 
                align="center"
                justify="center"
                h="2vh">
                <Box maxW={900} w="100%">
                    <Grid templateColumns='repeat(5, 1fr)' gap={4}>
                        <GridItem colSpan={2} h='10'>
                            <a href="" className="logo">reivindica.mpu</a>
                        </GridItem>
                        <GridItem colStart={4} colEnd={6} h='10' textAlign="right">
                            <Router>
                                <ul className="list" >
                                    <li className="item"><Link to="/">Home</Link></li>
                                    <li className="item"><Link to="/reivindicacao">Reivindicação</Link></li>
                                </ul>
                                    <Routes>
                                        <Route path="/reivindicacao" element={<AddNewsView />} > </Route>
                                    </Routes>
                            </Router>
                        </GridItem>
                    </Grid>
                </Box>
            </Flex>
        </div>
    );

}

export default HeaderView;