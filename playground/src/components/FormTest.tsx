import { Button, FormControlLabel, FormLabel } from '@mui/material';
import { DateBox } from 'devextreme-react';
import moment from 'moment';
import { Moment } from 'moment';
import { Controller, useForm } from 'react-hook-form';

interface FormModel {
  startDate: string; // type may have to be string to avoid circular reference errors
}

const startingModel: FormModel = { startDate: moment().toString() };

const FormTest = () => {
  const formMethods = useForm<FormModel>({ defaultValues: startingModel });

  const onSubmit = (data: FormModel) => alert(JSON.stringify(data));

  return (
    <form onSubmit={formMethods.handleSubmit(onSubmit)}>
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

      <Button type='submit'>Submit</Button>
    </form>
  );
};

export default FormTest;
