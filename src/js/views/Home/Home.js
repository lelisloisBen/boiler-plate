import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext';

const Home = () => {

    const {name} = useContext(UserContext);
    const {email} = useContext(UserContext);
    const {test} = useContext(UserContext);

    return (
        <>
        <div className="jumbotron jumbotron-fluid">
            <div className="container text-center">
                
            <h1>Home page</h1>

            {!name && !email ? "welcome to Samir's Boiler plate" : <>
                Hi &nbsp;
                <span class="badge badge-warning"><b>{name}</b></span>
                <br/>
                thank you for filling up the form, we will send an email at:
                &nbsp;
                <span class="badge badge-success"><b>{email}</b></span>
                
            </>
            }

            <br/>
            <br/>

            {test.map((item,index) => {
                return (
                    <div key={index}>
                        {item.key1} || {item.key2}
                    </div>
                )
            })}
            </div>
        </div>
        </>
    )
};

export default Home;