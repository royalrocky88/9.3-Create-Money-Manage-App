import './index.css'

import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    historyList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  onTitle = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onAmount = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  onType = event => {
    this.setState({
      optionId: event.target.value,
    })
  }

  onForm = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeUpdate = transactionTypeOptions.find(
      eachType => eachType.optionId === optionId,
    )

    const {displayText} = typeUpdate
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(oldValue => ({
      historyList: [...oldValue.historyList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onIncome = () => {
    const {historyList} = this.state
    let incomeValue = 0

    historyList.forEach(eachPayment => {
      if (eachPayment.type === transactionTypeOptions[0].displayText) {
        incomeValue += eachPayment.amount
      }
    })
    return incomeValue
  }

  onExpence = () => {
    const {historyList} = this.state

    let expenceValue = 0

    historyList.forEach(eachPayment => {
      if (eachPayment.type === transactionTypeOptions[1].displayText) {
        expenceValue += eachPayment.amount
      }
    })
    return expenceValue
  }

  onBalance = () => {
    const {historyList} = this.state
    let incomeValue = 0
    let expenceValue = 0
    let balanceValue = 0

    historyList.forEach(eachPay => {
      if (eachPay.type === transactionTypeOptions[0].displayText) {
        incomeValue += eachPay.amount
      } else {
        expenceValue += eachPay.amount
      }
    })
    balanceValue = incomeValue - expenceValue
    return balanceValue
  }

  deletePayment = id => {
    const {historyList} = this.state

    const updateDelete = historyList.filter(eachPay => id !== eachPay.id)
    this.setState({
      historyList: updateDelete,
    })
  }

  render() {
    const {titleInput, amountInput, historyList, optionId} = this.state
    const totalIncome = this.onIncome()
    const totalExpence = this.onExpence()
    const totalBalance = this.onBalance()

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="head-container">
            <h1 className="heading-card">Hi, Richard</h1>
            <p className="slogan-card">
              Welcome back to your
              <span className="color-card"> Money Manager </span>
            </p>
          </div>
          <div className="mid-container">
            <MoneyDetails
              Income={totalIncome}
              Expence={totalExpence}
              Balance={totalBalance}
            />
          </div>
          <div className="last-container">
            <form className="form-card" onSubmit={this.onForm}>
              <h1 className="head-card">Add Transaction</h1>

              <label className="label-card" htmlFor="title">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                value={titleInput}
                onChange={this.onTitle}
                className="input-card"
                placeholder="TITLE"
              />

              <label className="label-card" htmlFor="amount">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                value={amountInput}
                onChange={this.onAmount}
                className="input-card"
                placeholder="AMOUNT"
              />

              <label className="label-card" htmlFor="type">
                TYPE
              </label>
              <select
                id="type"
                value={optionId}
                onChange={this.onType}
                className="input-card"
              >
                {transactionTypeOptions.map(eachType => (
                  <option value={eachType.optionId} key={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>

              <button type="submit" className="btn">
                Add
              </button>
            </form>
            <div className="history-card">
              <h1 className="header-card">History</h1>
              <div className="history-container">
                <ul className="list-card-container">
                  <li className="list-card">
                    <p className="pay-detail">Title</p>
                    <p className="pay-detail">Amount</p>
                    <p className="pay-detail">Type</p>
                    <p className="pay-off-detail"> pokemon </p>
                  </li>
                  {historyList.map(eachPayment => (
                    <TransactionItem
                      key={eachPayment.id}
                      eachPayment={eachPayment}
                      deletePayment={this.deletePayment}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
