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
    numberOfEvents: '32'
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events: events.slice(0,this.state.numberOfEvents), 
                        locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location).slice(0,this.state.numberOfEvents);

      this.setState({
        events: locationEvents.slice(0,this.state.numberOfEvents)
      });
    });
  }

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState({
      numberOfEvents
    });
  }


  render() {
    const { events, locations } = this.state;
    return (
      <div className="App">
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateNumberOfEvents={number => { this.updateNumberOfEvents(number) } }/>
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
