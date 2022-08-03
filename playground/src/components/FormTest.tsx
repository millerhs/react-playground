import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {
  Button,
  FormControlLabel,
  FormLabel,
  Grid,
  TextField,
} from '@mui/material';
import { DateBox } from 'devextreme-react';
import moment from 'moment';
import { Moment } from 'moment';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

interface FormModel {
  startDate: string; // type may have to be string to avoid circular reference errors
}

const startingModel: FormModel = { startDate: moment().toString() };

const FormTest = () => {
  const formMethods = useForm<FormModel>({ defaultValues: startingModel });
  const [muiTime, setMuiTime] = React.useState<Date | null>(new Date());

  const onSubmit = (data: FormModel) => alert(JSON.stringify(data));

  return (
    <form onSubmit={formMethods.handleSubmit(onSubmit)}>
      <Grid container direction='column' spacing={2}>
        <Grid item>
          <Controller
            name='startDate'
            control={formMethods.control}
            render={({ field }) => {
              return (
                <DateBox
                  min={moment().toString()}
                  type='datetime'
                  width={'300px'}
                  value={field.value}
                  onValueChanged={(e) => {
                    field.onChange(e.value);
                  }}
                />
              );
            }}
          />
        </Grid>
        <Grid item>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label='DateTimePicker'
              value={muiTime}
              onChange={(newValue) => {
                setMuiTime(newValue);
              }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item>
          <Button type='submit'>Submit</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormTest;
