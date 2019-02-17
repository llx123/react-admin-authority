import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

const renderMenuItem = item => ( // 不带子菜单
  <Menu.Item
    key={item.path}
  >
    <Link replace to={(item.route || item.path) + (item.query || '')}>
      {item.icon && <Icon type={item.icon} />}
      <span className="nav-text">{item.title}</span>
    </Link>
  </Menu.Item>
);

const renderSider = item => ( // 带子菜单
  <Menu.SubMenu
    key={item.path}
    title={
      <span>
        {item.icon && <Icon type={item.icon} />}
        <span className="nav-text">{item.title}</span>
      </span>
    }
  >
    {item.children.map(item => renderMenuItem(item))}
  </Menu.SubMenu>
);

export default ({ menus, ...props }) => (
  <Menu {...props}>
    {menus && menus.map(item =>
      item.children ? renderSider(item) : renderMenuItem(item)
    )}
  </Menu>
);
