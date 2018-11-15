import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import moment from 'moment'

import FileCopyIcon from '@material-ui/icons/FileCopy'


import { themeVariables, globalStyles } from '../../../theme'

const styles = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transactionModal: {
    outline: 'none',
    background: themeVariables.colors.snow,
    minWidth: 300,
    width: 480,
    minHeight: 140,
    borderRadius: 5,
    boxShadow: '0 0 30px 0 rgba(0,0,0,0.5)',
    overflow: 'hidden',
  },
  modalBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 40px 20px',
  },
  modalTitle: {
    width: '100%',
    textAlign: 'center',
    padding: '5px 10px',
    borderBottom: '1px solid '+themeVariables.colors.lightGrayBg,
    fontSize: 18,
    marginBottom: 15,
  },
  additionalInfo: {
    fontSize: 12,
    marginBottom: 15,
  },
  confirmBtn: {
    marginTop: 10,
    minWidth: 200,
    padding: 0,
    borderRadius: 20,
    background: themeVariables.colors.primary,
    fontSize: 20,
    color: themeVariables.colors.snow,
    textTransform: 'uppercase',
  },
  
  transactionsTable: {
    borderCollapse: 'collapse',
    width: '100%',
    minWidth: 380,
    marginBottom: 15,
  },
  tableTd: {
    padding: '5px 10px',
    border: '1px solid '+themeVariables.colors.lightGrayBg,
  },
  dataCol: {
    textAlign: 'right',
  },
  tableTdTxt: {
    fontSize: 12,
  },
  smallTxt: {
    fontSize: 10,
  },
  payInfo: {
    textAlign: 'center',
    marginBottom: 15,
  },
  copyIcon: {
    height: 12,
    opacity: 0.7,
  },
})

class TransactionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
          open: Boolean(props.open),
      };
  }
    
  componentWillReceiveProps(nextProps) {
    this.setState({ open: Boolean(nextProps.open) });
  }

  render() {
    const { open } = this.state;
    const { transaction, classes, onClose } = this.props;
    const isPending = transaction && transaction.status === 'pending';
    return (
      <Modal
        className={classes.modal}
        open={open}
        onClose={() => { onClose ? onClose() : this.setState({ open: false }) }}
      >
        <div className={classes.transactionModal}>
          {transaction && <div className={classes.modalBody}>
            <Typography className={classes.modalTitle}>{isPending ? 'Confirm Buy Order' : 'Order Details'}</Typography>

            {transaction && isPending && <div>
              <table className={classes.transactionsTable}>
                <tbody>
                  <tr>
                    <td className={classNames(classes.tableTd, classes.labelCol)}>
                      <Typography className={classes.tableTdTxt}>Quantity</Typography>
                    </td>
                    <td className={classNames(classes.tableTd, classes.dataCol)}>
                      <Typography className={classes.tableTdTxt}>{transaction.amount.toFixed(2)} {transaction.currency}</Typography>
                    </td>
                  </tr>
                  <tr>
                    <td className={classNames(classes.tableTd, classes.labelCol)}>
                      <Typography className={classes.tableTdTxt}>Rate</Typography>
                    </td>
                    <td className={classNames(classes.tableTd, classes.dataCol)}>
                      <Typography className={classes.tableTdTxt}>1{transaction.currency} / {transaction.rate.toFixed(8)}{transaction.rateCurrency}</Typography>
                    </td>
                  </tr>
                  <tr>
                    <td className={classNames(classes.tableTd, classes.labelCol)}>
                      <Typography className={classes.tableTdTxt}>Total</Typography>
                    </td>
                    <td className={classNames(classes.tableTd, classes.dataCol)}>
                      <Typography className={classes.tableTdTxt}>{transaction.amount*transaction.rate} {transaction.rateCurrency}</Typography>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>}

            {transaction && !isPending && <div>
              <table className={classes.transactionsTable}>
                <tbody>
                  <tr>
                    <td className={classNames(classes.tableTd, classes.labelCol)}>
                      <Typography className={classes.tableTdTxt}>Time</Typography>
                    </td>
                    <td className={classNames(classes.tableTd, classes.dataCol)}>
                      <Typography className={classes.tableTdTxt}>{moment(transaction.date).format('MMMM DD YYYY - hh:mm A')}</Typography>
                    </td>
                  </tr>
                  <tr>
                    <td className={classNames(classes.tableTd, classes.labelCol)}>
                      <Typography className={classes.tableTdTxt}>Quantity</Typography>
                    </td>
                    <td className={classNames(classes.tableTd, classes.dataCol)}>
                      <Typography className={classes.tableTdTxt}>{transaction.amount.toFixed(2)} {transaction.currency}</Typography>
                    </td>
                  </tr>
                  <tr>
                    <td className={classNames(classes.tableTd, classes.labelCol)}>
                      <Typography className={classes.tableTdTxt}>Rate</Typography>
                    </td>
                    <td className={classNames(classes.tableTd, classes.dataCol)}>
                      <Typography className={classes.tableTdTxt}>1{transaction.currency} / {transaction.rate.toFixed(8)}{transaction.rateCurrency}</Typography>
                    </td>
                  </tr>
                  <tr>
                    <td className={classNames(classes.tableTd, classes.labelCol)}>
                      <Typography className={classes.tableTdTxt}>Amount to Pay</Typography>
                    </td>
                    <td className={classNames(classes.tableTd, classes.dataCol)}>
                      <Typography className={classes.tableTdTxt}>{transaction.amount*transaction.rate} {transaction.rateCurrency}</Typography>
                    </td>
                  </tr>
                  <tr>
                    <td className={classNames(classes.tableTd, classes.labelCol)}>
                      <Typography className={classes.tableTdTxt}>Destionation</Typography>
                    </td>
                    <td className={classNames(classes.tableTd, classes.dataCol)}>
                      <Typography className={classNames(classes.tableTdTxt, classes.smallTxt)}>{transaction.destination}<FileCopyIcon className={classes.copyIcon}/></Typography>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Typography className={classNames(classes.tableTdTxt, classes.payInfo)}>
                <span>Send exactly </span> <strong>{transaction.amount*transaction.rate} {transaction.rateCurrency}</strong> <span> to this address:</span> <br />
                <span className={classes.smallTxt}>{transaction.destination}<FileCopyIcon className={classes.copyIcon}/></span>
              </Typography>
            </div>}

            <Typography className={classes.additionalInfo}>
              <strong>Remember:</strong>
              <div>- A <strong>new</strong> bitcoin <strong>address</strong> have been generated for this order. </div>
              <div>- If you are sending BTC from an <strong>exchange</strong>, <strong>check</strong> if the <strong>fees</strong> are inside the total amount.</div>
              <div>- If there is any difference in the amount, the order will be redirected to our support team.</div>
            </Typography>

            <Button className={classes.confirmBtn} onClick={() => this.setState({ open: false })}>{isPending ? 'Confirm' : 'Cancel'}</Button>
          </div>}
        </div>
      </Modal>
    );
  }
}
TransactionModal.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.any,
  transaction: PropTypes.any,
};

export default withStyles(styles)(TransactionModal);