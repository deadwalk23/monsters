import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) => (
<div class="cntr">
	<div class="cntr-innr">
<input 
    className='search'
    type='search' 
    placeholder={placeholder} 
    onChange={handleChange}
/>
</div>
</div>


)