import React from 'react';
import styles from './Fetch.module.css';

const Fetch = () => {
    return (
        <div className={styles.blackBg}>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <button className="btn btn-warning" >Click To Fecth</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fetch;