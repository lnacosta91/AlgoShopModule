import React, { Component } from 'react'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import BannerTopBar from './BannerTopBar'

const styles = theme => ({
    root: {
        width: '50%',
        flexGrow: 1,
        padding: 10,
        marginLeft: '25%',
        marginTop: '5%',
        marginBottom: '10%'
    },
    typography: {
        width: '80%',
        marginLeft: '10%',
        marginTop: 40,
        marginBottom: 40
    }
})

class Support extends Component {

    render () {
        const { classes } = this.props
        return (
            <React.Fragment>
                <BannerTopBar
                    size='medium'
                    title='Support'
                    text='Here you can contact with our help desk.'
                    backgroundUrl='https://www.advancedalgos.net/img/photos/algo-shop.jpg'
                />
                <Paper className={classes.root}>
                    <Typography className={classes.typography} variant='h5' gutterBottom>
                        Comming Soon
                    </Typography>
                </Paper>
            </React.Fragment>
        )
    }
}

export default compose(
    withStyles(styles)
)(Support)
