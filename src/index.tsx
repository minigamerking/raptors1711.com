import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Home } from "./react/pages/home";
import { AnnouncementBanner } from "./react/elements/announcement-banner";

ReactDOM.render(
    <React.StrictMode>
        <AnnouncementBanner>Due to the rising COVID-19 numbers in our targeted age group (2-12 year olds) we have decided to postpone Super Science Saturday. This was a tough decision to make, but we feel for the safety of all involved that this is the best course of action. We are hoping to reschedule this event for the Spring of 2022.</AnnouncementBanner>
        <Home />
    </React.StrictMode>,
    document.getElementById('react-root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
