import React from 'react';
import { Typography,Box } from '@mui/material';
import BorderHeading from './BorderHeading';
import Row from './Row';

const LeftColumn = ({sx}) => {
    return (
        <Box sx={{paddingRight: '1%', ...sx}}>
            <Box>
                <BorderHeading>Work Experience</BorderHeading>
                <Typography variant="h6">Business Development Manager</Typography>
                <Typography>AirState Solutions</Typography>
                <Row sx={{justifyContent:'space-between', marginRight:'5%'}}>
                    <Typography variant="caption">09/2014-06/2017</Typography>
                    <Typography variant="caption">New York, USA</Typography>
                </Row>

                <Box>
                    <Typography variant="body2">- Successfully managed $2-3 million budget projects and Successfully achieved the project scheduled goals.</Typography>
                    <Typography variant="body2">- Developed and implemented new marketing and sales plans and defined the strategy for the next 5 years.</Typography>
                    <Typography variant="body2">- Reviewed constantly the customer feedback and then suggested ways to improve the processes and customer service levels
                    which increased the satisfaction rate from 81% to 95%.</Typography>
                    <Typography variant="body2">- Ensure that new clients will grow into a loyal customer base</Typography>
                    <Typography variant="body2">- Ensure that new clients will grow into a loyal customer base in a specialist niche market by implementing a new loyalty program</Typography>  
                </Box>
            </Box>
            <Box sx={{marginTop: '2%'}}>
                <Typography variant="h6">Business Development Assistant</Typography>
                <Typography>AirState Solutions</Typography>
                <Row sx={{justifyContent:'space-between', marginRight:'5%'}}>
                    <Typography variant="caption">08/2012-09/2014</Typography>
                    <Typography variant="caption">Chicago, USA</Typography>
                </Row>
                <Box>
                    <Typography variant="body2">- Increased the customer satisfaction rate by 25% by improving the customer service.</Typography>
                    <Typography variant="body2">- Planned, supervised, and coordinated daily activity of 3 junior business analysts.</Typography>
                    <Typography variant="body2">- Improved the communication with marketing department to better understand the competitive position.</Typography>
                    <Typography variant="body2">- Directed the creation and implementation of a business continuity, and the management of audit programs.</Typography> 
                </Box>
            </Box>
            <Box>
                <BorderHeading>Education</BorderHeading>
                <Typography>Msc in economics and business administration.</Typography>
                <Typography>The University of Chicago</Typography>
                <Typography variant="caption">08/2012-09/2014</Typography>
            </Box>
                
            <Box>
                <BorderHeading>Languages</BorderHeading>
                <Box>
                    <Typography>English</Typography>
                    <Typography>Spanish</Typography>
                    <Typography>French</Typography>
                </Box>
            </Box>
      </Box>
    )
}

export default LeftColumn;