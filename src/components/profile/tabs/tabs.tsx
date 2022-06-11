import React from 'react';

import {
  TabHeaderContainer,
  StylizedTab,
  StyledTabPanel,
  TabsHolder,
  inactiveTab,
} from './tabs.styles';

interface TabInterface {
  label: string,
  active?: boolean,
  value: number,
  onClick?: any, 
}

export const Tab = ({ label, active,  onClick }: TabInterface) => {
  return (
    <StylizedTab
      role='tab'
      active={active}
      onClick={onClick}
      inactiveTab={inactiveTab}
      >
      {label}
    </StylizedTab>
  );
};

export const Tabs = (props: { selectedTab: any, onChange: any, children: any }) => {
  const tabs = props.children.map((child: any) => {
    const handleClick = (e: any) => {
      props.onChange(e, child.props.value);
    };

    return React.cloneElement(child, {
      active: child.props.value === props.selectedTab,
      onClick: handleClick,
    });
  });

  return (
    <TabHeaderContainer>
      <TabsHolder>{tabs}</TabsHolder>
    </TabHeaderContainer>
  );
};

export const TabPanel = (props: { children: any, value: any, selectedIndex: any }) => {
  const hidden = props.value !== props.selectedIndex;

  return (
    <StyledTabPanel hidden={hidden} active={!hidden}>
      {props.children}
    </StyledTabPanel>
  );
};
