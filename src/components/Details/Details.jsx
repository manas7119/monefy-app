import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import { ArcElement } from 'chart.js';
import Chart from 'chart.js/auto'


import useStyles from './styles';
import useTransactions from '../../useTransactions';

const Details = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card style={{ borderRadius: '16px' }} className={classes.card} className={title === 'Income' ? classes.income : classes.expense}>
  
    
     <CardHeader title={title} subheader={subheader} style={{textAlign: "center"}} />
      <CardContent >
        <Typography variant="h5">${total}</Typography>
       {/* <Doughnut data ={chartData} /> */}

      <div 
      style={{width: '80%', height: '80%', paddingLeft: '10%', paddingTop: '1%'}} 
      >
      <Doughnut
        data ={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
      />
     </div>

      </CardContent>
    </Card>
  );
};

export default Details;
