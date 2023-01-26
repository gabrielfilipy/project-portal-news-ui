import { useState } from "react";

interface News {
    
}

export default function News (pageLimit : number) {
    const [news, setNews] = useState<News>([]);

    function fetchNews (page : number) {
        const virtualPage = ((page - 1) * pageLimit) <= 0 ? 0 : ((page - 1) * pageLimit);

        fetch(`http://localhost:8080/news/api/news-filter/start=${virtualPage}`)
            .then(response => response.json())
            .then(setNews)
            .catch(window.alert)
    }

    return {
        fetchNews,
        news
    }

}