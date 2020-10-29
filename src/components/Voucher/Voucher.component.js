import React, { useState } from 'react';

// material styles
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#273238',
    color: '#E8E8E8',
    textAlign: 'center',
    fontSize: '22px',
  },
  body: {
    fontSize: '22px',
    textAlign: 'center',
    padding: '1rem 0.2rem',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  // root: {
  //   '&:nth-of-type(even)': {
  //     backgroundColor: theme.palette.action.hover,
  //   },
  // },
}))(TableRow);

function createData(Vendor, VoucherCode, ValidFrom, ValidUntil, Value, Redeem) {
  return { Vendor, VoucherCode, ValidFrom, ValidUntil, Value, Redeem };
}

const rows = [
  createData(
    'KFC',
    'RES123124',
    '12/02/2020 (12:00PM)',
    '13/02/2020 (12:00PM)',
    '30% Discount',
    true
  ),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, false),
  createData('Eclair', 262, 16.0, 24, 6.0, false),
  createData('Cupcake', 305, 3.7, 67, 4.3, false),
  createData('Gingerbread', 356, 16.0, 49, 3.9, true),
];

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

const Voucher = () => {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Vendor</StyledTableCell>
              <StyledTableCell align='right'>Voucher Code</StyledTableCell>
              <StyledTableCell align='right'>Valid From</StyledTableCell>
              <StyledTableCell align='right'>Valid Until</StyledTableCell>
              <StyledTableCell align='right'>Value</StyledTableCell>
              <StyledTableCell align='right'>Redeem</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <>
                <StyledTableRow
                  key={row.VoucherCode}
                  style={
                    !!row.Redeem === true
                      ? { backgroundColor: '#ffffff' }
                      : { backgroundColor: '#f5f5f5' }
                  }>
                  <StyledTableCell
                    component='th'
                    scope='row'
                    style={
                      !!row.Redeem === true
                        ? { color: '#292929', fontWeight: 'bold' }
                        : { color: '#C5C5C5', fontWeight: 'bold' }
                    }>
                    {row.Vendor}
                  </StyledTableCell>
                  <StyledTableCell
                    align='right'
                    style={
                      !!row.Redeem === true
                        ? { color: '#292929' }
                        : { color: '#C5C5C5' }
                    }>
                    {row.VoucherCode}
                  </StyledTableCell>
                  <StyledTableCell
                    align='right'
                    style={
                      !!row.Redeem === true
                        ? { color: '#292929' }
                        : { color: '#C5C5C5' }
                    }>
                    {row.ValidFrom}
                  </StyledTableCell>
                  <StyledTableCell
                    align='right'
                    style={
                      !!row.Redeem === true
                        ? { color: '#292929' }
                        : { color: '#C5C5C5' }
                    }>
                    {row.ValidUntil}
                  </StyledTableCell>
                  <StyledTableCell
                    align='right'
                    style={
                      !!row.Redeem === true
                        ? { color: '#292929' }
                        : { color: '#C5C5C5' }
                    }>
                    {row.Value}
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    <Button
                      variant='contained'
                      disableElevation
                      style={
                        !!row.Redeem === true
                          ? {
                              background: '#A62A22',
                              color: '#FFFFFF',
                              textTransform: 'capitalize',
                              fontSize: '22px',
                              padding: '0rem 0.6rem',
                            }
                          : {
                              background: '#C5C5C5',
                              color: '#FFFFFF',
                              textTransform: 'capitalize',
                              fontSize: '22px',
                              padding: '0rem 0.6rem',
                            }
                      }>
                      Redeem
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Voucher;
