import React from "react";

const Display = ({ users }) => {
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Birthday</th>
                    </tr>
                </thead>
                <tbody>
                    {  
                        users.map(user => 
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.birthDate}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );
}

export default Display;