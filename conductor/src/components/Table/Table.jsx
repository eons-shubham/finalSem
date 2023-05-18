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
          img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Sumit",
          date: "1 March",
          amount: 785,
        },
        {
          id: 2235235,
          Driver: "Dubey ji",
          img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Abhay",
          date: "1 March",
          amount: 900,
        },
        {
          id: 2342353,
          Driver: "Joshi ji",
          img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Kanak ",
          date: "1 March",
          amount: 315,
        },
        {
          id: 2357741,
          Driver: "Tiwari ji",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Arpit",
          date: "1 March",
          amount: 920,
        },
        {
          id: 2342355,
          Driver: "Bisht ji",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Aaron",
          date: "1 March",
          amount: 2000,
        },
      ];
  return ( <TableContainer component={Paper} className="table">
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
      <TableCell className="tableCell">First Name</TableCell>
            <TableCell className="tableCell">Last Name</TableCell>
            <TableCell className="tableCell">Contact No.</TableCell>
            <TableCell className="tableCell">Licence No.</TableCell>
            <TableCell className="tableCell">Request</TableCell>
            
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
          <TableCell className="tableCell">{row.date}</TableCell>
          <TableCell className="tableCell">{row.amount}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
  )
}

export default List