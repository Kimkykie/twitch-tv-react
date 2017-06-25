import React, { Component } from 'react';
import api from '../utils/api';

function FollowerGrid(props) {
    return (
        <ul className="user-block">
            {props.followers.map((follower) => (
                <li key={follower.channel._id} className="user-item">
                    <ul className="user-list-item">
                            <li>
                                <img
                                    className='avatar'
                                    src={follower.channel.logo}
                                    alt={`Avatar for ${follower.channel.display_name}`}
                                />
                            </li>
                            <li>Username: {follower.channel.display_name}</li>
                            <li>Game: {follower.channel.game}</li>
                            <li>Status: {follower.channel.status}</li>
                    </ul>
                </li>
            ))
        }
        </ul>
    );
}

class FollowerStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: []
        };

        this.updateFollowers = this.updateFollowers.bind(this);
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

    render() {
        return (
            <FollowerGrid followers={this.state.followers} />
        );
    }
}

export default FollowerStatus;
