import React, { useState } from 'react';
import styled from 'styled-components';

import PhotosTab from './photos/index';
import VideosTab from './videos/index';
import VectorsTab from './vectors/index';
import ModelsTab from './models/index';
import { Tabs, Tab, TabPanel } from './tabs';

export default function MediaTabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (e: any, value: number) => {
    setActiveTab(value);
  };

  return (
    <div>
      <TabsContainer>
        <div>
          <Tabs selectedTab={activeTab} onChange={handleChange}>
            <Tab label='Photos' value={1}></Tab>
            <Tab label='Videos' value={2}></Tab>
            <Tab label='Vectors' value={3}></Tab>
            <Tab label='3D Models' value={4}></Tab>
          </Tabs>
        </div>
      </TabsContainer>
      <TabPanelContainer>
        <TabPanel value={activeTab} selectedIndex={1}>
          <PhotosTab />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <VideosTab />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={3}>
          <VectorsTab />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={4}>
          <ModelsTab />
        </TabPanel>
      </TabPanelContainer>
    </div>
  );
}

const TabPanelContainer = styled.div``;

const TabsContainer = styled.div`
  width: 100%;
  border-bottom: 2px solid #000000;

  margin-top: 100px;
  display: flex;
  justify-content: center;  
`;
