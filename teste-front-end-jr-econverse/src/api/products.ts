import axios from 'axios';

export const fetchProducts = async () => {
    const response = await axios.get('public/api/produtos.json');
    return response.data;
};
