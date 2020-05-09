import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

interface IAppProps {}

const App: React.FC<IAppProps> = () => {
  return <Container>App</Container>;
};

export default App;

const Container = styled(Layout)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
