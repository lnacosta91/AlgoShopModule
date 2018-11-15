import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from "moment/moment";
import Button from '@material-ui/core/Button';

import TransactionModal from './TransactionsModal'
import BannerTopBar from './BannerTopBar'

const styles = theme => ({
    root: {
        padding: '40px 50px',
    },
    shopModulePageInner: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
});

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

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTransaction: false
    };
  }

  render () {
    const { showTransaction } = this.state;
    const { classes } = this.props;
    let pendingOrder = false;
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].status === 'pending') {
        pendingOrder = transactions[i]; break;
      }
    }
    return (
      <React.Fragment>
          <BannerTopBar
              size='medium'
              title='Buying History'
              text='Here you can see the registry of your buyings.'
              backgroundUrl='https://www.advancedalgos.net/img/photos/algo-shop.jpg'
          />
          <div className={classes.root}>
            <div className={classes.shopModulePageInner}>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>When</TableCell>
                                <TableCell>Rate</TableCell>
                                <TableCell numeric>Amount</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Order</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactions.map( transaction => {
                                return (
                                    <TableRow key={transaction.id}>
                                        <TableCell scope="row">{moment(transaction.date).format('MMMM DD YYYY')}<br/>{moment(transaction.date).format('hh:mm A')}</TableCell>
                                        <TableCell>{transaction.currency}/USD {transaction.rateUSD.toFixed(2)}<br/>{transaction.rateCurrency}/USD {(transaction.rateUSD*transaction.rate).toFixed(8)}</TableCell>
                                        <TableCell>{transaction.amount.toFixed(2)} {transaction.currency}<br/>(USD {transaction.USD.toFixed(2)}) {transaction.amount*transaction.rate} {transaction.rateCurrency}</TableCell>
                                        <TableCell><Button /* TODO: change class depending on status */ onClick={()=>this.setState({ showTransaction: transaction })}>{transaction.status}</Button></TableCell>
                                        <TableCell><Button /* TODO: change class depending on status */ onClick={()=>this.setState({ showTransaction: transaction })}>details</Button>{transaction.status === 'pending' && <Button className="statusBtn" >cancel</Button>}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    <TransactionModal transaction={showTransaction} open={showTransaction} onClose={()=>{ this.setState({ showTransaction: false }) }} />
                </Paper>
            </div>
          </div>
      </React.Fragment>
    )
  }
}

History.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object,
  match: PropTypes.object
};

export default withStyles(styles)(History)
