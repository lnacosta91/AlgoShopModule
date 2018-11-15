import React, { Component } from 'react'
import TopBar from './nav'

class Home extends Component {

    render () {
        return (
            <React.Fragment>
                <TopBar
                    size='big'
                    title='Shop Module'
                    text='Here you can buy Algo Tokens from the Advanced Algos Platform.'
                    backgroundUrl='https://www.advancedalgos.net/img/photos/algo-shop.jpg'
                />
            </React.Fragment>
        )
    }
}

export default Home
