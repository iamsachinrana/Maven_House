import React, { useEffect, useState } from 'react';
import Select from 'react-select';

export default function ReactCustomSelect({ value, handleCategory, name, option, handleSelect }) {

  const colourStyles = {
    control: (base) => ({
      ...base,
      border: '1px solid #A1A5A7',
      background: 'white',
      color: 'black',
      boxShadow: 'none',
      outline: 'none',
      borderRadius: '10px',
      height: '54px',
      minWidth: '200px',
      '&:hover': {
        border: '1px solid #A1A5A7 !important',
      },
    }),
    menuList: (styles) => ({
      ...styles,
      background: 'white',
      color: 'black',
      padding: 0,
      borderRadius: '4px',
      border:'1px solid #A1A5A7'
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      background: 'white',
      color: 'black',
      padding: '0 5px',
      borderRadius: '4px',
      // '&:hover': {
      //   backgroundColor: 'white',
      //   color: '#0b0fde',
      // },
    }),
    placeholder: (styles) => ({
      ...styles,
      color: 'black',
    }),
    singleValue: (styles) => ({
      ...styles,
      color: 'black',
    }),

    indicatorSeparator: (styles) => ({
      ...styles,
      display: 'none',
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      color: isFocused ? 'black' : isSelected ? 'black' : '',
      background: isFocused ? 'white' : isSelected ? 'white' : '',
      zIndex: 1,
    }),
    menu: (base) => ({
      ...base,
      zIndex: 100,
      background: 'white',
    }),
  };

 
  const cplaceholder = option[0];
  return (
    <div className='w-full h-full'>
      <Select
         isSearchable={false}
        defaultValue={cplaceholder}
        name="colors"
        options={option}
        className="basic-multi-select"
        classNamePrefix="select"
        selectProps='any'
        onChange={(value, e) => handleSelect({ target: { name: name, value: value.value } })}
        styles={colourStyles}
      />
    </div>
  );
}
