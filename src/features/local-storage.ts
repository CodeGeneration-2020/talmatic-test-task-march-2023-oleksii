/* eslint-disable no-underscore-dangle */
import React from 'react';
import {Spell} from './api-types';

// Hook which is used to get a list of spells from the localStorage.
const useFavoritiesLocalStorage = () => {
  // Local state of the localStorage
  const [state, setState] = React.useState<Spell[]>([]);

  // Function to get the list of favorites from the localStorage
  const _getLocalStorage = () => {
    const innerState = JSON.parse(localStorage.getItem('favorities') || '[]');
    setState(innerState);
  };

  // Funtion to set the list of favorites in the localStorage
  const saveLocalStorage = (newState: Spell[]) => {
    localStorage.setItem('favorities', JSON.stringify(newState));
    setState(newState);
  };

  const checkFavorities = (spellIndex: string) => state?.some(item => item?.index === spellIndex) ?? false;

  const removeLocalStorage = (spellIndex: string) => {
    const filteredState = state.filter(({index}) => index !== spellIndex);
    saveLocalStorage(filteredState);
    setState(filteredState);
  };
  // UseEffect hook to get the list of favorites from the localStorage
  React.useEffect(() => {
    _getLocalStorage();
  }, []);

  // Return the list of favorites from the localStorage
  // And the function to set the list of favorites in the localStorage
  return {
    state,
    saveLocalStorage,
    removeLocalStorage,
    checkFavorities,
  };
};

export default useFavoritiesLocalStorage;
