// https://devexpress.github.io/devextreme-reactive/react/chart/docs/guides/animation/
import Paper from '@material-ui/core/Paper';
import {Title,ArgumentAxis,ValueAxis,BarSeries,Legend} from '@devexpress/dx-react-chart-material-ui';
import { useState } from "react";
import { ValueScale} from '@devexpress/dx-react-chart';
import 'primeflex/primeflex.css';
import { useForm } from "react-hook-form";
import {InputText} from "primereact/inputtext";
import {useEffect} from 'react';
import { AccountAssociationApi } from '../../api/accountAssociationApi';
import { Chart } from 'primereact/chart';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

function UserSatistics(){

    const chartData = {
        labels: ['regular', 'premium', 'premium +'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#42A5F5",
                    "#66BB6A",
                    "#FFA726"
                ],
                hoverBackgroundColor: [
                    "#64B5F6",
                    "#81C784",
                    "#FFB74D"
                ]
            }
        ]
    };
    const lightOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    };

    // Sample data for graphics
    const dataPieseries = {
        2022:[
            { argument:'regular', value:10 },
            { argument:'Premium', value:20 },
            { argument:'Premiun+', value:10},
        ],
        2021:[
            { argument:'Regular', value:7 },
            { argument:'Premium', value:2 },
            { argument:'Premiun+', value:5},
        ],
        2020:[
            { argument:'Regular', value:0 },
            { argument:'Premium', value:0 },
            { argument:'Premiun+', value:0},
        ],
    };

    const dataBarseries = {
        2022: [
            { month: 'Jan', value: 50 },
            { month: 'Feb', value: 100 },
            { month: 'Mar', value: 30, },
            { month: 'Apr', value: 107},
            { month: 'May', value: 95 },
            { month: 'Jun', value: 15 },
            { month: 'Jul', value: 20},
            { month: 'Aug', value: 110},
            { month: 'Sep', value: 54, },
            { month: 'Oct', value: 129 },
            { month: 'Nov', value: 48 },
            { month: 'Dec', value: 43 },
        ],
        2021: [
            { month: 'Jan', value: 100 },
            { month: 'Feb', value: 200 },
            { month: 'Mar', value: 50 },
            { month: 'Apr', value: 127 },
            { month: 'May', value: 105 },
            { month: 'Jun', value: 180 },
            { month: 'Jul', value: 150 },
            { month: 'Aug', value: 120 },
            { month: 'Sep', value: 59 },
            { month: 'Oct', value: 139 },
            { month: 'Nov', value: 66 },
            { month: 'Dec', value: 55 },
        ],
        "none": [
            { month: 'Jan', value: 0},
            { month: 'Feb', value: 0 },
            { month: 'Mar', value: 0 },
            { month: 'Apr', value: 0 },
            { month: 'May', value: 0 },
            { month: 'Jun', value: 0 },
            { month: 'Jul', value: 0 },
            { month: 'Aug', value: 0 },
            { month: 'Sep', value: 0 },
            { month: 'Oct', value: 0 },
            { month: 'Nov', value: 0 },
            { month: 'Dec', value: 0 },
        ],
        
    };



    const [date, setDate]=useState(new Date().getFullYear());
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const [piedata,setPiedata] = useState({});
    const [pie,setPie] = useState();

    useEffect(()=>{
        fetchPieseries();
        fetchBarseries();
    },[]);

    //this methode get data regarding Bieserie graph
    async function fetchPieseries(){
        const id=1 
        const resp = await AccountAssociationApi.getPieSeries(id);
        setPie(resp.allDate);
        console.log("pieseries",resp);
    };

    //this methode get data regarding Barserie graph
    async function fetchBarseries(){
        const id=1 
        const resp = await AccountAssociationApi.getBarSeries(id);
        // console.log("barseries",resp)
    };
    
    if (pie){

        const testDD=()=>{
            let chartD = {
                labels: [pie[0].title],
                datasets: [
                    {
                        data: [pie[0]],
                        backgroundColor: [
                            "#42A5F5",
                            "#66BB6A",
                            "#FFA726"
                        ],
                        hoverBackgroundColor: [
                            "#64B5F6",
                            "#81C784",
                            "#FFB74D"
                        ]
                    } 
                ]
            };
          
        }
    }
    if(pie){
        //setPiedata(chartD)
        
        const label = [];
        const date = [];
        const data = [];
        for (let i=0; i<pie.length; i++){
            label.push(pie[i].title);
            data.push(pie[i].total);
            date.push(pie[i].date);
            // console.log(drowData(pie.allDate[i].date))
            // setPiedata(chartData);
            // console.log(chartData); 


        }
        console.log(label,data,date)
        // console.log(pie.allDate.length);
        // console.log(pie.allDate.map((item)=>item));
    }
   
    const onSubmit = (data) => {
        setDate(data.date);
    };
    const ErrorMessage = ({message})=>(<h5 className='errors-text-color'>{message}</h5>) ;
    const onError = (errors, e) => console.log(errors, e);
    
    const inputDate = (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <label>
            <b>Date :</b>
                <InputText type="number" {...register("date",{required:"Saisir une année", maxLength:{value:4, message:"Saisir une année correct"},minLength:{value:4,message:"Saisir une année correct"}})} style={{ width: '100px', margin: '10px' }}/>
                {errors?.date && <ErrorMessage message={errors.date.message}/>}  
                <input type="submit" value="Valider" />
            </label>
                
        </form>
    ); 

    return <div>
        <Card title='Statistiques génerales ' style={{ height: '100%', width:'100%'}}>
            <div className="p-grid">
                <div className="p-col">
                    <Card  subTitle={"Nombre d'adhérent par service "+2022} style={{ height: '100%' }}>
                        <div className="card flex justify-content-center">
                        <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '100%' }} />
                        </div>
                    </Card>
                </div>

                <div className="p-col">
                    <Card subTitle={"Nombre d'adhérent en "+2022} style={{ height: '100%' }}>
                        {/* <div className="card flex justify-content-center">
                        <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '100%' }} />
                        </div> */}
                    
                    {/* <Paper>
                        <Chart data={dataBarseries[date]}>
                        <ValueScale name="value" />
                        <ArgumentAxis />
                        <ValueAxis scaleName="value" showGrid={false} showLine showTicks />
                        <BarSeries name={"nb adhérent en "+ date} valueField="value" argumentField="month" scaleName="value"/>
                        <Title text="Nombre d'adhérents par mois"/>
                        <Legend />
                        </Chart>
                    </Paper> */}

                    </Card>
                </div>
            </div>

            {inputDate}
        </Card>
        
    </div>
}

export default UserSatistics;


