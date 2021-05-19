import{BrowserRouter as Router,Route,Link} from 'react-router-dom';
import React, { Component } from 'react'
import 'antd/dist/antd.css';
import './index.css';
//import logo from '../src/image/logo192.png';
import { Layout, Menu, Breadcrumb } from 'antd';
import { MenuUnfoldOutlined,MenuFoldOutlined,UnorderedListOutlined ,CaretRightOutlined } from '@ant-design/icons';

//Root
import bisection from 'maths/root/bisection';

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
                  <Menu.Item key="1"><CaretRightOutlined />Bisection Method<Link to = "/bisection"/>  </Menu.Item>
                  <Menu.Item key="2"><CaretRightOutlined />False Position Method</Menu.Item>
                  <Menu.Item key="3"><CaretRightOutlined />One-point Iteraion</Menu.Item>
                  <Menu.Item key="4"><CaretRightOutlined />Newton Raphson</Menu.Item>
                  <Menu.Item key="5"><CaretRightOutlined />Newton Raphson (Secant)</Menu.Item>
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
                  <Menu.Item key="6"><CaretRightOutlined />Cramer's Rule</Menu.Item>
                  <Menu.Item key="7"><CaretRightOutlined />Gauss Jordan</Menu.Item>
                  <Menu.Item key="8"><CaretRightOutlined />Gauss Seidel</Menu.Item>
                  <Menu.Item key="9"><CaretRightOutlined />Jacobi  </Menu.Item>
                  <Menu.Item key="10"><CaretRightOutlined />Conjugate Gradient</Menu.Item>
                  <Menu.Item key="11"><CaretRightOutlined />Gauss Elimination</Menu.Item>
                  <Menu.Item key="12"><CaretRightOutlined />LU Decomposition Method</Menu.Item>
                  <Menu.Item key="13"><CaretRightOutlined />Cholesky Decomposition</Menu.Item>
                </SubMenu>
                
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <UnorderedListOutlined />
                      Interpolation Technique
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

                <SubMenu
                  key="sub5"
                  title={
                    <span>
                      <UnorderedListOutlined />
                      Intergration
                </span>
                  }
                >
                  <Menu.Item key="20"><CaretRightOutlined />Trapzoidal  </Menu.Item>
                  <Menu.Item key="21"><CaretRightOutlined />Composite Trapzoidal  </Menu.Item>
                  <Menu.Item key="22"><CaretRightOutlined />Simpson  </Menu.Item>
                  <Menu.Item key="23"><CaretRightOutlined />Composite Simpson  </Menu.Item>

                </SubMenu>

              </Menu>
            </Sider>
            <Content style={{ background: "#0a0a0a", color: "black" , padding: '0 25px', minHeight: 750 }}>
            <Route path = "/bisection" component = {bisection} />
            
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Router>
    )
  }
}
export default App
