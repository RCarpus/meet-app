import React from "react";
import './css/WelcomeScreen.css';
function WelcomeScreen(props) {
  return props.showWelcomeScreen ?
    (
      <div className="WelcomeScreen">
        <div className="WelcomeScreen__content">
          <div className="WelcomeScreen__content__heading">
            <h1>Welcome to the Meet app</h1>
            <h4>
              Log in to see upcoming events around the world for
              full-stack
              developers
            </h4>
          </div>
          <div className="button_cont" align="center">
            <div className="google-btn">
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="Google sign-in"
                />
              </div>
              <button onClick={() => { props.getAccessToken() }}
                rel="nofollow noopener"
                className="btn-text"
              >
                <b>Sign in with google</b>
              </button>
            </div>
          </div>
          <a
            href="https://rcarpus.github.io/meet-app/privacy.html"
            rel="nofollow noopener"
            className="WelcomeScreen__privacy-policy"
          >
            Privacy policy
          </a>
          <div className="WelcomeScreen__app-info">
            <h2>What does this app do, and why do I need to sign in with my Google account?</h2>
            <p>
              Meet app is a Progressive Web App (PWA) built with React and coded using a test-driven development process. The app uses the Google Calendar API to fetch upcoming events from a a CareerFoundry events calendar.
            </p>
            <p>
              Once logged in, the app is a single page app with two inputs, one for a city name, and one for a number of events to show. Simply input your desired city and select it from the suggestions dropdown, then narrow down or increase the number of events shown with using the number input. Clicking on the "more details" button for an event will display a description and URL for the event. Clicking the event URL will redirect you to the Google Calendar event.
            </p>
            <p>
              The Meet app is using https://www.googleapis.com/auth/calendar.events.readonly for
              educational purposes only. The calendar accessed isn’t the user’s but a calendar provided by
              CareerFoundry as part of their Full-Stack Immersion course. No user information is saved or
              used within the application, and personal calendars aren’t accessed.
            </p>
            <p>
              If you'd like to see more of my work, please visit <a href="http://rcarpus.github.io" target={"_blank"} rel="noreferrer">my portfolio site at rcarpus.github.io</a>.
            </p>
          </div>

        </div>

      </div>
    )
    : null
}
export default WelcomeScreen;
