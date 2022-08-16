import React from 'react';
import { Typography, Box } from '@mui/material';

const SkillText = ({name}) => {
    return (
       <Box sx={{borderRadius:'5px', backgroundColor:'red', width: 'fit-content', margin:'10px', padding: '5px'}}>
           <Typography variant="button" sx={{color:'white'}}>{name}</Typography>
       </Box>
    )
}

export default SkillText;
