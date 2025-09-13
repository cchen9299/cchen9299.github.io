import React from 'react';
import { TowerNode } from '../Background/styledComponents';
import Lights from './Lights';

const Tower = ({ children, short, ...rest }) => (
  <TowerNode {...rest}>
    {children}
    <div style={{
      padding: '20px 10px',
      width: '100%',
      height: '100%',
      display: 'flex',
    }}
    >
      <Lights short={rest.height < 80} />
    </div>
  </TowerNode>
);

export default Tower;
