import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MUIDataTable, {
  MUIDataTableColumnDef,
  MUIDataTableOptions,
} from 'mui-datatables';

const TableTest = () => {
  const columns: MUIDataTableColumnDef[] = ['Name', 'Company', 'City', 'State'];

  const data = [
    ['Joe James', 'Test Corp', 'Yonkers', 'NY'],
    ['John Walsh', 'Test Corp', 'Hartford', 'CT'],
    ['Bob Herm', 'Test Corp', 'Tampa', 'FL'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['Joe James', 'Test Corp', 'Yonkers', 'NY'],
    ['John Walsh', 'Test Corp', 'Hartford', 'CT'],
    ['Bob Herm', 'Test Corp', 'Tampa', 'FL'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['Joe James', 'Test Corp', 'Yonkers', 'NY'],
    ['John Walsh', 'Test Corp', 'Hartford', 'CT'],
    ['Bob Herm', 'Test Corp', 'Tampa', 'FL'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
  ];

  const options: MUIDataTableOptions = {
    filterType: 'checkbox',
  };

  return (
    <Grid container direction='row'>
      <Grid item xs={3} />
      <Grid item xs>
        <MUIDataTable
          title={'Employee List'}
          data={data}
          columns={columns}
          options={options}
        ></MUIDataTable>
      </Grid>
      <Grid item xs={3} />
    </Grid>
  );
};

export default TableTest;
