import axios from "axios";

const baseUrl = 'https://equran.id/api/v2/';

export const fetchData = async () => {
    try {
        const response = await axios.get('https://equran.id/api/v2/surat');
        return response.data.data;
    } catch (error) {
        console.error('Error fetching data from API:', error);
        throw error;
    }
}