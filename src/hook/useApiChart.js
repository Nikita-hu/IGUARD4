import { useQuery } from 'react-query';
import axios from 'axios';

const useApiChart = (year) => {
    const link = `https://backend.s3grdn.ru/api/test/barchart/${year}`;

    const fetchGet = async () => {
        const res = await axios.get(link);
        return res.data;
    };

    return useQuery(['charts', year], fetchGet, { refetchOnWindowFocus: false });
};

export default useApiChart;
