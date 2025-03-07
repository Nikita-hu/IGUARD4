import { useQuery } from 'react-query';
import axios from 'axios';

const useApiAuthed = () => {
    const link = 'https://backend.s3grdn.ru/api/test';

    const fetchGet = async () => {
        const res = await axios.get(link);
        return res.data;
    };

    const { data, error, isLoading, refetch } = useQuery(['authed'], fetchGet, { refetchOnWindowFocus: false });
    return { data, error, isLoading, refetch }
};

export default useApiAuthed;


