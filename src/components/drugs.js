import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { Input } from 'antd';
import { Radio } from 'antd';
import { Table, Tag, Space } from 'antd';
import { Card, Col, Row } from 'antd';
import Chart from "react-google-charts";
import data from '../data/numDrugCompany.json'

const { TabPane } = Tabs;
const { Search } = Input;

function callback(key) {
  console.log(key);
}

const Drugs = () => {
    const arrData = []
    arrData.push(['Company', 'Rate'],)
    // Object.keys(data).forEach(key => arrData.push([key, data[key]]))
    data.map((d)=>{
        // console.log(d)
        arrData.push([d['manufacturer'],d['rate']])
    })

    const arrData2 = []
    arrData2.push(['Company', 'Rate'],)
    // Object.keys(data).forEach(key => arrData.push([key, data[key]]))
    data.map((d)=>{
        // console.log(d)
        arrData2.push([d['manufacturer'],d['numOfDrugs']])
    })
    
    console.log(arrData)
    return(
        <div style={{ padding: '10px', paddingLeft: '20px'}}>
            <Chart
                width={'1000px'}
                height={'1000px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={arrData}
                options={{
                    hAxis: { minValue: 0, maxValue: 10 },
                    chartArea: { top: 0, right: 0, bottom: 0 },
                    vAxis: {
                        title: 'manufacturer',
                      },
                }}
                rootProps={{ 'data-testid': '4' }}
                chartPackages={['corechart', 'controls']}
                render={({ renderControl, renderChart }) => {
                    return (
                    <div style={{ top:'100px', display: 'flex' }}>
                        <div style={{ height: '10%' }}>{renderControl(() => true)}</div>
                        <div style={{ height: '90%' }}>{renderChart()}</div>
                    </div>
                    )
                }}
                
                controls={[
                    {
                    controlType: 'NumberRangeFilter',
                    options: {
                        filterColumnIndex: 1,
                        minValue: 0,
                        maxValue: 10,
                    },
                    },
                ]}
                rootProps={{ 'data-testid': '1' }}
                />
            <Chart
            chartType="PieChart"
            width={'1000px'}
            height={'1000px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={arrData2}
            // spreadSheetUrl="https://docs.google.com/spreadsheets/d/1sd8DslOz8V0Do7D0UhajYmY8OwpQHKzwh2gbdIMnvvQ/edit#gid=1330700052"
            options={{
                title: 'Number of Medicines in Companies',
                is3D: true,
            }}
            rootProps={{ 'data-testid': '1' }}
            />
        </div>
        
    );
}

export default Drugs;