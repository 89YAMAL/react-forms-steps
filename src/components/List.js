import React from 'react';
import PropTypes from 'prop-types';

export default function List({ list, onEvent }) {

if (list.length === 0) {
  return null
}

return (
    <>
    <div className='list-head'>
        <p>Дата (ДД.ММ.ГГ)</p>
        <p>Пройдено км</p>
        <p>Действия</p>
    </div>
    <ul className='list'>
      {list.map((item) => 
        <li className='list-item' key={item.id} onClick={onEvent}>
            <p>{item.date}</p>
            <p>{item.distance}</p>
            <div>
                <button className='item-edit' data-id={item.id}>✎</button> 
                <button className='item-del' data-id={item.id}>✘</button> 
            </div>
        </li>)}
    </ul>
    </>
  )
}

List.prototype = {
  list: PropTypes.array,
  onEvent: PropTypes.func,
}  