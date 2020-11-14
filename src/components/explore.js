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

const Explore = () => {
    const arrData = []
    arrData.push(['Company', 'Numbers of Medicines'],)
    Object.keys(data).forEach(key => arrData.push([key, data[key]]))
    console.log(arrData)
    return(
        <Chart
        chartType="PieChart"
        width={'1000px'}
        height={'1000px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={arrData}
        // spreadSheetUrl="https://docs.google.com/spreadsheets/d/1sd8DslOz8V0Do7D0UhajYmY8OwpQHKzwh2gbdIMnvvQ/edit#gid=1330700052"
        options={{
            title: 'Number of Medicines in Companies',
            is3D: true,
        }}
        rootProps={{ 'data-testid': '1' }}
        />
    );
}

export default Explore;