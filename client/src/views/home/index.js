import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import moment from 'moment'

// icons
import SearchIcon from '@material-ui/icons/Search'

import { NavLink } from 'react-router-dom'

import { themeVariables, globalStyles } from '../theme'


const transactions = [
  {
    date: moment('10-17-2018 04:52 PM').valueOf(),
    amount: 127,
    currency: 'ALG',
    rate: 0.00012312,
    rateCurrency: 'BTC',
    rateUSD: 0.1,
    USD: 12.7,
    status: 'pending'
  },
  {
    date: moment('10-11-2018 12:38 AM').valueOf(),
    amount: 127,
    currency: 'ALG',
    rate: 0.00012312,
    rateCurrency: 'BTC',
    rateUSD: 0.1,
    USD: 12.7,
    status: 'completed'
  },
  {
    date: moment('09-09-2018 01:22 PM').valueOf(),
    amount: 127,
    currency: 'ALG',
    rate: 0.00013421,
    rateCurrency: 'BTC',
    rateUSD: 0.11,
    USD: 13.7,
    status: 'error'
  },
];

const styles = theme => ({
  root: {
    padding: '25px 50px',
  },
  shopModulePageInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  errorInfoBlock: {
    marginBottom: 20,
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
  formCol: {
    borderRight: '1px solid '+themeVariables.colors.lightGrayBg,
    padding: '20px 40px',
  },
  transactionsTable: {
    borderCollapse: 'collapse',
    width: '100%',
    maxWidth: 940,
    marginTop: 30,
  }
})

class ShopHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alg: 21000,
      btc: 1,
      showTransaction: false
    };
  }
  
  tryBuy() {
    const { user } = this.props;
    if (!user) {
      
    }
  }

  render () {
    const { alg, btc, showTransaction } = this.state;
    const { classes } = this.props;
    let pendingOrder = false;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].status === 'pending') {
        pendingOrder = transactions[i]; break;
      }
    }
    const user = {};
    return (
      <div className={classes.root}>
        <div className={classes.shopModulePageInner}>
          {user && pendingOrder && <div className={classes.errorInfoBlock}>
            <Typography>You have a pending order to fulfil:</Typography>
            <Button onClick={()=>this.setState({ showTransaction: pendingOrder })}>order details</Button>
          </div>}
          <div className={classes.shopBlock}>
            <div className={classNames(classes.shopBlockRow, classes.shopBlockHeadRow)}>
              <Typography className={classNames(classes.shopBlockCol, classes.shopBlockHeadCol)}>ALG/USD 0.10</Typography>
              <Typography className={classes.shopBlockCol}>ALG/BTC 0.000137</Typography>
            </div>
            <div className={classes.shopBlockRow}>
              <div className={classNames(classes.shopBlockCol, classes.shopFormCol)}>
                <Typography className={classes.textFieldLabel}>I want to buy</Typography>
                <TextField
                  className="text-field"
                  type={'number'}
                  value={alg}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">ALG</InputAdornment>,
                  }}
                />
                <Typography className={classes.textFieldLabel}>I will pay with</Typography>
                <TextField
                  className="text-field"
                  type={'number'}
                  value={btc}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">BTC</InputAdornment>,
                  }}
                />
                <Button className={classes.roundedBtn} onClick={() => { this.tryBuy(); } }>Buy</Button>
              </div>
              <div className={classNames(classes.shopBlockCol, classes.infoCol)}>
                <ExpansionPanel className={classes.simpleAccordion}>
                  <ExpansionPanelSummary expandIcon={<i className="fa fa-caret-down" />}>
                    <Typography>What are the fees?</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>A transaction fee goes to the network miners when you are sending BTC. AdvancedAlgos does not requires additional trading fees to execute a buy order.</Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel className={classes.simpleAccordion}>
                  <ExpansionPanelSummary expandIcon={<i className="fa fa-caret-down" />}>
                    <Typography>What is the exchange rate?</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography>These rates are determined by the market; the broader ecosystem of other buyers and sellers. We fetch the most recent exchange rate and guarantee it for 30 seconds. The quote will automatically refresh every 30 seconds until you select ‘BUY’.</Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </div>
          </div>
          {user && transactions && transactions.length > 0 && <table className={classes.transactionsTable}>
            <thead>
              <tr>
                <th><Typography>When</Typography></th>
                <th><Typography>Rate</Typography></th>
                <th><Typography>Amount</Typography></th>
                <th><Typography>Status</Typography></th>
                <th><Typography>Order</Typography></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, i) => (
                <tr key={i}>
                  <td className="date-col">
                    <Typography>{moment(transaction.date).format('MMMM DD YYYY')} <br /> {moment(transaction.date).format('hh:mm A')}</Typography>
                  </td>
                  <td className="rate-col">
                    <Typography>
                      <span>{transaction.currency}/USD {transaction.rateUSD.toFixed(2)}</span> <br />
                      <span>{transaction.rateCurrency}/USD {(transaction.rateUSD*transaction.rate).toFixed(8)}</span>
                    </Typography>
                  </td>
                  <td className="amount-col">
                    <Typography>
                      <strong>{transaction.amount.toFixed(2)} {transaction.currency}</strong> <br />
                      <span>(USD {transaction.USD.toFixed(2)}) {transaction.amount*transaction.rate} {transaction.rateCurrency}</span>
                    </Typography>
                  </td>
                  <td className={'status-col ' + transaction.status}>
                    <Button onClick={()=>this.setState({ showTransaction: transaction })}>{transaction.status}</Button>
                  </td>
                  <td className={'order-col ' + transaction.status}>
                    <Button onClick={()=>this.setState({ showTransaction: transaction })}>details</Button> {transaction.status === 'pending' && '|'} {transaction.status === 'pending' && <Button>cancel</Button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>}
          {/* <TransactionModal transaction={showTransaction} open={showTransaction} /> */}
        </div>
      </div>
    )
  }
}

ShopHome.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
  match: PropTypes.object
}

export default withStyles(styles)(ShopHome)
