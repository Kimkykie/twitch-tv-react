import React, { Component } from 'react';
import api from '../utils/api';

function Online() {
    return (
        <div className="fccStatus"> Free Code Camp is Currently Online </div>
    );
}

function Offline() {
    return (
        <div className="fccStatus"> Free Code Camp is Currently Offline </div>
    );
}

class FccStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: null
        };
        
        this.updateStatus = this.updateStatus.bind(this);
    }
    componentDidMount() {
       this.updateStatus();
    }

    //Update the current status of FCC on twitch.tv
    updateStatus() {
         api.fetchFccStatus().then((response) => {
             //Set state of status depending on FCC streaming status
            this.setState(() => ({
                    status: response.stream
                }));
        });
    }
    render() {
        return (
            <div>
            <div className="fccHeader">TWITCH.TV</div>
            {/*Render Offline if status is null and Online if status is streaming*/}
                { this.state.status === null 
                    ? <Offline />
                    : <Online /> 
                }
           </div>
        );
    }
}

export default FccStatus;
