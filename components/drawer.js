import React from 'react';
import Drawer from '@material-ui/core/Drawer';


const DrawerMenu = (props) => {
    return (
        <Drawer anchor="right" open={props.showDrawer} onClose={props.toggleDrawerHandler}>
        <div
            style={{width:'300px'}} 
          tabIndex={0}
          role="button"
          onClick={props.toggleDrawerHandler}
          onKeyDown={props.toggleDrawerHandler}
        >
        </div>
      </Drawer>
    )

}

export default DrawerMenu;