import React from 'react';
import ReactEcharts from 'echarts-for-react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';


//styles
import './generalComponent.scss'


const GeneralComponent = () => {


    const option = {
        title: {
            // title of our chart

        },
        legend:
    {
        show: true,
        top: 'bottom',
        data: ['Asignado', 'Sobrecarga', 'Capacidad libre']
    }

        ,
        xAxis: {
            // name of X Axis
            name: 'Dias: enero',
            type: 'category',
            label: {
                show: true
            },
            // Contains the values for XAxis
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        },
        category: [1, 4, 8]
        ,
        yAxis: [
            {
                // name of Y Axis
                name: 'horas',
                type: 'value'

            }
        ],
        //To enable tooltips

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'light'
            }
        },
        // To enable toolbox
        toolbox: {
            /*  feature: {
// displays a options to direct save chart as a image
saveAsImage: {}
}*/
        },

        series: [
            {
                name: 'Asignado',
                data: [2, 1, 2],
                type: 'bar',
                stack: 'total'
            },
            {
                name: 'Sobrecarga',
                data: [0, 0],
                itemStyle: {
                    color: '#EB3B46',
                },
                type: 'bar',
                stack: 'total'
            },
            {
                name: 'Capacidad libre',
                data: [0, 0],
                itemStyle: {
                    color: '#0BA248',
                },
                type: 'bar',
                stack: 'total'
            },
            {
                name: 'Precipitation',
                data: [6, 7, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,],
                itemStyle: {
                    color: '#F7C544',
                },
                type: 'bar',
                stack: 'total'
            }
        ]
    };


    return (
        <Grid container >


            <Grid item xs={12}>
                <Accordion    >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="string" >General</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <div className='container_chartG'>
                            <ReactEcharts option={option} className='chartG' />
                        </div>
                    </AccordionDetails>
                </Accordion>
            </Grid>

        </Grid>
    )
}
export default GeneralComponent;
