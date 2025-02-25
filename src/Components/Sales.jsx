import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

export default function Sales({ open, setOpen, category, salesOne, salesTwo, salesThree }) {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                className='sale-dialog'>
                <DialogContent>
                    <Table className='sale-table'>
                        <TableHead>
                            <TableRow>
                                <TableCell className='styles'>День недели</TableCell>
                                <TableCell className='styles'>Отдел: 1</TableCell>
                                <TableCell className='styles'>Отдел: 2</TableCell>
                                <TableCell className='styles'>Отдел: 3</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell className='styles'>{category}</TableCell>
                                <TableCell className='styles'>{salesOne}</TableCell>
                                <TableCell className='styles'>{salesTwo}</TableCell>
                                <TableCell className='styles'>{salesThree}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </DialogContent>
            </Dialog>
        </div>
    );
}