import axios from 'axios';
const API_URL = process.env.REACT_APP_SERVER;
axios.defaults.baseURL = API_URL;

// all api must be listed here
// https://prabinkarki.pythonanywhere.com/api/v1/

// getting categories
const getCategories = () => axios.get(`/category`);
const getAllCoupons = () => axios.get(`/allcoupons`);

//getting banner
const getBanner = () => axios.get(`/banner`);

//getting partner's list
const getPartner = () => axios.get(`./partner`);

//getting Trending Card
const getTrendingCard = () => axios.get(`./coupon`);

export {getCategories, getBanner, getPartner, getTrendingCard};

export {axios};
