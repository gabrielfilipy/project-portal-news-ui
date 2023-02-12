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
            <div className="content">
                <div className="logo left">
                    <p>Divulga.mpu</p>
                </div>
                <nav className="desktop right">
                    <ul>
                        <li><Link to="/adicionar-noticia">Cadastrar</Link></li>
                        <li><Link to="/listar-noticia">Listar</Link></li>
                    </ul>
                </nav>
                <nav className="mobile right">
                    <ul >
                        <li><Link to="/adicionar-noticia">Cadastrar</Link></li>
                        <li><Link to="/listar-noticia">Listar</Link></li>
                    </ul>
                </nav>
                <div className="clear"></div>
            </div>
        </div>
    );

}

export default HeaderView;