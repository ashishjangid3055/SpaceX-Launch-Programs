import axios from 'axios';

const commonUrl = axios.create({
	baseURL: 'https:api.spaceXdata.com/v3/'
})
export default commonUrl