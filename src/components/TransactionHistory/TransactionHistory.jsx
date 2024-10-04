import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

// Aflam tipul de tranzactie
const TransactionHistory = ({ items }) => {
  return (
    <table className={styles['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction, index) => (
          <tr
            key={transaction.id}
            // style={{ backgroundColor: index % 2 === 0 ? 'blue' : 'red' }}
            className={`${
              index%2 === 0 ? styles.bg1 : styles.bg2
            }`}
          >
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.porpTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};

export default TransactionHistory;
