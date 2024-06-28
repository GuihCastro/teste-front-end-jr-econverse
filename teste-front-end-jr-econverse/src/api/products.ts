import axios from 'axios';

export const fetchProducts = async () => {
    const response = await axios.get('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
    return response.data;
};
