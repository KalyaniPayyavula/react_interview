import React from 'react';
import { Box } from '@mui/material';

const Row = ({sx, children}) => {
    return (
    <Box sx={{display:'flex', flexDirection:'row', ...sx}}>{children}</Box>
    )
}

export default Row;