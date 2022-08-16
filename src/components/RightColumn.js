import React from 'react';
import { Typography,Box } from '@mui/material';
import BorderHeading from './BorderHeading';
import GrayText from './GrayText';
import SkillText from './SkillText';

const RightColumn = ({sx}) => {
    return (
        <Box sx={{paddingLeft: '1%',...sx}}>
            <Box>
                <BorderHeading>Skills</BorderHeading>
                <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                    <SkillText name="SEO" />
                    <SkillText name="Public Speaking" />
                    <SkillText name="Negotiation" />
                    <SkillText name="Teamwork" />
                    <SkillText name="Decision Making" />
                    <SkillText name="Research & Strategy" />
                    <SkillText name="Emotional Intelligence" />
                    <SkillText name="Outbound Marketing" />
                    <SkillText name="Email Marketing" />
                    <SkillText name="Google Analytics" />
                    <SkillText name="Sales & Marketing" />
                    <SkillText name="Social Media Advertising" />
                </Box>
            </Box>

            <Box>
                <BorderHeading>Organization</BorderHeading>
                <Box>
                    <Typography>American Management Association(2015 - Present)</Typography>
                    <Typography>Association of Private Enterprise Education(2014 - Present)</Typography>
                    <Typography>eBusiness Association (eBA)(2013 - present)</Typography>
                </Box>
            </Box>

            <Box>
                <BorderHeading>Honours And Awards</BorderHeading>
                <Box>
                    <Typography>Jury Member, Venture Cup Enterpreneurship Competition(2016)</Typography>
                    <GrayText>Venture Cup, USA</GrayText>
                    <Typography>Sales Individual & Business Development Award(2015)</Typography>
                    <GrayText>Airstate Business Awards</GrayText>
                    <Typography>Excellence in CUstoner Partnering Award(2015)</Typography>
                    <GrayText>IEE-Institute of Excellence In Sales</GrayText>
                </Box>
            </Box>

            <Box>
                <BorderHeading>Conferences & Courses</BorderHeading>
                <Box>
                    <Typography>Leading People and Teams - Specialization.</Typography>
                    <GrayText>Online Course on Coursera.org</GrayText>
                    <Typography>eMetrics Summit(09/2016)</Typography>
                    <GrayText>Raising Media, inc. and eMetrics summit</GrayText>
                    <Typography>Project Management Principles and Practices(01/2015-09/2015)</Typography>
                    <GrayText>Online course on Coursera.org</GrayText>
                </Box>
            </Box>
      </Box>
    )
}

export default RightColumn;