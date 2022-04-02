import React from 'react';

import { TabsHolder, TabHeaderContainer, StylizedTab } from './styles';

interface TabInterface {
    label: any,
    active?: any
    value: any,
    onClick?: any
}

export const CategoryTab = ({label, active, onClick}: TabInterface) => {
    return (
        <StylizedTab role="tab" active={active} onClick={onClick} /*inactiveTab={}*/ >
            {label}
        </StylizedTab>
    )
}

export const CategoryTabs = (props: {
  selectedTab: any,
  onChange: any,
  children: any,
}) => {
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

// export const
