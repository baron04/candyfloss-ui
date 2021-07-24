import React, { useState } from 'react';
import Menu from '../components/Menu/menu'
import MenuItem from "../components/Menu/menuItem";
import SubMenu from '../components/Menu/subMenu'
// import Transition from '../components/Transition/transition';
import Button from '../components/Button/button'

function MenuTest() {
  const [show, setShow] = useState(false)

  const onSelect = (index) => {
    console.log('onSelect, index=', index)
  }

  return (
    <div>
      {/* <Menu defaultIndex={0} onSelect={onSelect}>
        <MenuItem index={0}>cool link1</MenuItem>
        <MenuItem index={1}>cool link2</MenuItem>
        <MenuItem index={2} disabled>cool link3</MenuItem>
      </Menu>
      <Menu defaultIndex={0} mode="vertical">
        <MenuItem index={0}>cool link1</MenuItem>
        <MenuItem index={1}>cool link2</MenuItem>
        <MenuItem index={2}>cool link3</MenuItem>
      </Menu> */}
      <Menu defaultIndex={0} onSelect={onSelect}>
        <MenuItem>cool link1</MenuItem>
        <MenuItem disabled>cool link2</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown 1</MenuItem>
          <MenuItem>dropdown 2</MenuItem>
          <MenuItem>dropdown 3</MenuItem>
        </SubMenu>
        <MenuItem>cool link3</MenuItem>
      </Menu>
      <Menu defaultIndex={0} onSelect={onSelect} mode="vertical" defaultOpenSubMenus={['2']}>
        <MenuItem>cool link1</MenuItem>
        <MenuItem disabled>cool link2</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown 1</MenuItem>
          <MenuItem>dropdown 2</MenuItem>
          <MenuItem>dropdown 3</MenuItem>
        </SubMenu>
        <MenuItem>cool link3</MenuItem>
      </Menu>


      <Button size="large" onClick={() => { setShow(!show) }}>Toogle</Button>
      {/* <Transition in={show} timeout={300} animation="zoom-in-left">
        <div>
          <p>Edit <code>src/App.tsx</code> and save to reload.</p>
          <p>Edit <code>src/App.tsx</code> and save to reload.</p>
          <p>Edit <code>src/App.tsx</code> and save to reload.</p>
          <p>Edit <code>src/App.tsx</code> and save to reload.</p>
        </div>
      </Transition> */}
    </div>
  )
}

export default MenuTest;