import { makeStyles } from '@material-ui/core';
import { Box, Typography } from '@mui/material';
import React from 'react';

const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(2, 0),
      textAlign: 'center',
   },
   title: {
      '&&': {
         display: 'inline-block',
         letterSpacing: '2px',
         textTransform: 'uppercase',
         position: 'relative',
         color: theme.palette.primary.main,
      },
      '&:after,&:before': {
         content: '""',
         position: 'absolute',
         top: '50%',
         transform: 'translateY(-50%)',
         width: 100,
         height: 3,
         backgroundColor: 'currentColor',
      },
      '&:after': {
         left: '100%',
         marginRight: '30px',
      },
      '&:before': {
         right: '100%',
         marginLeft: '30px',
      },
   },
}));

const TitleSection = ({ title, subTitle }) => {
   const classes = useStyles();
   return (
      <Box className={classes.root}>
         <Typography variant='h4' className={classes.title} fontWeight={600}>
            {title}
         </Typography>
         <Typography>{subTitle}</Typography>
      </Box>
   );
};

export default TitleSection;