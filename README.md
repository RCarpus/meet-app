# meet-app
 A serverless PWA with React using TDD using Google Calendar API to fetch upcoming events.

## User Stories and Requirements
### FEATURE 1: FILTER EVENTS BY CITY
**User Story**: As a user, I should be able to filter the events by city so that I can see the list of events that take place near that city.  

**Scenario 1**: Given the user hasn’t searched for any city, when the user opens the app, then the user should see a list of all upcoming events.  

**Scenario 2**: Given the main page is open, when the user starts typing in the city textbox, then the user should see a list of cities (suggestions) that match what they’ve typed.  

**Scenario 3**: Given the user was typing “Berlin” in the city textbox, and the list of suggested cities is showing, when the user selects a city (eg., “Berlin, Germany”) from the list, then their city should be changed to that city (i.e., “Berlin, Germany”), and the user should receive a list of upcoming events in that city.  

### FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS
User Story: As a user, I should be able to hide or show event details so that I can see more or less about an event.  

**Scenario 1**: Given that an event element is collapsed by default after loading data, when the user initially loads the data, each event element should be collapsed.  

**Scenario 2**: Given that an event element is collapsed, when the user clicks on an event, the event element should expand.  

**Scenario 3**: Given that an event element is expanded, when the user clicks on an event, the event element should collapse.  

### FEATURE 3: SPECIFY NUMBER OF EVENTS
**User Story**: As a user, I should be able to specify the number of events so that I can see a specific number of events.

**Scenario 1**: Given that the user has not specified a number of events to show, when the user loads the data, 32 events should be displayed.

**Scenario 2**: Given the main page is open, when the user types a number into the number of events textbox, the number of events displayed should match the number input by the user, unless there are fewer events than the specified number.

### FEATURE 4: USE THE APP WHEN OFFLINE
**User Story**: As a user, I should be able to use the app while offline so that I can see the events I was viewing the last time I was connected to the internet.

**Scenario 1**: Given that there is no internet connection and the user has cached data, when the user loads the application, the user should see the events they saw the last time they were connected to the internet.

**Scenario 2**: Given that there is no internet connection, when the user changes the settings (city, time range), the user should see an error message warning them that their search cannot be performed because they are offline.

### FEATURE 5: DATA VISUALIZATION
**User Story**: As a user, I should be able to see a chart showing the number and type of upcoming events in each city so that I can see what types of events are happening in each city.

**Scenario 1**: Given that the user has performed a successful search query, when the main page is loaded, the user should see a pie chart displaying the types of events and a bar chart displaying the number of events in each city.
