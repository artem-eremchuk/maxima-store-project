import styles from './SelectsPanel.module.scss';
import React from 'react';
import Select, { components } from 'react-select';
import black_arrow from '../../assets/images/black-down-arrow.svg';
import purple_arrow from '../../assets/images/purple-down-arrow.svg';

const DropdownIndicator = props => {
  const { isFocused } = props;

  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <img src={isFocused 
          ? purple_arrow 
          : black_arrow} 
          alt="down-arrow" 
        />
      </components.DropdownIndicator>
    )
  );
};

function SelectsPanel() {  
  const options = [
    { value: 'notepads', label: 'Блокноты' },
    { value: 'pens', label: 'Ручки' },
    { value: 'pencils', label: 'Карандаши' },
    { value: 'stickers', label: 'Стикеры' },
  ]

  const selectStyles = {
    indicatorSeparator: () => ({ 
      display: "none" 
    }),
    control: (styles) => ({
      ...styles,
      border: 0,
      boxShadow: 'none',
      width: "max-content",
    }),
    input: (styles) => ({
      ...styles,
      fontWeight: 700,
      fontSize: 30,
      color: '#000000',
      backgroundColor: 'none',
    }),
    option: (styles) => ({
      ...styles,
      fontWeight: 700,
      fontSize: 30,
      color: '#000000',
      margin: '18px 0',
      backgroundColor: 'none',
    }),
    placeholder: (styles, state) => ({
      ...styles,
      fontWeight: 700,
      fontSize: 30,
      color: state.isFocused ? '#4B267E' : '#000000',
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: '#000000',
    }),
    menuList: (styles) => ({
      ...styles,
      "::-webkit-scrollbar": {
        display: 'none',
      },
    }),
    menu: (styles) => ({
      ...styles,
      width: 'max-content',
      minWidth: '100%'
    }),
    singleValue: (styles, state) => ({      
      ...styles,
      fontWeight: 700,
      fontSize: 30,
      color: state.selectProps.menuIsOpen ? '#4B267E' : '#000000',
    }),
  }

  return (
    <div className={styles.selects__wrapper}>
      <div className={styles.select}>
        <Select
          placeholder={'Одежда'}
          options={options} 
          styles={selectStyles}
          components={{ DropdownIndicator }} 
          isSearchable={false}
        />
      </div>
      <div className={styles.select}>
        <Select 
          placeholder={'Аксессуары'}
          options={options} 
          styles={selectStyles}
          components={{ DropdownIndicator }}
          isSearchable={false} 
        />
      </div>
      <div className={styles.select}>
        <Select
          placeholder={'Канцелярия'} 
          options={options} 
          styles={selectStyles} 
          components={{ DropdownIndicator }}
          isSearchable={false}
        />
      </div>
    </div>
  )
}

export default SelectsPanel;