import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Home } from "./react/pages/home";
import { AnnouncementBanner } from "./react/elements/announcement-banner";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AboutUs } from "./react/pages/about-us";
import { NotFound } from "./react/pages/not-found";
import { ContactUs } from "./react/pages/contact-us";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AnnouncementBanner>Due to the rising COVID-19 numbers in our target age group (2-12 year olds) we have decided to postpone Super Science Saturday. This was a tough decision to make, but we feel for the safety of all involved that this is the best course of action. We are hoping to reschedule this event for the Spring of 2022.</AnnouncementBanner>
            <Routes>
                <Route index element={<Navigate replace to="/home" />} />
                <Route path="/index" element={<Navigate replace to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('react-root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
