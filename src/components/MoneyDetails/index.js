// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {Income, Expence, Balance} = props

  return (
    <div className="total-card">
      <div className="income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="total-img"
        />
        <div>
          <p className="all-text">Your Balance</p>
          <p className="rupees-text" data-testid="balanceAmount">
            Rs {Balance}
          </p>
        </div>
      </div>
      <div className="expence-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="total-img"
        />
        <div>
          <p className="all-text">Your Income</p>
          <p className="rupees-text" data-testid="incomeAmount">
            Rs {Income}
          </p>
        </div>
      </div>
      <div className="balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="total-img"
        />
        <div>
          <p className="all-text">Your Expenses</p>
          <p className="rupees-text" data-testid="expensesAmount">
            Rs {Expence}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
