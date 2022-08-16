import React from 'react'
import { Typography } from '@mui/material';
import PropTypes from 'prop-types'

const BorderHeading = ({children}) => {
    return (
        <>
            <Typography 
                variant="h5" 
                sx={{
                    color:'red', 
                    width: 'fit-content',
                    borderTop:'1px solid grey', 
                    borderBottom: '1px solid grey',
                    margin: '2% 0 2% 0',
                    }}>
                    {children}
            </Typography>
        </>

    )
}

BorderHeading.propTypes = {
    children: PropTypes.string.isRequired
}

export default BorderHeading;