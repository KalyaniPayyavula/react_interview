import React from 'react';
import ResumeHeader from './components/ResumeHeader';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';
import { Box } from '@mui/material';
import Row from './components/Row';


function App() {
  return (
    <Box sx={{padding: '2%'}}>
      <ResumeHeader/>
      <Row>
        <LeftColumn sx={{flex:1}}/>
        <RightColumn sx={{flex:1}}/>
      </Row>
    </Box>
  );
}
export default App;
