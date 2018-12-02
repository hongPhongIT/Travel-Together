import React from 'react'

const Discount = () => {
    return (

        <section className="discount-offer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="dicount-offer-content text-center">
                            <h2>Join with us within 7 March, 2019 and get upto 40% Discount</h2>
                            <div className="campaign-timer">
                                <div id="timer">
                                    <div className="time time-after" id="days">237<span className="camp">Days</span></div>
                                    <div className="time time-after" id="hours">06<span className="camp">Hour</span></div>
                                    <div className="time time-after" id="minutes">46<span className="camp">Minute</span></div>
                                    <div className="time" id="seconds">44<span className="camp">Second</span></div>
                                </div>
                            </div>
                            <div className="about-btn">
                                <button className="about-view discount-offer-btn">join now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discount