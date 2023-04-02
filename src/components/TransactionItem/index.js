// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachPayment, deletePayment} = props
  const {title, amount, type, id} = eachPayment

  const delPay = () => {
    deletePayment(id)
  }
  return (
    <li className="list-card">
      <p className="text-card">{title}</p>
      <p className="text-card">Rs {amount}</p>
      <p className="text-card">{type}</p>
      <button
        type="button"
        data-testid="delete"
        className="del-btn"
        onClick={delPay}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="del-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
