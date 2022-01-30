import React from "react";

const Sort = ({ changeSortBy, changeType }) => {
    return(
        <>
            <div onChange={(event => changeSortBy(event.target.value))}>
            <strong>Sort By:</strong>
                <span style={{margin: "10px"}}>
                    <input type="radio" id="name" name="sortBy" value="name" />
                    <label htmlFor="name">Name</label>
                </span>
                <span>
                    <input type="radio" id="age" name="sortBy" value="age" />
                    <label htmlFor="age">Age</label><br/>
                </span>
            </div>

            <div onChange={(event => changeType(event.target.value))}>
                <strong>Type:</strong>
                <span style={{margin: "10px"}}>
                    <input type="radio" id="asce" name="type" value="asce" />
                    <label htmlFor="asce">Ascending</label>
                </span>
                <span>
                    <input type="radio" id="desc" name="type" value="desc" />
                    <label htmlFor="desc">Descending</label><br/>
                </span>
            </div>
        </>
    );
}

export default Sort;