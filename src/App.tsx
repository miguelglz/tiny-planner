import React from 'react';
import { Layout } from 'antd';
import './App.css';
import RecipeSearchForm from './modules/RecipeSearchForm/RecipeSearchForm';

function App() {
  const { Header, Content, Footer } = Layout;

  return (
    <Layout className="layout">
      <Header>
        <span className="title">Surely Meal Planner</span>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <RecipeSearchForm />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Surely ©2020</Footer>
    </Layout>
  );
}

export default App;
