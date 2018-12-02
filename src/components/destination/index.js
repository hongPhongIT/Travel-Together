import React from 'react'
import Discount from './Discount'
import Item from './Item'

const Destination = (props) => {
    return (
        <div>
            <div className="back-ground"></div>
            <section id="gallery" className="gallery">
                <div className="container">
                    <div className="gallery-details">
                        <div className="gallary-header text-center">
                            <h2>top destination</h2>
                            <p>Where do you wanna go? How much you wanna explore?</p>
                        </div>
                        <div className="gallery-box">
                            <div className="gallery-content">
                                <div className="filtr-container">
                                    <div className="row">
                                        <Item match={props.match}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Discount />
        </div>
    )
}
export default Destination