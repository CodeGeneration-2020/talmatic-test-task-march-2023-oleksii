/* eslint-disable jsx-a11y/no-static-element-interactions */
import CustomDrawer from 'src/common/drawer/drawer';
import {NAV_BAR_URL} from 'src/lib/constants';
import {useNavigate} from 'react-router-dom';
import React from 'react';

const NavigationDrawer = () => {
  // Local state to keep track of the open/closed state of the drawer
  const [isOpen, setIsOpen] = React.useState(false);

  //  Inbuilt function to navigate to a new page
  const navigate = useNavigate();

  // Functions to toggle the open/closed state of the drawer
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  // Function to navigate to the page that was clicked on
  const handleNavigation = (to: string) => {
    navigate(to);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Escape') {
      handleClose();
    }
  };

  return (
    <CustomDrawer isOpen={isOpen} onOpen={handleOpen} onClose={handleClose}>
      <ul>
        {NAV_BAR_URL.map(({name, to}) => (
          <div key={name} onClick={() => handleNavigation(to)} onKeyDown={handleKeyDown}>
            <li>
              <span>{name}</span>
            </li>
          </div>
        ))}
      </ul>
    </CustomDrawer>
  );
};

export default NavigationDrawer;
