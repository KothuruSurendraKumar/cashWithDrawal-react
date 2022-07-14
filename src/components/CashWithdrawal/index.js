// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const name = 'Sarah Williams'
    const logo = name.slice(0, 1)
    const {denominationsList} = this.props
    return (
      <div className="app-container">
        <div className="top-header">
          <p className="logo">{logo}</p>
          <h1 className="heading">{name}</h1>
        </div>
        <div className="second-container">
          <p className="second-head">Your Balance</p>
          <div className="second-inner">
            <p className="count">{balance}</p>
            <p className="text">In Rupees</p>
          </div>
        </div>

        <p className="head-one">Withdraw</p>
        <p className="head-two">CHOOSE SUM (IN RUPEES)</p>
        <ul className="list-items">
          {denominationsList.map(each => (
            <DenominationItem
              key={each.id}
              denominationDetails={each}
              updateBalance={this.updateBalance}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default CashWithdrawal
