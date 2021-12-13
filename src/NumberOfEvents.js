import React, { Component } from 'react';
// import './css/NumberOfEvents.css';

class NumberOfEvents extends Component {
  constructor(props) {
    super();

    this.state = {
      number: 32
    };
  }

  handleInputChanged = (event) => {
    const value = this.RemoveNonNumeric(event.target.value);
    this.setState({
      number: value,
    });
  }

  RemoveNonNumeric = (text) => {
    return text.replace(/[^0-9]/g, '');
  }


  render() {
    return (
      <div className="number-of-events">
        <label id="number-of-events__label" htmlFor="number-of-events__input">Number of Events:</label>
        <input id="number-of-events__input" value={this.state.number} onChange={this.handleInputChanged}/>
      </div>
    )
  }
}

export default NumberOfEvents;