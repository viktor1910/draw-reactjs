import "./App.css";
import { useState } from "react";
import Drawer from "./component/Drawer";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="App">
      {/* 
        Uncomment to see the drawer responsive
      <button onClick={() => setOpenDrawer(!openDrawer)}>Open Drawer</button>
      <div className="app__container">
        <Drawer responsive open={openDrawer}>
          <div
          className="app__content-sider"
            onMouseEnter={() => setOpenDrawer(true)}
            onMouseLeave={() => setOpenDrawer(false)}
          >
            This is content just hover to open
          </div>
        </Drawer>
        <div className="app__main-content">Main content here</div>
      </div> */}

      <button onClick={() => setOpenDrawer(!openDrawer)}>Open Drawer</button>
      <div className="app__container_without_responsive">
        <Drawer open={openDrawer}>
          <div
            className="app__content-sider"
            onMouseEnter={() => setOpenDrawer(true)}
            onMouseLeave={() => setOpenDrawer(false)}
          >
            This is content just hover to open
          </div>
        </Drawer>
        <div className="app__main-content_without_responsive">Main contenttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt</div>
      </div>
    </div>
  );
}

export default App;
