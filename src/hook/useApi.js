import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from 'react-query';

const link = 'https://backend.s3grdn.ru/api/test';

const fetchGet = async () => {
    const res = await axios.get(link);
    return res.data;
};

const useGet = () => {
    return useQuery('product', fetchGet, { refetchOnWindowFocus: false });
};

export const useEdit = async (data) => {
    return await axios.post(link, data);
};

export const useCreate = async (data) => {
    return await axios.post(link, data);
};

export const useDelete = async (id) => {
    return await axios.delete(link, { data: { id } });
};

export const useEditMutation = () => {
    const queryClient = useQueryClient();
    return useMutation((editProduct) => useEdit(editProduct), {
        onSuccess: () => {
            queryClient.invalidateQueries('product');
        },
    });
};

export const useCreateMutation = () => {
    const queryClient = useQueryClient();
    return useMutation((newProduct) => useCreate(newProduct), {
        onSuccess: () => {
            queryClient.invalidateQueries('product');
        },
    });
};

export const useDeleteMutation = () => {
    const queryClient = useQueryClient();
    return useMutation((id) => useDelete(id), {
        onSuccess: () => {
            queryClient.invalidateQueries('product');
        },
    });
};

export default useGet;