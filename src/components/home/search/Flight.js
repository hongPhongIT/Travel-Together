<div role="tabpanel" className="tab-pane fade in" id="flights">
    <div className="tab-para">
        <div className="trip-circle">
            <div className="single-trip-circle">
                <input type="radio" id="radio01" name="radio" />
                <label htmlFor="radio01">
                    <span className="round-boarder">
                        <span className="round-boarder1" />
                    </span>round trip
                                </label>
            </div>
            <div className="single-trip-circle">
                <input type="radio" id="radio02" name="radio" />
                <label htmlFor="radio02">
                    <span className="round-boarder">
                        <span className="round-boarder1" />
                    </span>on way
                                </label>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="single-tab-select-box">
                    <h2>from</h2>
                    <div className="travel-select-icon">
                        <select className="form-control ">
                            <option value="default">enter your location</option>
                            <option value="turkey">turkey</option>
                            <option value="russia">russia</option>
                            <option value="egept">egypt</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
                <div className="single-tab-select-box">
                    <h2>departure</h2>
                    <div className="travel-check-icon">
                        <form action="#">
                            <input type="text" name="departure" className="form-control" data-toggle="datepicker" placeholder="12 -01 - 2017 " />
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4">
                <div className="single-tab-select-box">
                    <h2>return</h2>
                    <div className="travel-check-icon">
                        <form action="#">
                            <input type="text" name="return" className="form-control" data-toggle="datepicker" placeholder="22 -01 - 2017 " />
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-1 col-sm-4">
                <div className="single-tab-select-box">
                    <h2>adults</h2>
                    <div className="travel-select-icon">
                        <select className="form-control ">
                            <option value="default">5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-1 col-sm-4">
                <div className="single-tab-select-box">
                    <h2>childs</h2>
                    <div className="travel-select-icon">
                        <select className="form-control ">
                            <option value="default">1</option>
                            <option value={2}>2</option>
                            <option value={4}>4</option>
                            <option value={8}>8</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="single-tab-select-box">
                    <h2>to</h2>
                    <div className="travel-select-icon">
                        <select className="form-control ">
                            <option value="default">enter your destination location</option>
                            <option value="istambul">istambul</option>
                            <option value="mosko">mosko</option>
                            <option value="cairo">cairo</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4">
                <div className="single-tab-select-box">
                    <h2>class</h2>
                    <div className="travel-select-icon">
                        <select className="form-control ">
                            <option value="default">enter class</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="clo-sm-5">
                <div className="about-btn pull-right">
                    <button className="about-view travel-btn">
                        search
                                  </button>
                </div>
            </div>
        </div>
    </div>
</div>