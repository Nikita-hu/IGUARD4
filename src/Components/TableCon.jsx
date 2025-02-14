import React, { useState } from 'react';
import {
  Table, TableHead, TableRow, TableCell, TableBody, Box, IconButton, Tooltip
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { VisibilityOff } from '@mui/icons-material';
const TableCon = ({ data, handleDelete, handleClickOpen, handleEdit }) => {
  const [hoveredRowId, setHoveredRowId] = useState(null);

  const [visiblePasswords, setVisiblePasswords] = useState({})

  const togglePasswordVisibility = (id) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  overflowX: 'auto' }}>
        <Tooltip title='Добавить'>
          <IconButton className='add' onClick={handleClickOpen} ><AddIcon /></IconButton>
        </Tooltip>
        <h1 style={{ fontSize: '20px' }}>Пользователи</h1>
        <Table className='table'>
          <TableHead>
            <TableRow>
              <TableCell className='styles'>№</TableCell>
              <TableCell className='styles'>Имя</TableCell>
              <TableCell className='styles'>Email</TableCell>
              <TableCell className='styles'>Логин</TableCell>
              <TableCell className='styles'>Пароль</TableCell>
              <TableCell className='styles'>Дата рождения</TableCell>
              <TableCell className='styles'>M / Ж</TableCell>
              <TableCell className='styles'>Дата</TableCell>
              <TableCell className='styles'>Удалить / Изменить</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((g, index) => (
              <TableRow key={g._id}
                onMouseEnter={() => setHoveredRowId(g._id)}
                onMouseLeave={() => setHoveredRowId(null)}
              >
                <TableCell className='styles'>{index + 1}</TableCell>
                <TableCell className='styles'>{g.name}</TableCell>
                <TableCell className='styles'>{g.email}</TableCell>
                <TableCell className='styles'>{g.login}</TableCell>
                <TableCell className='password'>
                  <IconButton onClick={() => togglePasswordVisibility(g._id)}>
                    {visiblePasswords[g._id] ? g.password : <VisibilityOff />}
                  </IconButton>
                </TableCell>
                <TableCell className='styles'>{g.dateOfBirth}</TableCell>
                <TableCell style={{ backgroundColor: g.gender ? 'blue' : 'pink', color: 'white', fontSize: '13px' }}>{g.gender ? 'true' : 'false'}</TableCell>
                <TableCell className='styles'>{g.date}</TableCell>
                <TableCell sx={{ position: 'relative' }}>
                  <Tooltip title='Удалить'>
                    <IconButton sx={{ visibility: hoveredRowId === g._id ? 'visible' : 'hidden' }} onClick={() => handleDelete(g._id)}> <DeleteIcon className='snap' /></IconButton>
                  </Tooltip>
                  <Tooltip title='Редактировать'>
                    <IconButton sx={{ visibility: hoveredRowId === g._id ? 'visible' : 'hidden' }} onClick={() => handleEdit(g)}><EditIcon className='snap' /></IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </div>
  );
};
export default TableCon;