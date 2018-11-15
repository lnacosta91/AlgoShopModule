import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TopBar from '../nav'

import moment from "moment/moment";
import Button from '@material-ui/core/Button';

// icons
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

import { themeVariables, globalStyles } from '../../theme'


const transactions = [
  {
    id:1,
    date: moment('10-17-2018 04:52 PM').valueOf(),
    amount: 127,
    currency: 'ALG',
    rate: 0.00012312,
    rateCurrency: 'BTC',
    rateUSD: 0.1,
    USD: 12.7,
    status: 'pending',
    destination: '0x204B8Ab94966dc4545eD15fE62dA27065e2aBA7D'
  },
  {
      id:2,
    date: moment('10-11-2018 12:38 AM').valueOf(),
    amount: 127,
    currency: 'ALG',
    rate: 0.00012312,
    rateCurrency: 'BTC',
    rateUSD: 0.1,
    USD: 12.7,
    status: 'completed',
    destination: '39Ndfo292mBi230dc4545eD15fE62dsm9sN8dn2n29'
  },
  {
      id:3,
    date: moment('09-09-2018 01:22 PM').valueOf(),
    amount: 127,
    currency: 'ALG',
    rate: 0.00013421,
    rateCurrency: 'BTC',
    rateUSD: 0.11,
    USD: 13.7,
    status: 'error',
    destination: '4bw0Djs8dsSu3NB30nmc4545eD15fE622s2jxmNDi'
  },
];

const styles = theme => ({
  root: {
    padding: '40px 50px',
  },
  shopModulePageInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  errorInfoBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    padding: '10px 20px',
    width: 600,
    flexGrow: 1,
    flexShrink: 1,
    background: themeVariables.colors.errorBg,
    border: '1px solid '+themeVariables.colors.error,
  },
  pendingOrderBtn: {
    color: themeVariables.colors.error,
  },
  shopBlock: {
    width: '100%',
    maxWidth: 600,
    textAlign: 'left',
  },
  shopBlockRow: {
    width: '100%',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  shopBlockHeadRow: {
    borderBottom: '1px solid '+themeVariables.colors.lightGrayBg,
  },
  shopBlockHeadCol: {
    textAlign: 'right',
  },
  shopBlockCol: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '50%',
    width: '50%',
    padding: '10px 20px',
  },
  shopFormCol: {
    borderRight: '1px solid '+themeVariables.colors.lightGrayBg,
    padding: '20px 40px',
  },
  textFieldLabel: {
    fontSize: 18,
  },
  textField: {
    marginBottom: 25,
  },
  roundedBtn: {
    width: '100%',
    borderRadius: 20,
    background: themeVariables.colors.primary,
    fontSize: 20,
    padding: 0,
    color: themeVariables.colors.snow,
    textTransform: 'uppercase',
  },
  simpleAccordion: {
    boxShadow: 'none',
    borderBottom: '1px solid '+themeVariables.colors.lightGrayBg,
  },
  simpleAccordionSummary: {
    padding: 0,
    minHeight: 24,
  }
});

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alg: 21000,
      btc: 1,
      showTransaction: false
    };
  }
  
  tryBuy() {
    const { user, auth } = this.props;
    if (!user) {
      auth.login();
    }
  }

  render () {
    const { alg, btc, showTransaction } = this.state;
    const { user, auth, classes } = this.props;
    let pendingOrder = false;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].status === 'pending') {
        pendingOrder = transactions[i]; break;
      }
    }
    return (
  <React.Fragment>
      <TopBar
          size='medium'
          title='Buy Algos'
          text='Buy your Algo Tokens with Bitcoin.'
          backgroundUrl='https://www.advancedalgos.net/img/photos/algo-shop.jpg'
      />
      <div className={classes.root}>
        <div className={classes.shopModulePageInner}>
          {user && pendingOrder && <div className={classes.errorInfoBlock}>
            <Typography>You have a pending order to fulfil:</Typography>
            <Button className={classes.pendingOrderBtn} onClick={()=>this.setState({ showTransaction: pendingOrder })}>order details</Button>
          </div>}
          <div className={classes.shopBlock}>
            <div className={classNames(classes.shopBlockRow, classes.shopBlockHeadRow)}>
              <Typography variant='h6' className={classNames(classes.shopBlockCol, classes.shopBlockHeadCol)}>ALG/USD 0.10</Typography>
              <Typography variant='h6' className={classes.shopBlockCol}>ALG/BTC 0.000137</Typography>
            </div>
            <div className={classes.shopBlockRow}>
              <div className={classNames(classes.shopBlockCol, classes.shopFormCol)}>
                <Typography className={classes.textFieldLabel}>I want to buy</Typography>
                <TextField
                  className={classes.textField}
                  type={'number'}
                  value={alg}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">ALG</InputAdornment>,
                  }}
                  onChange={(e) => { this.setState({ alg: e.target.value }); }}
                />
                <Typography className={classes.textFieldLabel}>I will pay with</Typography>
                <TextField
                  className={classes.textField}
                  type={'number'}
                  value={btc}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">BTC</InputAdornment>,
                  }}
                  onChange={(e) => { this.setState({ btc: e.target.value }); }}
                />
                <Button className={classes.roundedBtn} onClick={() => { this.tryBuy(); } }>Buy</Button>
              </div>
              <div className={classNames(classes.shopBlockCol, classes.infoCol)}>
                <ExpansionPanel className={classes.simpleAccordion}>
                  <ExpansionPanelSummary className={classes.simpleAccordionSummary} expandIcon={<ArrowDropDownIcon />}>
                    <Typography>What are the fees?</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>A transaction fee goes to the network miners when you are sending BTC. AdvancedAlgos does not requires additional trading fees to execute a buy order.</Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel className={classes.simpleAccordion}>
                  <ExpansionPanelSummary className={classes.simpleAccordionSummary} expandIcon={<ArrowDropDownIcon />}>
                    <Typography>What is the exchange rate?</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>These rates are determined by the market; the broader ecosystem of other buyers and sellers. We fetch the most recent exchange rate and guarantee it for 30 seconds. The quote will automatically refresh every 30 seconds until you select ‘BUY’.</Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </div>
          </div>
        </div>
      </div>
  </React.Fragment>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
  match: PropTypes.object
}

export default withStyles(styles)(Index)
