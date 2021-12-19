import React from 'react';
import './css/App.css';
import './css/nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { WarningAlert } from './alert';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';

class App extends React.Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: '32',
    location: 'all',
    showWelcomeScreen: undefined
  };

  async componentDidMount() {
    this.mounted = true;
    if (navigator.onLine) {
      const accessToken = localStorage.getItem('access_token');
      const tokenIsValid = (await checkToken(accessToken)).error ? false : true;
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get('code');
      this.setState({ showWelcomeScreen: !(code || tokenIsValid) });
      if ((code || tokenIsValid) && this.mounted) {
        getEvents().then((events) => {
          if (this.mounted) {
            this.setState({
              events: events.slice(0, this.state.numberOfEvents),
              locations: extractLocations(events)
            });
          }
        });
      }
    }
    else {
      getEvents();
    }


  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location = 'all', number = this.state.numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events.slice(0, number) :
        events.filter((event) => event.location === location).slice(0, number);

      this.setState({
        events: locationEvents.slice(0, number),
        location
      });
    });
  }

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState({
      numberOfEvents
    }, this.updateEvents(this.state.location, numberOfEvents));
  }


  render() {
    const { events, locations, numberOfEvents } = this.state;

    return (
      <div className="App">
        <div id="App__header">
          <h1>Search for tech events</h1>
          <p>This app uses the Google Calendar API in conjunction with a CareerFoundry calendar to fetch and filter events based on the city and number of events desired. Give it a try!</p>
          {!navigator.onLine && <WarningAlert text={"Offline. New events cannot be loaded until you have an internet connection."} />}
        </div>
        <CitySearch locations={locations} numberOfEvents={numberOfEvents} updateEvents={this.updateEvents} />
        <NumberOfEvents updateNumberOfEvents={number => { this.updateNumberOfEvents(number) }} currentNumberOfEvents={events.length} />
        <EventList events={events} numberOfEvents={numberOfEvents} />
        {navigator.onLine && <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />}
      </div >
    );
  }
}

export default App;
