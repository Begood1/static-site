import '../stylesheets/style.scss';
import qs from 'qs';
import axios from 'axios';
import * as config from '../../config/config.json';

const form = document.querySelector('.form');
//https://yero.netlify.com/
// ðŸ‘‡ Write homework code here

const formData = {
    name:,
};
const postToNetlify = () => {
    const body = {
        fields: {
            Name: name.value,
            Email: email.value,
            Comment: comment.value,
        },
    };
    // ðŸ‘† Write homework code here

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post(config.site.url, qs.stringify({ 'form-name': 'Comments', ...formData }))
            .then(_ => console.log('success'))
            .catch(_ => console.log('failed'));
    };

    form.addEventListener('submit', handleSubmit);

