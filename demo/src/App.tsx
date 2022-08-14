import React, {FC} from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {Layout} from "antd";
import './App.css';

const App: FC = () => {
    const { Content } = Layout
  return (
   <Layout>
        <NavBar/>
        <Content>
            <AppRouter/>
        </Content>
   </Layout>
  );
}

export default App;
