import React from 'react';

const Dropdown = ({selected, onSelectChange, options}) => {
    const renderedOptions = options.map(option => {
        return(
            <option
                key={option.value} 
                value={option.value}
            >
                {option.language}
            </option>);
    });
    
    return(
        <React.Fragment>
            <select 
                name="language" 
                id="language" 
                onChange={e=>onSelectChange(e.target.value)}
            >
                {renderedOptions}
            </select>
        </React.Fragment>
    );
}

export default Dropdown;