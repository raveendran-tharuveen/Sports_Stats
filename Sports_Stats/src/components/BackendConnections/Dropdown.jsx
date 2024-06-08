import React, { useState } from 'react';

function Dropdown() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [param, setParam] = useState('');

  const fetchItems = () => {
    fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ param: param })
    })
      .then(response => {
        if (!response.ok) {
          console.error('Network response was not ok', response.statusText);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching items:', error));
  };

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleParamChange = (event) => {
    setParam(event.target.value);
  };

  const handleFetch = () => {
    fetchItems();
  };

  return (
    <div className="Dropdown">
      <input
        type="text"
        value={param}
        onChange={handleParamChange}
        placeholder="Enter parameter"
        className="param-input"
      />
      <button onClick={handleFetch} className="fetch-button">Search</button>
      <select value={selectedItem} onChange={handleChange} className="items-dropdown">
        <option value="" disabled>Select an item</option>
        {items.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
