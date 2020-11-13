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
	title: 'Category',
	dataIndex: 'category',
	key: 'category',
  },
  {
	title: 'Company',
	dataIndex: 'company',
	key: 'company',
  },
  {
	title: 'Tags',
	key: 'tags',
	dataIndex: 'tags',
	render: tags => (
	  <>
		{tags.map(tag => {
		  let color = tag.length > 5 ? 'geekblue' : 'green';
		  return (
			<Tag color={color} key={tag}>
			  {tag.toUpperCase()}
			</Tag>
		  );
		})}
	  </>
	),
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

	const onSearch = (value) => {
		console.log('searching', value);
		// TODO: Add search functionality here
	}

	const onChangeRadio = (e) => {
		console.log(`radio checked:${e.target.value}`);
		// TODO: Integrate this with search, you can use state to store the seleted
		//       radio button value, for usage please refer to line 77 & 78
	}

	const tabOnChangeHandler = (activeKey) => {
		setActiveTab(activeKey);
	}


	const SearchResult = () => {
		return (
			<Table 
			onRow={(record, rowIndex) => {
				return {
					onClick: event => {
						console.log('on clicking', record);
						setActiveTab('compare');
						setSelectedMedicine(record);
					},
				};
			}}
			columns={columns} dataSource={data} />
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
				  <Radio.Button value="sympton">Sympton</Radio.Button>
				  <Radio.Button value="company">Company</Radio.Button>
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
			  <div className='home-search-result'>
				<SearchResult />
			  </div>
			</TabPane>
			<TabPane tab="Compare" key="compare">
				{selectedMedicine &&
				<div>
					<Card title={selectedMedicine.name} style={{ width: 500, height: 400 }}>
						<div>Company:</div>
						<div>{selectedMedicine.company}</div>
					</Card>
					<div className='similar-drug-title'>Similar Drugs:</div>
					  <div className='similar-drug-wrapper'>
						<Row gutter={16}>
						  <Col span={8}>
							<Card size="small" title="Drug 1" bordered={false}>
								Drug 1 description
							</Card>
						  </Col>
						  <Col span={8}>
							<Card size="small" title="Drug 2" bordered={false}>
								Drug 2 description
							</Card>
						  </Col>
						  <Col span={8}>
							<Card size="small" title="Drug 3" bordered={false}>
								Drug 3 description
							</Card>
						  </Col>
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