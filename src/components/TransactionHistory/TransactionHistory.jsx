import PropTypes from 'prop-types'
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({items}) => {
    return (
    <table className={css.transaction_history}>
  <thead className={css.transaction}>
    <tr className={css.transaction_list}>
      <th className={css.transaction_item}>Type</th>
      <th className={css.transaction_item}>Amount</th>
      <th className={css.transaction_item}>Currency</th>
    </tr>
  </thead>

    <tbody className={css.wrapper}>
    {items.map(item => (
    <tr key={item.id} className={css.list}>
      <td className={css.item}>{item.type}</td>
      <td className={css.item}>{item.amount}</td>
      <td className={css.item}>{item.currency}</td>
    </tr>
    ))}
    
  </tbody>
</table>
    );
};

TransactionHistory.propTypes = {
  transactionData: PropTypes.exact({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
  };