import TableCell from '@mui/material/TableCell';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import TableRow from '@mui/material/TableRow';
import { MUIDataTableTextLabels } from 'mui-datatables';

const CustomFooter = (props: {
  rowCount: number;
  page: number;
  rowsPerPage: number;
  changeRowsPerPage: (page: string | number) => void;
  changePage: (newPage: number) => void;
  textLabels: Partial<MUIDataTableTextLabels>;
}) => {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0px 24px 0px 24px',
  };

  return (
    <TableFooter>
      <TableRow>
        <TableCell style={footerStyle} colSpan={1000}>
          <TablePagination
            showLastButton
            showFirstButton
            rowsPerPageOptions={[10, 20, 100]}
            count={props.rowCount}
            rowsPerPage={props.rowsPerPage}
            page={props.page}
            SelectProps={{
              inputProps: {
                'aria-label': 'rows per page',
              },
              native: true,
            }}
            onPageChange={(
              event: React.MouseEvent<HTMLButtonElement> | null,
              newPage: number
            ) => props.changePage(newPage)}
            onRowsPerPageChange={(
              event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              props.changeRowsPerPage(event.target.value);
              props.changePage(0);
            }}
            ActionsComponent={TablePaginationActions}
          />
        </TableCell>
      </TableRow>
    </TableFooter>
  );
};

export default CustomFooter;
