import React from "react";
import { useNavigate } from "react-router-dom";

const Child = ({ dataList }) => {
    let navigate = useNavigate();
    const postDetail = (id) => {
        navigate(`post/${id}`);
    }

    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {
                    dataList.map(user => 
                        <tr 
                            key={user.id} 
                            onClick={() => postDetail(user.id)}
                            style={{cursor: "pointer"}}>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        </>
    );
}

export default Child;