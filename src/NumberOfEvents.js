import React, { Component } from 'react';
import { ErrorAlert } from './alert';

class NumberOfEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 32,
      errorText: ''
    };
  }

  handleInputChanged = (event) => {
    let value = event.target.value;
    let cleanedValue = this.RemoveNonNumeric(value);

    if (value !== cleanedValue) {
      console.log('clenaed avlue again', cleanedValue);
      this.setState({
        number: cleanedValue,
        errorText: 'Number of Events must be a non-negative integer'
      })
    } else {
      this.setState({
        number: cleanedValue,
        errorText: ''
      });
    }

    if (this.props.updateNumberOfEvents)
      this.props.updateNumberOfEvents(cleanedValue);

  }

  RemoveNonNumeric = (text) => {
    return text.replace(/[^0-9]/g, '');
  }


  render() {
    return (
      <div className="number-of-events">
        <div className="number-of-events__error">
          <ErrorAlert text={this.state.errorText} />
        </div>
        <div className="number-of-events__grid">
          <label id="number-of-events__label" htmlFor="number-of-events__input">Number of Events:</label>
          <input id="number-of-events__input" value={this.state.number} onChange={this.handleInputChanged} />
        </div>
      </div>
    )
  }
}

export default NumberOfEvents;