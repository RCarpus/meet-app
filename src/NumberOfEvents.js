import React, { Component } from 'react';
import { ErrorAlert, WarningAlert } from './alert';

class NumberOfEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 32,
      displayErrorText: null
    };
  }

  handleInputChanged = (event) => {
    /**
     * calls updateNumberOfEvents using the value in the input field.
     * First cleans the input and sets an error message if the user
     * tries to enter a non-numeric value
     */
    let value = event.target.value;
    let cleanedValue = this.RemoveNonNumeric(value);

    if (value !== cleanedValue) {
      this.setState({
        number: cleanedValue,
        displayErrorText: true
      })
    } else {
      this.setState({
        number: cleanedValue,
        displayErrorText: false
      });
    }

    if (this.props.updateNumberOfEvents)
      this.props.updateNumberOfEvents(cleanedValue);

  }

  RemoveNonNumeric = (text) => {
    // helper function for handleInputChanged
    return text.replace(/[^0-9]/g, '');
  }


  render() {
    const { currentNumberOfEvents } = this.props;
    const { number, displayErrorText } = this.state;
    const displayWarning = currentNumberOfEvents < number;
    const warningText = 'There are not that many events available';
    const errorText = 'Number of Events must be a non-negative integer';

    return (
      <div className="number-of-events">
        <div className="number-of-events__error">
          {/* warning to tell user that they have specified more events than what is available for that city */}
          { displayWarning && <WarningAlert text={warningText} />}

          {/* warning to tell user that they tried to enter a non-numeric value */}
          { displayErrorText && <ErrorAlert text={errorText} /> }
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