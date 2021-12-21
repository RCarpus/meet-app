import React, { Component } from 'react';
import { InfoAlert } from './alert';

class CitySearch extends Component {
  state = {
    query: '',
    suggestions: [],
    showSuggestions: undefined,
    infoText: null
  }

  handleInputChanged = (event) => {
    /**
     * takes the text written in the suggestion box,
     * filters the list of locations against that text.
     * sets an info message if no suggestions are found
     */

    // Get value from input field
    const value = event.target.value;

    // render suggestions box (this is set to false by handleSuggestionClicked)
    this.setState({ showSuggestions: true });
    // Filter the locations list against the text input
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    // if no suggestions, set text for info box
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'We can not find the city you are looking for. Please try another city',
      });
    } else {
      // turns off info text if it was defined, sets suggestions in state
      return this.setState({
        query: value,
        suggestions,
        infoText: ''
      });
    }
  }

  handleSuggestionClicked = (suggestion, number) => {
    /**
     * When a user clicks on a suggestion, updateEvents based on the
     * suggestion and the current selected number of events,
     * and hide the suggestions list
     */
    this.setState({
      query: suggestion,
      showSuggestions: false,
      infoText: ''
    });
    this.props.updateEvents(suggestion, number);
  }

  render() {
    const { numberOfEvents } = this.props; // This is used in updateEvents within handleSuggestionClicked

    return (
      <div className="citySearch">
        <div className="citySearch__alert">
          {/* Renders when no matching city has been found */}
          <InfoAlert text={this.state.infoText} />
        </div>
        
        <div className="citySearch__grid">
          <label htmlFor={this.state.query}>Search for a city:</label>
          <input type="text"
            className="city"
            value={this.state.query}
            onChange={this.handleInputChanged}
            onFocus={() => { this.setState({ showSuggestions: true }) }}
            placeholder="Search.."
          />

          <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
            {this.state.suggestions.map((suggestion) => (
              <li key={suggestion} onClick={() => this.handleSuggestionClicked(suggestion, numberOfEvents)}>{suggestion}</li>
            ))}
            <li key="all" onClick={() => this.handleSuggestionClicked("all", numberOfEvents)}>
              <b >See all cities</b>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CitySearch;