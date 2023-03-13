/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import {Drawer} from '@mui/material';
import React from 'react';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';

import styles from './drawer.module.scss';

// Default anchor position for the drawer
const DEFAULT_ANCHOR = 'left';
interface ICustomDrawerProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;

  children: React.ReactNode;
}
const CustomDrawer = ({children, isOpen, onClose = () => null, onOpen = () => null}: ICustomDrawerProps) => {
  const iconSX = {cursor: 'pointer', width: 40, height: 40};
  return (
    <>
      <MenuOpenOutlinedIcon
        className={styles.icon}
        sx={iconSX}
        data-testid="open-btn"
        onClick={onOpen}
        aria-label="open menu"
      />
      <Drawer sx={{width: 400}} anchor={DEFAULT_ANCHOR} open={isOpen} onClose={onClose}>
        <div className={styles.wrapper}>
          <div>
            <MenuOpenOutlinedIcon data-testid="close-btn" sx={iconSX} onClick={onClose} aria-label="open menu" />
          </div>
          <div className={styles.list}>{children}</div>
        </div>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
