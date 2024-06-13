import { Flex, Layout, Space } from "antd";
import "./App.css";
import { Header, Content } from "antd/es/layout/layout";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import React from "react";
import { Sidebar } from "@/widgets/Sidebar";
import { Breadcrumbs } from "@/widgets/Breadcrumbs";
import classNames from "classnames";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="h-screen">
      <Sidebar collapsed={collapsed} />
      <Layout className={classNames("h-screen overflow-y-auto relative", {})}>
        <Header className="bg-white sticky top-0 z-10">
          <Flex align="center" justify="space-between" className="h-full">
            <Space size="large">
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                },
              )}
              <Breadcrumbs />
            </Space>
          </Flex>
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
