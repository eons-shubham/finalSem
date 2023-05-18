import React from 'react'
import './table.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const List = () => {
    const rows = [
        {
          id: 1143155,
          Driver: "Manish ji",
        },
        {
          id: 2235235,
          Driver: "Dubey ji",
        },
        {
          id: 2342353,
          Driver: "Joshi ji",
        },
        {
          id: 2357741,
          Driver: "Tiwari ji",
        },
        {
          id: 2342355,
          Driver: "Bisht ji",
        },
      ];
  return ( <TableContainer component={Paper} className="table">
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
      <TableCell className="tableCell">Location</TableCell>
      <TableCell className="tableCell">Price</TableCell>
            
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.id}
        >
          <TableCell component="th" scope="row">
            {row.id}
          </TableCell>
          <TableCell className="tableCell">{row.Driver}</TableCell>
          <TableCell className="tableCell">{row.customer}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
  )
}

export default List