import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
  render() {
    const { events } = this.props;

    return (
      <ul className="EventList">
        {/* Show a loading message when number of events is 0. This also triggers when the user asked for 0 events. */}
        {events.length === 0 &&
          <div>
            <h2>Loading...</h2>
            <p>(or you've set the number of events to 0. But you wouldn't want to do that, would you?)</p>
          </div>}

        {events.map(event =>
          <li key={event.id}>
            <Event event={event} />
          </li>
        )}
      </ul>
    );
  };
}

export default EventList;