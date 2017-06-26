import React, { Component } from 'react';
import api from '../utils/api';

import FollowerGrid from './FollowerGrid';

class FollowerStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: []
        };

        this.updateFollowers = this.updateFollowers.bind(this);
        this.offlineFollowers = this.offlineFollowers.bind(this);
    }

    componentDidMount() {
        this.updateFollowers();
    }

    updateFollowers() {
        api.getFollowerStatus().then((response) => {
            this.setState(() => ({
                    followers: response.follows
                }));
        });
    }

    offlineFollowers() {
        const offlinefollowers = this.state.followers.filter((follower) =>
         follower.channel.status === null);

         this.setState(() => ({
            followers: offlinefollowers
         }));
    }

    render() {
        return (
            <div>
                <div className='button-container'>
                    <button onClick={this.updateFollowers} className='all-btn'>ALL</button>
                    <button onClick={this.offlineFollowers} className='offline-btn'>OFFLINE</button>
                </div>
                <FollowerGrid followers={this.state.followers} />
            </div>
        );
    }
}

export default FollowerStatus;
