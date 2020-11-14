import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { Input } from 'antd';
import { Radio } from 'antd';
import { Table, Tag, Space } from 'antd';
import { Card, Col, Row } from 'antd';
import Chart from "react-google-charts";
import data from '../data/drugsChart.json'

const { TabPane } = Tabs;
const { Search } = Input;

function callback(key) {
  console.log(key);
}

const Drugs = () => {
    const arrData2 = []
    arrData2.push(['name', 'rate', 'symptom'],)
    // Object.keys(data).forEach(key => arrData.push([key, data[key]]))
    data.map((d)=>{
        arrData2.push([d['name'], d['symptom'],d['rate']])
    })

    console.log(arrData2)

    return(
        <div style={{ padding: '50px', paddingLeft: '50px'}}>
            <Chart
                width={'900px'}
                height={'700px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={
                    arrData2
                }
                options={{
                    legend: 'none',
                    chartArea: { left: 10, top: 10, right: 0, bottom: 10 },
                    pieSliceText: 'label',
                    vAxis: {
                        title: 'name',
                      },
                  }}
                rootProps={{ 'data-testid': '1' }}
                chartWrapperParams={{ view: { columns: [0, 2] } }}
                chartPackages={['corechart', 'controls']}
                render={({ renderControl, renderChart }) => {
                    return (
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ height: '10%', width: '100%', paddingTop: 10 }}>
                            <div
                                style={{
                                height: 100,
                                width: '100%',
                                border: 'solid 1px #ccc',
                                padding: 10,
                                marginTop: 0,
                                }}
                            >
                                {renderControl(
                                ({ controlProp }) => controlProp.controlID === 'select-symptom',
                                )}
                            </div>
                        </div>
                        <div style={{ top:'100px',width: '100%' }}>{renderChart()}</div>
                      </div>
                    )
                  }}
                controls={[
                    {
                    controlType: 'CategoryFilter',
                    controlID: 'select-symptom',
                    options: {
                        filterColumnIndex: 1,
                        ui: {
                        labelStacking: 'vertical',
                        label: 'Gender Selection:',
                        allowTyping: true,
                        allowMultiple: false,
                        },
                    },
                    },
                ]}
                />
        </div>
        
    );
}

export default Drugs;