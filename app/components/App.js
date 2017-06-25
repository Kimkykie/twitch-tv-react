import React, { Component } from 'react';
import FccStatus from './FccStatus';
import FollowerStatus from './FollowerStatus';

class App extends Component {
    render() {
        return (
            <div>
                <FccStatus />
                <FollowerStatus />
            </div>
        );
    }
}

export default App;
