import React from 'react';

function FollowerGrid(props) {
    return (
        <div className="user-block">
            {props.followers.map((follower) => (
                <li key={follower.channel._id} className="user-item">
                    <ul className="user-list-item">
                            <li className="avatar-container">
                                <img
                                    className='avatar'
                                    src={follower.channel.logo || 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/User-offline.svg/1024px-User-offline.svg.png'}
                                    alt={`Avatar for ${follower.channel.display_name}`}
                                />
                            </li>
                            <div className="user-container">
                              <div className="user-detail">
                                <span>Channel </span> 
                                <a href={follower.channel.url}>
                                      {follower.channel.display_name}</a>
                                      {follower.channel.status === null ? 
                                        ' is currently offline' : 
                                        ` status is: ${follower.channel.status}`}
                              </div>
                            </div>
                    </ul>
                </li>
            ))
        }
        </div>
    );
}

export default FollowerGrid;
