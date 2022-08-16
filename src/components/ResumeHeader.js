import React from 'react';
import Heading from './Heading';
import Row from './Row';
import { Typography, Box } from '@mui/material';

const ResumeHeader = () => {
    return (
      <Row>
        <Box sx={{flex: 1}}>
          <Heading>John Doe</Heading>
          <Typography variant="h5">Business Development Manager</Typography>
          <Typography paragraph>Professional business developer with more than four years of experience in the business development processes.
             Involved in produce testing and management, and development of new business opportunities.</Typography>
        </Box>
        <Box sx={{ flex: 1, textAlign:'right'}}>
          <Typography paragraph>johndoe@gmail.com</Typography>
          <Typography paragraph>202-555-0166</Typography>
          <Typography paragraph>New York, USA</Typography>
          <Typography paragraph>linkedin.com/in/john.doe</Typography>
          <Typography paragraph>john.doe</Typography>
        </Box>
      </Row>
    )
}

export default ResumeHeader;