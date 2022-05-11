import React from "react";
import { Affix, Menu, Row, Tooltip } from "antd";
import logo from '../../assets/images/bg/logo.png';

import { PieChartOutlined, UserOutlined, TeamOutlined, FileOutlined, ProjectOutlined, UsergroupAddOutlined, ControlOutlined } from "@ant-design/icons";
import { Link, useRouteMatch } from "react-router-dom";

const { SubMenu } = Menu;
function SideBarMonitoring(props) {
  const { url } = useRouteMatch();

  // const { SubMenu } = Menu;
  return (
    <Affix offsetTop={0}>
      <div>
      <div className="logo">
        <Row align="middle" justify="center" gutter={8}>
          <Tooltip placement="right" color={"orange"} title={"Admin Logo"}>
            <img
              src={
                logo
              }
              alt="site logo"
              style={{ width: "90%", height: "auto", margin: "10px" }}
            />
          </Tooltip>
        </Row>
      </div>
      <div>
      <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to={`${url}/home`}> Home </Link>
        </Menu.Item>

        <Menu.Item key="3" icon={<UsergroupAddOutlined />}>
          <Link to={`${url}/group`}> Groups </Link>
        </Menu.Item>

        {/* <SubMenu key="sub1" icon={<ControlOutlined />} title="Student">
        <Menu.Item key="4" icon={<ProjectOutlined />}>
          <Link to={`${url}/student`}> Add Students </Link>
        </Menu.Item>
       
        <Menu.Item key="6" icon={<ProjectOutlined />}>
          <Link to={`${url}/students/group`}> Student Group </Link>
        </Menu.Item>
        </SubMenu> */}
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team"> 
          <Menu.Item key="7">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
      </div>
      </div>
    </Affix>
  );
}

export default SideBarMonitoring;
