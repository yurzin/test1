import React from "react";

export default props => {
        return (
            <table className="table table-bordered">
                <thead className="thead-dark">
                <tr className="rowTable">
                    <td>ID</td>
                    <td>name</td>
                    <td>phone</td>
                    <td>age</td>
                </tr>
                </thead>
                <tbody>
                {props.data.map(item =>
                    <tr key={item.id} className="rowTable">
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.age}</td>
                    </tr>
                )}
                </tbody>
            </table>
        )
    };