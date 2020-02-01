import React from 'react';
import styles from './Fetch.module.css';

const Fetch = () => {

    const fetchHandler = () => {
        console.log('helooo');
    }

    return (
        <div className={styles.mainDiv}>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <button 
                            className="btn btn-warning" 
                            onClick={fetchHandler}
                        >Click To Fecth</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fetch;