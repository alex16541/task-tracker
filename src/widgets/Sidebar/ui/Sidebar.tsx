import { selectProjectsData } from "@/entity/Project";
import { getRouteProject } from "@/shared/consts/router";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { PlusCircleFilled } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Menu, MenuProps, Space } from "antd";
import Sider from "antd/es/layout/Sider";
import classNames from "classnames";
import { memo } from "react";
import { Link } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

interface SidebarProps {
  className?: string;
  collapsed?: boolean;
}

const Sidebar = (props: SidebarProps) => {
  const { className, collapsed } = props;

  const projects = useAppSelector(selectProjectsData);

  return (
    <Sider
      className={classNames(className, "")}
      width={300}
      style={{
        position: collapsed ? "absolute" : "relative",
        backgroundColor: "#fff",
      }}
    >
      <Space className="p-[4px] w-full">
        <Dropdown placement="bottomLeft" menu={{ items }}>
          <Button
            className="w-auto h-auto px-[24px] py-1 font-bold"
            type="text"
            icon={
              <Avatar
                size={"small"}
                shape="circle"
                style={{ backgroundColor: "#336699", color: "#fff" }}
                onClick={() => console.log("User click!")}
              >
                U
              </Avatar>
            }
          >
            User
          </Button>
        </Dropdown>
      </Space>

      <div className="w-full p-[4px]">
        <Button
          icon={<PlusCircleFilled />}
          size="large"
          type="text"
          style={{ textAlign: "start" }}
          danger
          className="m-[4px] px-[24px] w-full"
        >
          Добавить задачу
        </Button>
      </div>

      <Menu mode="inline">
        <Menu.Item>Сегодня</Menu.Item>
        <Menu.Item>Завтра</Menu.Item>
      </Menu>
      <Menu mode="inline">
        <Menu.SubMenu title="Избранное">
          {projects.map((p) => (
            <Menu.Item>
              <Link to={getRouteProject(p.name)}>{p.name}</Link>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
        <Menu.SubMenu title="Мои проекты">
          {projects.map((p) => (
            <Menu.Item>
              <Link to={getRouteProject(p.name)}>{p.name}</Link>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
};

const Memoized = memo(Sidebar);

export { Memoized as Sidebar };
