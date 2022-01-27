import React from "react";
import { useState } from "react";
import Child from "./Child";

const Home = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
    }

    return (
        <>
            <button onClick={() => getData()}>Fetch Data</button>
            <button onClick={() => setData([])}>Clear</button>
            <Child dataList={data} />
        </>
    );
}

export default Home;