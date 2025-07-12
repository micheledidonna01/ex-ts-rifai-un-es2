import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold text-primary" href="#">
                    ✈️ TravelHub
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#destinations">Destinations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#weather">Weather</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#airports">Airports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
