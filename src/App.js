import React, { Component } from 'react';

import RNought from './components/calculators/r-nought';

export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <div className="col-lg-12">
                    <RNought />
                </div>
            </div>
        );
    }
}