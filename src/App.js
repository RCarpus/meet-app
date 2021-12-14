import React from 'react';
import './css/App.css';
import './css/nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';

class App extends React.Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: '32',
    location: 'all'
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events.slice(0, this.state.numberOfEvents) :
        events.filter((event) => event.location === location).slice(0, this.state.numberOfEvents);

      this.setState({
        events: locationEvents.slice(0, this.state.numberOfEvents),
        location
      });
    });
  }

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState({
      numberOfEvents
    }, this.updateEvents(this.state.location));
  }


  render() {
    const { events, locations, numberOfEvents } = this.state;
    return (
      <div className="App">
        <div id="App__header">
          <h1>Search for tech events</h1>
          <p>This app uses the Google Calendar API in conjunction with a CareerFoundry calendar to fetch and filter events based on the city and number of events desired. Give it a try!</p>
        </div>
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateNumberOfEvents={number => { this.updateNumberOfEvents(number) }} />
        <EventList events={events} numberOfEvents={numberOfEvents} />
      </div >
    );
  }
}

export default App;
