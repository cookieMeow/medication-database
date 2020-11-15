import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { Input } from 'antd';
import { Radio } from 'antd';
import { Table, Tag, Space } from 'antd';
import { Card, Col, Row } from 'antd';

const { TabPane } = Tabs;
const { Search } = Input;

function callback(key) {
  console.log(key);
}

const columns = [
  {
	title: 'Name',
	dataIndex: 'name',
	key: 'name',
	render: text => <a>{text}</a>,
  },
  {
	title: 'Symptoms',
	dataIndex: 'symptoms',
	key: 'symptoms',
  },
  {
	title: 'Manufacture',
	dataIndex: 'manufacture',
	key: 'manufacture',
  },
  {
	title: 'Price',
	key: 'price',
	dataIndex: 'price',
  }
];

const columns2 = [
	{
	  title: 'Name',
	  dataIndex: 'name',
	  key: 'name',
	  render: text => <a>{text}</a>,
	},
	{
	  title: 'Link',
	  dataIndex: 'link',
	  key: 'link',
	},
	{
	  title: 'Rating',
	  dataIndex: 'rating',
	  key: 'rating',
	},
	{
	  title: 'Side Effect',
	  key: 'side_effect',
	  dataIndex: 'side_effect',
	}
  ];

const data = [
  {
	key: '1',
	name: 'Acetaminophen',
	category: 32,
	company: 'New York No. 1 Lake Park',
	tags: ['toothaches', 'tag'],
  },
  {
	key: '2',
	name: 'Benzonatate',
	category: 42,
	company: 'London No. 1 Lake Park',
	tags: ['tag1'],
  },
  {
	key: '3',
	name: 'Citalopram',
	category: 32,
	company: 'Sidney No. 1 Lake Park',
	tags: ['cool'],
  },
];


const Home = () => {
	const [activeTab, setActiveTab] = useState('search');
	const [selectedMedicine, setSelectedMedicine] = useState();
	const [compareInfo, setCompareInfo] = useState();
	const [searchBy, setSearchBy] = useState('name');
	const [companyInfo, setCompanyInfo] = useState();
	const [nameInfo, setNameInfo] = useState();
	const [colInfo, setColInfo] = useState();
	
	// TODO: Please set the initial state to [] and use setSelectedMedicine to update the 
	//       state value when the drug in the detail page changes
	const [similarDrugs, setSimilarDrugs] = useState([
		{name: 'Drug1'},
		{name: 'Drug2'},
		{name: 'Drug3'},
	]);

	const onSearch = (value) => {
		console.log('searching', value);
		console.log('searchby', searchBy);
		const fetchData = async () => {
			if (searchBy == 'company') {
					const response = await fetch("http://35.168.59.174:3500/api/get_drug_by_company", {
						method: 'POST',
						body: JSON.stringify({'name':value}),
						headers: new Headers({
							'Content-Type': 'application/json'
  						})
					}).then(res => res.json())
					setCompanyInfo(response.company);
					console.log(response);
					setNameInfo(response.drug);
					const columnTemp = []
					if(nameInfo !== undefined){
						columnTemp.push(
							{
								title: 'Name',
								dataIndex: 'name',
								key: 'name',
								render: text => <a>{text}</a>,
							}
						)
						const temp = nameInfo[0]
						Object.keys(temp).forEach(
							keys => {
								console.log(keys)
								if(keys !== 'name'){
									return columnTemp.push(
										{
											title: keys,
											dataIndex: keys,
											key: keys,
											}
										)
								}
								
							}
							)
						setColInfo(columnTemp);
					}
			}
			if (searchBy == 'name') {
				setNameInfo('')
				setColInfo('')
				setCompanyInfo('');
				const response = await fetch("http://35.168.59.174:3500/api/get_drug_by_name", {
					method: 'POST',
					body: JSON.stringify({'name': value}),
					headers: new Headers({
    				'Content-Type': 'application/json'
					})
				  }).then(res => res.json())
				setNameInfo(response);
				const columnTemp = []
				if(nameInfo !== undefined){
					columnTemp.push(
						{
							title: 'Name',
							dataIndex: 'name',
							key: 'name',
							render: text => <a>{text}</a>,
						  }
					)
					const temp = nameInfo[0]
					Object.keys(temp).forEach(
						keys => {
							console.log(keys)
							if(keys !== 'name'){
								return columnTemp.push(
									{
										title: keys,
										dataIndex: keys,
										key: keys,
										}
									)
							}
							
						}
					)
				}
				console.log('columnTemp', columnTemp)
				setColInfo(columnTemp);
				console.log('colInfo', colInfo)
			}
			if (searchBy === 'sympton') {
				const response = await fetch("http://35.168.59.174:3500/api/get_drug_by_symptoms", {
					method: 'POST',
					body: JSON.stringify({'name': value}),
					headers: new Headers({
    				'Content-Type': 'application/json'
					})
				  }).then(res => res.json())
				  setNameInfo(response);
				  const columnTemp = []
				  if(nameInfo !== undefined){
					columnTemp.push(
						{
							title: 'Name',
							dataIndex: 'name',
							key: 'name',
							render: text => <a>{text}</a>,
						  }
					)
					const temp = nameInfo[0]
					Object.keys(temp).forEach(
						keys => {
							console.log(keys)
							if(keys !== 'name'){
								return columnTemp.push(
									{
										title: keys,
										dataIndex: keys,
										key: keys,
										}
									)
							}
							
						}
						)
				}
				  console.log('columnTemp', columnTemp)
				  setColInfo(columnTemp);
				  console.log('colInfo', colInfo)
			}
			if (searchBy === 'drugclass') {
				const response = await fetch("http://35.168.59.174:3500/api/get_drug_by_class", {
					method: 'POST',
					body: JSON.stringify({'name': value}),
					headers: new Headers({
    				'Content-Type': 'application/json'
					})
				  }).then(res => res.json())
				  setNameInfo(response);
				  const columnTemp = []
				  if(nameInfo !== undefined){
					columnTemp.push(
						{
							title: 'Name',
							dataIndex: 'name',
							key: 'name',
							render: text => <a>{text}</a>,
						  }
					)
					const temp = nameInfo[0]
					Object.keys(temp).forEach(
						keys => {
							console.log(keys)
							if(keys !== 'name'){
								return columnTemp.push(
									{
										title: keys,
										dataIndex: keys,
										key: keys,
										}
									)
							}
							
						}
						)
				}
				  console.log('columnTemp', columnTemp)
				  setColInfo(columnTemp);
				  console.log('colInfo', colInfo)
			}
		}
		fetchData();
		// TODO: Add search functionality here
	}

	const onChangeRadio = (e) => {
		console.log(`radio checked:${e.target.value}`);
		setSearchBy(e.target.value);
		// TODO: Integrate this with search, you can use state to store the seleted
		//       radio button value, for usage please refer to line 77 & 78
	}

	const tabOnChangeHandler = (activeKey) => {
		setActiveTab(activeKey);
	}


	const SearchResult = (value) => {
		console.log('value',value)
		return (
			<Table 
			onRow={(record, rowIndex) => {
				return {
					onClick: event => {
						console.log('on clicking', record);
						// const fetchData = async () => {
						// 	const response = await fetch("http://localhost:3500/api/get_drug_by_symptoms", {
						// 		method: 'POST',
						// 		json: true,
						// 		body: {'sympton': record.symptoms}
						// 	}).then(res => res.json())
						// 	// setCompareInfo(response)
						// 	setCompareInfo({
						// 		response
						// 	}, () => {
						// 		console.log('compareInfo',compareInfo)
						// 	});
							
						// }
						// fetchData();
						setActiveTab('compare');
						setSelectedMedicine(record);
						console.log('selectedMedicine',selectedMedicine)
					},
				};
			}}
			columns={colInfo} dataSource={nameInfo} />
		)
	}
return(
	<div className='home-container'>
		<Tabs defaultActiveKey="search" onChange={callback} className='home-tab-container'
			activeKey={activeTab}
			onChange={tabOnChangeHandler}
		>
			<TabPane tab="Search" key="search">
			  Search your medicine by:
			  <br/>
			  <div className='home-search-selection'>
			  <Radio.Group onChange={onChangeRadio} defaultValue="name">
				  <Radio.Button value="name">Name</Radio.Button>
				  <Radio.Button value="sympton">Symptom</Radio.Button>
				  <Radio.Button value="company">Company</Radio.Button>
				  <Radio.Button value="drugclass">Drug class</Radio.Button>
			  </Radio.Group>
			  </div>
			  <div className='home-search'>
				  <Search
				  placeholder="input search text"
				  allowClear
				  enterButton="Search"
				  size="large"
				  onSearch={onSearch}
				/>
			  </div>
			  {companyInfo &&
					<div className='company-info-container'>
						<div>Company: {companyInfo.address}</div>
						<div>Founded: {companyInfo.founded}</div>
						<div>link: {companyInfo.link}</div>
						<div>StockPrice: {companyInfo.traded}</div>
					</div>
				}
			  <div className='home-search-result'>
				<SearchResult />
			  </div>
			</TabPane>
			<TabPane tab="Compare" key="compare">
				{selectedMedicine &&
				<div>
					{searchBy==='name' &&
					<Card title={selectedMedicine.name} style={{ width: 500, height: 400 }}>
						<div>manufacture: {selectedMedicine.manufacture}</div>
						<div>price: {selectedMedicine.price}</div>
						<div>symptoms: {selectedMedicine.symptoms}</div>
						{/* <div>StockPrice: {companyInfo.traded}</div> */}
					</Card>
					}
					<Card title={selectedMedicine.name} style={{ width: 500, height: 400 }}>
						<div>Company:</div>
						<div>{selectedMedicine.company}</div>
						<div>{selectedMedicine.company}</div>
						<div>{selectedMedicine.company}</div>
					</Card>
					<div className='similar-drug-title'>Similar Drugs:</div>
					  <div className='similar-drug-wrapper'>
						<Row gutter={16}>
						{similarDrugs.map(drug => (
							<Col span={8}>
							<Card size="small" title={drug.name} bordered={false}>
								description here
							</Card>
						  </Col>
						))}
						</Row>
					  </div>
				  </div>
				}
			</TabPane>
		</Tabs>
	</div>
);
}

export default Home;
