import   { useContext } from 'react';
import Button from '@mui/material/Button';
import { useModal } from '../hook/useModal';
import AppWidgetSummary from './AppWidgetSummary'

import CrudContext from "../context/CrudContext";
import ReactEcharts from 'echarts-for-react';
import './Modal.css'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';






const Resumen2 = ()=>{
    let { db } = useContext(CrudContext);
    let data = db.filter((el) => el.pago == 'confirmado' &  el.confirmacion == 'realizada')
    let newData = data.filter((el) => el.pago )
    let newData2 = data.filter((el) => el.confirmacion )
    let newData3 = data.filter((el) => el.curso === "Maternal" )
    let newData4 = data.filter((el) => el.curso === "Kinder" )
    let newData5 = data.filter((el) => el.curso === "Pre-Primario" )
    let matutina = data.filter((el) => el.tanda === "matutina" )
    let matuMaternal = data.filter((el) => el.tanda === "matutina" & el.curso === "Maternal" )
    let matuKinder = data.filter((el) => el.tanda === "matutina" & el.curso === "Kinder" )
    let matuPre = data.filter((el) => el.tanda === "matutina" & el.curso === "Pre-Primario" )
    let vespertina = data.filter((el) => el.tanda === "vespertina" )
    let vesMaternal = data.filter((el) => el.tanda === "vespertina" & el.curso === "Maternal" )
    let vesKinder = data.filter((el) => el.tanda === "vespertina" & el.curso === "Kinder" )
    let vesPre = data.filter((el) => el.tanda === "vespertina" & el.curso === "Pre-Primario" )

    const option = {
      title: {
          // title of our chart

      },
      legend:
  {
      show: true,
      top: 'bottom',
      data: ['Pagados', 'Confirmados', 'Maternal','Kinder','Pre-Primario']
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
          data: [1, 2, 3, 4, 5, ]
      },
      category: [1, 4, 8]
      ,
      yAxis: [
          {
              // name of Y Axis
              name: 'Solicitudes',
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
              name: 'Pagados',
              data: [newData.length, 0, 0,0,0,0],
              type: 'bar',
              stack: 'total'
          },
          {
              name: 'Confirmados',
              data: [0, newData2.length,0,0,0],
              itemStyle: {
                  color: '#EB3B46',
              },
              type: 'bar',
              stack: 'total'
          },
          {
              name: 'Maternal',
              data: [0, 0,newData3.length,0,0],
              itemStyle: {
                  color: '#0BA248',
              },
              type: 'bar',
              stack: 'total'
          },
          {
            name: 'Kinder',
            data: [0, 0, 0,newData4.length,0,0],
            itemStyle: {
                color: '#00ffff',
            },
            type: 'bar',
            stack: 'total'
        },
        {
          name: 'Pre-Primario',
          data: [0, 0,0,0,newData5.length],
          itemStyle: {
              color: '#ffff00',
          },
          type: 'bar',
          stack: 'total'
      },
          {
              name: 'Precipitation',
              data: [(data.length - newData.length) , (data.length - newData2.length), (data.length - newData3.length), (data.length - newData4.length), (data.length - newData5.length), ],
              itemStyle: {
                  color: '#F7C544',
              },
              type: 'bar',
              stack: 'total'
          }
      ]
  };
  
  const option2 = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: 'bottom',
      left: 'center'
    },
    series: [
      {
        name: 'Tanda',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: matuMaternal.length, name: 'Maternal ' },
          { value: matuKinder.length, name: 'Kinder' },
          { value: matuPre.length , name: 'Pre-Primario' },
        
        ]
      }
    ]
  };
  const option3 = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: 'bottom',
      left: 'center'
    },
    series: [
      {
        name: 'Tanda',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: vesMaternal.length, name: 'Maternal ' },
  { value: vesKinder.length, name: 'Kinder' },
  { value: vesPre.length , name: 'Pre-Primario' },
        
        ]
      }
    ]
  };
  
  
    


    const handelPrint = ()=>{window.print()};

    const[isOpenModal,openModal,closeModal] = useModal(false);
    return(<div><Button onClick={openModal}>Resumen</Button><div onClick={closeModal}><div className={`modal ${isOpenModal && "is-open"}`}><div className='modal-container'> <h1 className='h1'>Compass Point</h1>  <div onClick={handelPrint}><PictureAsPdfIcon color="primary"/> </div><hr></hr><div className='info'>
        

        
        <div className='container_chartG'>
                            <ReactEcharts option={option} className='chartG' />
                        </div>
                        <div className='container_chartG'>
                          <div className='chards'>
                        <div>
                        <div className="divb3">
                          Tanda matutina {matutina.length } </div>
                        <ReactEcharts option={option2} className='chartG2' />
                        </div>
                        <div>
                          <div className="divb3">Tanda vespertina {vespertina.length}</div>
                        
                        <ReactEcharts option={option3} className='chartG2' />
                        </div>
                        </div> 
                        </div>
          
          
          
   

          
          
    
        </div></div></div></div></div>);
}


export default Resumen2;