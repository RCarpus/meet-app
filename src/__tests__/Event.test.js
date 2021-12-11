import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import '@testing-library/jest-dom';


import { mockData } from '../mock-data';

describe('<CitySearch /> component', () => {

  let EventWrapper;
  const mockEvent = mockData[0];

  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockEvent}/>);
  });

  test('Event name renders', () => { 
    expect(EventWrapper.find('.event__name')).toHaveLength(1);
  });

  test('Event name renders correct name', () => {
    console.log(mockData.summary);
    expect(EventWrapper.find('.event__name').at(0).text()).toBe('Learn JavaScript');
  })

  test('Event start time renders', () => { 
    expect(EventWrapper.find('.event__start')).toHaveLength(1);
  });

  test('Event title line 2 renders', () => {
    expect(EventWrapper.find('.event__title-line-2')).toHaveLength(1);
  })


  test('Event name proceeded by "@" renders', () => {
    expect(EventWrapper.find('.event__title-line-2__title')).toHaveLength(1);
  })

  test('City name renders', () => {
    expect(EventWrapper.find('.event__title-line-2__city')).toHaveLength(1);
  })

  test('Details button renders', () => {
    expect(EventWrapper.find('.event__details-button')).toHaveLength(1);
  })

  test('Additional details do not render on load', () => {
    expect(EventWrapper.find('.event__more-details')).not.toHaveLength(1);
  })

  test('Event state.expanded changes from true to false when clicked', () => {
    const detailsButton = EventWrapper.find('.event__details-button').first();
    EventWrapper.setState({ expanded: true });
    detailsButton.at(0).simulate('click');
    expect(EventWrapper.state('expanded')).toBe(false);
  })

  test('Event state.expanded changes from false to true when clicked', () => {
    const detailsButton = EventWrapper.find('.event__details-button').first();
    EventWrapper.setState({ expanded: false });
    detailsButton.at(0).simulate('click'); 
    expect(EventWrapper.state('expanded')).toBe(true);
  })


});