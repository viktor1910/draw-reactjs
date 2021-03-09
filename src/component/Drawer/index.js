import React from "react";
import './style.css'

export default function Drawer(props) {
  const { children, responsive = false, open } = props;

  return <div className={(open ? "drawer__open" : 'drawer__close') + (responsive ? ' container-responsive' : ' container')}>{children}</div>;
}