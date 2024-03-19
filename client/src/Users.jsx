import React, { useState } from "react";

function Users () {
    const[Users ,setUsers] = useState([{
        Name:"yousaf",Email: "ysf@gmail.com",Age: 20
    }]);
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-3'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Users.map((Users) => {
                                <tr>
                                    <td>{Users.Name}</td>
                                    <td>{Users.Email}</td>
                                    <td>{Users.Age}</td>
                                    <td><button>Edit</button><button>Delete</button></td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Users