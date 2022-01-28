import React, { useEffect, useState } from "react";
import Display from "./Display";
import Sort from "./Sort";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [type, setType] = useState("");

    useEffect(() => {
        getData();
    },[]);

    useEffect(()=> {
        sortData();
    },[sortBy, type])

    const sortData = () => {
        const temp = users;
        if (sortBy === "name") {
            if (type === "asce") {
                temp.sort((a, b) => (a.name > b.name) ? 1 : -1)
            }
            if (type === "desc"){
                temp.sort((a, b) => (a.name < b.name) ? 1 : -1)
            }
        }
        if (sortBy === "age") {
            if (type === "asce") {
                temp.sort((a, b) => (new Date(b.birthDate).valueOf()) - (new Date(a.birthDate).valueOf()))
            }
            if (type === "desc"){
                temp.sort((a, b) => (new Date(a.birthDate).valueOf()) - (new Date(b.birthDate).valueOf()))
            }
        }
        setUsers([...temp]);
    }

    const getData = () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.log("Error: ",err))
    }

    return (
        <>
            <Sort changeSortBy={setSortBy} changeType={setType} />
            { users.length > 0 && <Display users={users} /> }
        </>
    );
}

export default Home;