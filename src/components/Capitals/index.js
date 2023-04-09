import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  selectElementChanged = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  render() {
    const {activeCapitalId} = this.state
    const filteredItem = countryAndCapitalsList.filter(
      each => each.id === activeCapitalId,
    )
    const {country} = filteredItem[0]

    return (
      <div className="app-container">
        <div className="inner-container">
          <h1 className="heading"> Countries And Capitals </h1>
          <div className="select-item-container">
            <select
              className="select-element"
              onChange={this.selectElementChanged}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(each => (
                <option
                  className="option-element"
                  key={each.id}
                  value={each.id}
                >
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para"> is capital of which country? </p>
          </div>
          <p className="countryName">{country} </p>
        </div>
      </div>
    )
  }
}

export default Capitals
