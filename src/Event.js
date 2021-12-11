import React, { Component } from 'react';
// import './css/Event.css';

class Event extends Component {
  constructor(props) {
    super();

    this.state = {
      expanded: false
    };
  }

  handleClickDetailsButton = (e) => {
    const current = this.state.expanded;
    this.setState({
      expanded: current ? false : true
    });
  }

  render() {
    const { expanded } = this.state;
    const { event }= this.props;
    return ( 
    <div className='event'>
      <h2 className='event__name'>{event.summary}</h2>
      <p className='event__start'></p>
      <p className='event__title-line-2'>
        <span className='event__title-line-2__at-sign'>@</span>
        <span className='event__title-line-2__title'></span>
        <span className='event__title-line-2__pipe'> | </span>
        <span className='event__title-line-2__city'></span>
      </p>

      { expanded && 
      <div className='event__more-details' >
        <h3 className='event__more-details__about-label'>About event</h3>
        <p className='event__more-details__link-line'>
          <a className='event__more-details__link-line__link'></a>
        </p>
        <p className='event__more-details__description'></p>
      </div>
      }

      <button className='event__details-button' 
              onClick={(e) => this.handleClickDetailsButton(e)}></button>
    </div>
    );
  }
}

export default Event;