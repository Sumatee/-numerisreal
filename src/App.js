import{BrowserRouter as Router,Route,Link} from 'react-router-dom';
import React, { Component } from 'react'
import 'antd/dist/antd.css';
import './index.css';
//import logo from '../src/image/logo192.png';
import { Layout, Menu, Breadcrumb } from 'antd';
import { MenuUnfoldOutlined,MenuFoldOutlined,UnorderedListOutlined ,CaretRightOutlined } from '@ant-design/icons';
//Root
import bisection from './maths/root/bisection';
import falseposition from './maths/root/falseposition';
import onepoint from './maths/root/onepoint';
import newton from './maths/root/newton';
//linear
import cramer from './maths/linear/cramer';
import Jacobi from './maths/linear/Jacobi';



// const express = require("express");
// const app = express();
// con port = process.env.PORT || 5000;
// app.listen(port,() => {
//   console.lo
// }
// )
//menu
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }
  render() {
    return (
      <Router>
      <Layout>                                    
        <Header style={{ background: "#0bacb8", color: "black" }} className="header">
        <p style={{ fontSize:'28px',color: "white",textAlign: 'center' }}>Numerical Methods</p>
          <div>
          </div>
        </Header>

        <Content style={{ padding: '0 60px' }}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={270} >
              <Menu
                mode="inline"
                theme="dark"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <UnorderedListOutlined />
                      Root of Equation
                </span>
                  }
                >
                  <Menu.Item key="1"><CaretRightOutlined />Bisection <Link to = "/bisection"/>  </Menu.Item>
                  <Menu.Item key="2"><CaretRightOutlined />False Position <Link to = "/falseposition"/> </Menu.Item>
                  <Menu.Item key="3"><CaretRightOutlined />One-point Iteraion<Link to = "/onepoint"/> </Menu.Item>
                  <Menu.Item key="4"><CaretRightOutlined />Newton Raphson<Link to = "/newton"/></Menu.Item>
            
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <UnorderedListOutlined />
                      Linear Algaba
                </span>
                  }
                >
                  <Menu.Item key="6"><CaretRightOutlined />Cramer's Rule<Link to = "/cramer"/> </Menu.Item>
                 
                  
                  <Menu.Item key="9"><CaretRightOutlined />Jacobi<Link to = "/jacobi"/>   </Menu.Item>
                 
                  
                  <Menu.Item key="12"><CaretRightOutlined />LU Decomposition Method</Menu.Item>
                  <Menu.Item key="13"><CaretRightOutlined />Cholesky Decomposition</Menu.Item>
                </SubMenu>
                
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <UnorderedListOutlined />
                      Interpolation 
                </span>
                  }
                >
                  <Menu.Item key="14"><CaretRightOutlined />Newton's Divided</Menu.Item>
                  <Menu.Item key="15"><CaretRightOutlined />Lagrange  </Menu.Item>
                  <Menu.Item key="16"><CaretRightOutlined />Spline  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <UnorderedListOutlined />
                      Regression
                </span>
                  }
                >
                  <Menu.Item key="17"><CaretRightOutlined />Linear  </Menu.Item>
                  <Menu.Item key="18"><CaretRightOutlined />Polynomial  </Menu.Item>
                  <Menu.Item key="19"><CaretRightOutlined />Multiple Linear  </Menu.Item>
                </SubMenu>
                
                

                

              </Menu>
            </Sider>
            <Content style={{ background: "#0a0a0a", color: "black" , padding: '0 25px', minHeight: 750 }}>
            <Route path = "/bisection" component = {bisection} />
            <Route path = "/falseposition" component = {falseposition} />
            <Route path = "/onepoint" component = {onepoint} />
            <Route path = "/newton" component = {newton} />
            <Route path = "/cramer" component = {cramer} />
            <Route path = "/jacobi" component = {Jacobi} />
          
            
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>King Mongkut's University of Technology North Bangkok</Footer>
      </Layout>
    </Router>
    )
  }
}
export default App
