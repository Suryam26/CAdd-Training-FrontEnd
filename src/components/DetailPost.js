import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DetailPost = () => {
    let params = useParams();
    const [post, setPost] = useState({});
    
    useEffect(() => {
        getPost();
    }, [])

    const getPost = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(err => console.log(err));
    }

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <h4>Title: {post.title}</h4>
            <p>
                <strong>ID:</strong> {post.id} <br/>
                <strong>User ID:</strong> {post.userId} <br/>
                <strong>Body:</strong> {post.body}
            </p>
        </>
    );
}

export default DetailPost;