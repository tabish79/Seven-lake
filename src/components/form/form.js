import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

function Form() {
  return (
    <form>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <TextField label="Enter Text" variant="outlined" />
        </Grid>
        <Grid item>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Form;
