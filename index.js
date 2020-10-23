const axios = require('axios');

const api_url = 'http://apilayer.net/api/check?access_key';
const api_key = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; //Enter the key obtained from mailboxlayer.com

const email = ''; //Enter email id to be validated and checked
const entire_url = `${api_url}=${api_key}&email=${email}&smtp=1&format=1`;
axios.get(entire_url)
    .then(response => {
        if(!response.data.format_valid){
            console.log("Invalid format!");
            return;
        }
        if(!response.data.smtp_check){
            console.log("Email address not registered.")
            return;
        }
        else{
            console.log("Success!");
        }
    })
    .catch(error => console.log('Error', error));