import React, { Component } from 'react'
import TravelBox from './TravelBox'
import Background from './Background'
import Service from './Service'
import Subscription from '../public/Subscription'
import showResults from '../../showResults'

class Home extends Component {

    render() {
        return (
            <div>
                <Background />
                <TravelBox match={this.props.match}/>
                <Service />
                <Subscription onSubmit={showResults} />
            </div >
        )
    }
}

export default Home