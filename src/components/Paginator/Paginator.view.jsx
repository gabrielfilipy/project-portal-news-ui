import React, { useEffect, useState } from "react";
import * as C from "@chakra-ui/react";
import axios from "axios"

const Paginator = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:8080/listar')
            setPost(res.data);
            setLoading(false);
        }

        fetchPost();
    }, []);

    return (
        <div className="container">
            
        </div>
    )
}