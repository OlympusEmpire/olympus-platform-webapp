import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserTypes = () => {

    const [usertypes, setUsertypes] = useState([]);

    const loadUserTypes = () => {
        axios.get('http://localhost:2856/olympus/session/types-users')
        .then(({data}) => setUsertypes(data));
    }

    useEffect(loadUserTypes, []);

    return (
        <>
        <div className="bg-dark text-white py-5">
        <div className="container">
        <div className="row">
            {
                usertypes.map( (usertype) =>
                        
                    <div className="col-sm-4">
                        <div className="card text-white bg-dark">
                            <div className="card-body">
                                <h5 className="card-title tittle">{usertype?.typeUserName}</h5>
                                <p className="card-text subtitle">{usertype?.typeUserDesc}</p>
                                <button className="btn btn-warning">ELEGIR</button>
                            </div>
                        </div>
                    </div>
                                
                )
            }
        </div>
        </div>
        </div>
        </>
    );
}

export default UserTypes;