import React from 'react';
import { IconButton, Chip } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled, alpha } from '@mui/material/styles';
import TipImage from '../images/tip.png';

const DailytipTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#fae28a',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 240,
        fontSize: theme.typography.pxToRem(16),
        border: '1px solid #513c25',
    },
}));

function TipComp({tip}) {
  return (
    <DailytipTooltip title={
        <React.Fragment>
            <Chip label={"Now you know: "} size="small" sx={{ fontWeight: '600', backgroundColor: '#d5722e', marginRight: '4px' }} />
            <b>{tip?.tip || "No new tips"} </b>
        </React.Fragment>
    }>
        <IconButton
            size="large"
            edge="end"
            color="inherit"
        >
            <img src={TipImage} alt='Tip' height={'26px'} width={'26px'} />
        </IconButton>
    </DailytipTooltip>
  )
}

export default TipComp;