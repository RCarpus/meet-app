import React from 'react';
import './css/App.css';
import './css/nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { WarningAlert } from './alert';
import WelcomeScreen from './WelcomeScreen';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import EventGenre from './EventGenre';
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
    // Only attempt to access Google API if online
    if (navigator.onLine & !window.location.href.startsWith('http://localhost')) {
      // If we have an access token saved, check to see if it's valide
      const accessToken = localStorage.getItem('access_token');
      const tokenIsValid = (await checkToken(accessToken)).error ? false : true;
      // If we were redirected from google login page, we will have a code in the URL
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get('code');
      // show the welcome screen if we are missing a valid code or token
      this.setState({ showWelcomeScreen: !(code || tokenIsValid) });
      // If we have a code an valid token, use them to get events
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
    // If offline, skip to getEvents. This function grabs from localStorage when offline.
    else {
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

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location = 'all', number = this.state.numberOfEvents) => {
    /**
     * Expects a location (or "all") and a number.
     * Gets events, filters the event list by city name,
     * reduces the number of events based on the specified number,
     * and sets App state with new events list.
     * 
     * Function is called from CitySearch directly
     * and by NumberOfEvents indirectly (through updateNumberOfEvents)
     */
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
    /**
     * Function called by NumberOfEvents.
     * 
     * Sets the App numberOfEvents state based on the input field
     * THEN calls updateEvents with the current location and new numberOfEvents
     */
    this.setState({
      numberOfEvents
    }, this.updateEvents(this.state.location, numberOfEvents));
  }

  getData = () => {
    /**
     * Create a data set to use for data visualization.
     * Extracts an array of cities/number pairs from locations and events
     */
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length;
      const city = location.split(', ').shift();
      return { city, number };
    })
    return data;
  }


  render() {
    const { events, locations, numberOfEvents } = this.state;
    const chartData = this.getData();

    return (
      <div className="App">
        <div id="App__header">
          <h1>Search for tech events</h1>
          <p>This app uses the Google Calendar API in conjunction with a CareerFoundry calendar to fetch and filter events based on the city and number of events desired. Give it a try!</p>

          {/* Show a warning message when the user is offline. */}
          {!navigator.onLine && <WarningAlert text={"Offline. New events cannot be loaded until you have an internet connection."} />}

        </div>

        {/* These are my input fields */}
        <CitySearch locations={locations} numberOfEvents={numberOfEvents} updateEvents={this.updateEvents} />
        <NumberOfEvents updateNumberOfEvents={number => { this.updateNumberOfEvents(number) }} currentNumberOfEvents={events.length} />

        <div className="App__charts">
          <div className="App__charts__pie">
            <EventGenre events={events} />
          </div>
          <div className="App__charts__scatter">
            <ResponsiveContainer height={400} width="99%">
              <ScatterChart
                margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" fill="#ffffff" />
                <XAxis dataKey="city" name="City" type="category" />
                <YAxis dataKey="number" name="Number of Events" allowDecimals={false} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={chartData} fill="#000000" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* Renders event cards */}
        <EventList events={events} numberOfEvents={numberOfEvents} />

        {/* Welcome screen covers up everything else when active. This is triggered when user is not signed in. */}
        {navigator.onLine && <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />}
      </div >
    );
  }
}

export default App;
