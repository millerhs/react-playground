import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import MUIDataTable, {
  MUIDataTableColumnDef,
  MUIDataTableOptions,
  MUIDataTableTextLabels,
} from 'mui-datatables';
import React from 'react';
import { useRef } from 'react';
import CustomFooter from './table/CustomFooter';

const TableTest = () => {
  const columns: MUIDataTableColumnDef[] = ['Name', 'Company', 'City', 'State'];
  const paperRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = React.useState('500px');
  const [expanded, setExpanded] = React.useState(true);
  const [toggleTable, setToggleTable] = React.useState(true);

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
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
    ['James Houston', 'Test Corp', 'Dallas', 'TX'],
  ];

  React.useEffect(() => {
    if (paperRef?.current?.offsetHeight) {
      setMaxHeight(`${paperRef.current.offsetHeight - 150}px`);
    }
  }, []);

  const options: MUIDataTableOptions = {
    filterType: 'checkbox',
    tableBodyHeight: maxHeight,
    customFooter: (
      rowCount: number,
      page: number,
      rowsPerPage: number,
      changeRowsPerPage: (page: string | number) => void,
      changePage: (newPage: number) => void,
      textLabels: Partial<MUIDataTableTextLabels>
    ) => {
      return (
        <CustomFooter
          rowCount={rowCount}
          page={page}
          rowsPerPage={rowsPerPage}
          changeRowsPerPage={changeRowsPerPage}
          changePage={changePage}
          textLabels={textLabels}
        />
      );
    },
  };

  return (
    <Grid container direction='row' sx={{ height: '90%' }}>
      {expanded && (
        <Grid container item direction='column' width='200px' spacing={2}>
          <Grid item>
            <Button
              fullWidth
              variant='outlined'
              onClick={() => setToggleTable(true)}
            >
              Table 1
            </Button>
          </Grid>
          <Grid item>
            <Button
              fullWidth
              variant='outlined'
              onClick={() => setToggleTable(false)}
            >
              Table 2
            </Button>
          </Grid>
        </Grid>
      )}
      <Grid
        container
        item
        xs
        sx={{
          height: '100%',
          backgroundColor: 'green',
          padding: '1rem',
        }}
      >
        <Grid ref={paperRef} item sx={{ height: '100%', width: '100%' }}>
          {toggleTable && (
            <MUIDataTable
              title={'Table 1'}
              data={data}
              columns={columns}
              options={options}
            />
          )}
          {!toggleTable && (
            <MUIDataTable
              title={'Table 2'}
              data={data}
              columns={columns}
              options={options}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TableTest;
