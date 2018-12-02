import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
    let { packages } = props
    return (
        packages.map(item => {
            return (<div className="col-md-4 col-sm-6" key={item.id}>
                <div className="single-package-item">
                    <img src={`${item.image}`} alt="package-place" />
                    <div className="single-package-item-txt">
                        <h3>{item.name} <span className="pull-right">{item.price}$</span></h3>
                        <div className="packages-para">
                            <p>
                                <span><i className="fa fa-angle-right" /> {item.quanlity} Days {item.quanlity - 1} nights</span>
                                <i className="fa fa-angle-right" />  {item.level} star
                            </p>
                            <p>
                                <span><i className="fa fa-angle-right" />transportation</span>
                                <i className="fa fa-angle-right" /> food facilities
                            </p>
                        </div>
                        <div className="packages-review">
                            <p>
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className= "fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <span>254 reviews</span>
                            </p>
                        </div>
                        <div className="about-btn">
                            <Link to={`/order/${item.id}`} className="about-view packages-btn">book now</Link>
                        </div>
                    </div>
                </div>
            </div>)
        })
    )
}

export default Item