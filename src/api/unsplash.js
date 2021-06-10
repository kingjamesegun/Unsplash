import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
     headers:{
                Authorization: 'Client-ID 9a75cb750c449ca693e865593e8ead262ff44198d6eacd76edb1dd73673acfe0'
            }

})