import React from 'react'
import { Typography } from '@mui/material';
import PropTypes from 'prop-types'
      
const Heading = ({children}) => {
    return (
        <Typography variant="h3" sx={{color:'red'}}>{children}</Typography>
    )
}   

Heading.propTypes = {
    children: PropTypes.string.isRequired
}

export default Heading;