import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TableCon from '../Components/TableCon';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../validation/Validation'
import useApi from '../hook/useApi';
import { useEditMutation, useCreateMutation, useDeleteMutation } from '../hook/useApi'
import Dial from '../Components/Dial'
import Header from './Header.jsx'

const OnePage = () => {

    const [open, setOpen] = useState(false);
    const { data, error, isLoading } = useApi();
    const [editRowId, setEditRowId] = useState();
    const [checked, setChecked] = useState(false);

    const { register, reset, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const edit = useEditMutation()
    const deleted = useDeleteMutation()
    const create = useCreateMutation()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleDelete = (_id) => {
        deleted.mutate(_id);
    };

    const handleEdit = (_id) => {
        setOpen(true);
        setEditRowId(_id._id)
        setChecked(_id.gender);
        const dataForModal = {
            name: _id.name,
            email: _id.email,
            password: _id.password,
            v: _id.__v,
            dateOfBirth: _id.dateOfBirth,
            date: _id.date,
            gender: _id.gender,
            login: _id.login,
        }
        Object.entries(dataForModal).forEach(([name, value]) => setValue(name, value))
    };

    const handleClose = () => {
        setOpen(false);
        setEditRowId();
        reset()
    };


    const onSubmit = (data) => {
        data.password = Number(data.password);
        data.gender = checked;
        data.date = new Date().toLocaleDateString("ru-RU", {
            day: "2-digit", month: "2-digit", year: "numeric"
        });

        if (editRowId) {
            edit.mutate({ ...data, _id: editRowId });
        } else {
            create.mutate(data);
        }
        reset();
        handleClose();
        console.log(data)

    };

    if (isLoading) return <div>Loading1...</div>;
    if (error) return <div>Error: {error.message}</div>;
    const errorStyle = (error) => ({
        border: error ? '2px solid red' : 'none',
        fontSize: '50px'
    })

    return (
        <div>
            <Header />
            <Dial open={open} handleClose={handleClose} handleSubmit={handleSubmit} onSubmit={onSubmit}
                register={register} errors={errors} reset={reset} checked={checked} setChecked={setChecked}
                editRowId={editRowId} errorStyle={errorStyle} />
            <TableCon data={data} handleDelete={handleDelete} handleClickOpen={handleClickOpen} handleEdit={handleEdit} />
        </div>
    );
};

export default OnePage;