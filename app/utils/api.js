import axios from 'axios';

module.exports = {
    //Fetch FreeCodeCamp Status
    fetchFccStatus() {
        //FCC api url
        const fccUrl = 'https://wind-bow.glitch.me/twitch-api/streams/freecodecamp';

        return axios.get(fccUrl)
            .then((response) => response.data);
    },

    getFollowerStatus() {
        //Follower api url
        const followerUrl = 'https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels';

        return axios.get(followerUrl)
            .then((response) => response.data);
    }
};
