import React from 'react';
import { Typography } from '@mui/material';

const GrayText = ({children}) => {
    return (
        <Typography paragraph variant="caption" sx={{color:'gray'}}>{children}</Typography>
    )
}

export default GrayText;