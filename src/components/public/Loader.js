import React from 'react'
import '../styles/Loader.css'
const Loader = () => {
    return (
        <div className="container">
            <div className="col-md-5" ></div>
            <div className="col-md-2">
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="col-md-5" ></div>
        </div>
    )
}

export default Loader