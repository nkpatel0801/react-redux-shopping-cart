import axios from "axios";
import { API_ROOT, PRODUCTS } from './../constants/api';

export const getProductsData = () => {
    return axios.get(`${API_ROOT}${PRODUCTS}`);
}
