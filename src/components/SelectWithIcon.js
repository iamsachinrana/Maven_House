import React, { useEffect, useState } from 'react';
import Select, { components } from 'react-select';

export default function SelectWithIcon({ value, handleCategory, name, handleSelect, option }) {
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

  const Control = ({ children, ...props }) => {
    return (
      <components.Control {...props}>
        <div className='flex items-center justify-between w-full'>
          <div className='mr-1 ml-4'>
            <img
              style={{ width: '20px' }}
              src={props.selectProps.value.icon}
              alt=''
            />
          </div>
          {children}
        </div>
      </components.Control>
    );
  };
  const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <div className='flex items-center'>
            <div style={{ width: '20px' }}>
              <img style={{ width: '20px' }} src={props.data.icon} alt='' />
            </div>
            <label className='mx-2'>{props.label}</label>
          </div>
        </components.Option>
      </div>
    );
  };
  return (
    <Select
      isSearchable={false}
      components={{ Control, Option }}
      options={option}
      defaultValue={option[0]}
      name='price'
      hideSelectedOptions={false}
      className='basic-icon-select w-full'
      classNamePrefix='icon-select'
      // onChange={(value, e) => handleSelect({ target: { name: name, value: value.label } })}
      styles={colourStyles}
    />
  );
}
