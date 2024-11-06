import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { useLocation } from 'react-router-dom';
import ClassTemplate from '../TraineeFeedback/ClassTemPlate/ClassTemPlate';
import CustomTemplate from '../TraineeFeedback/CustomTemPlate/CustomTemPlate';
import FeedBack from './FeedBack/FeedBack';

const TraineeFeedback = () => {
  const location = useLocation();
  const [activeKey, setActiveKey] = useState('1');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tab = queryParams.get('tab');
    if (tab) setActiveKey(tab);
  }, [location.search]);

  const tabItems = [
    {
      key: '1',
      label: "Class Template",
      children: <ClassTemplate setActiveKey={setActiveKey} />,
    },
    {
      key: '2',
      label: "Custom Template",
      children: <CustomTemplate setActiveKey={setActiveKey} />,
    },
    {
      key: '3',
      label: "Feedback",
      children: <FeedBack setActiveKey={setActiveKey} />,
    },
  ];

  return (
    <div className='pt-16'>
      <h1 className="text-xl font-semibold mb-4">Trainee Feedback</h1>
      <Tabs 
        activeKey={activeKey}
        onChange={setActiveKey}
        items={tabItems.map(item => ({
          ...item,
          children: (
            <div className='container-tracker'>
              {item.children}
            </div>
          ),
        }))}
      />
    </div>
  );
}

export default TraineeFeedback;
