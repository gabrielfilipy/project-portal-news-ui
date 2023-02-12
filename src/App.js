import { ChakraProvider } from '@chakra-ui/react';
import theme from './components/ThemePortal/theme'; 
import Font from './components/ThemePortal/font'; 
import { Routes, Route } from 'react-router-dom';
import AddNewsView from './views/News/Add/Add-news.view';
import ListNewsView from './views/News/List/List-news.view';

function App() {
    return (
        <>
    <ChakraProvider theme={theme} >
        <Font />
        <Routes>
            <Route exact path="/" element={<AddNewsView />} />
            <Route path="/adicionar-noticia" element={<AddNewsView />} />
            <Route path="/listar-noticia" element={<ListNewsView />} />
        </Routes>
    </ChakraProvider>
        </>
    );
}

export default App;