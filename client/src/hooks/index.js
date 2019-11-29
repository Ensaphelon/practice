import { useState, useEffect } from 'react';

export const useMount = ({ onMount, onUnmount }, observableData = []) => {
  useEffect(() => {
    if (onMount) {
      onMount();
    }

    if (onUnmount) {
      return onUnmount();
    }
  }, observableData);
};

export const useTextInput = (initialValue = '') => {
  const [value, changeValue] = useState(initialValue);

  const handleChangeValue = ({ target: { value } }) => changeValue(value);

  return [value, handleChangeValue];
};

export const useSelections = (initialItemsState = []) => {
  const [items, setItems] = useState(initialItemsState);

  const isVisible = item => item.visible;

  const toggleItemActiveState = item => {
    const updatedItems = items.map(currentItem => ({
      ...currentItem,
      visible: item.property === currentItem.property ? !currentItem.visible : currentItem.visible,
    }));

    setItems(updatedItems);
  };

  const getVisibleFilters = () => items.filter(isVisible);

  return [items, toggleItemActiveState, getVisibleFilters, isVisible];
};

export const useLocalStorage = (key, initialValue) => {
  const previosValue = localStorage.getItem(key);

  const [storedValue, setStoredValue] = useState(previosValue || null);

  if (!previosValue) {
    localStorage.setItem(key, initialValue);
    setStoredValue(initialValue);
  }

  const handleSetStoredValue = value => {
    setStoredValue(value);

    localStorage.setItem(key, value);
  };

  return [storedValue, handleSetStoredValue];
};
