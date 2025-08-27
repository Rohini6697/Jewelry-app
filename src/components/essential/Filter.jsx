import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `$${value}`;
}

 const Filter = ({onFilterChange}) => {
  const [priceRange, setPriceRange] = React.useState([0, 500]);

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
    // onFilterChange(newValue);
    if (onFilterChange) {
      onFilterChange(newValue); // send selected range to parent
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={priceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={0}
        max={500}
        sx={{color:'grey'}}
      />
      <div>
        Selected Range: ${priceRange[0]} - ${priceRange[1]}
      </div>
    </Box>
  );
}
export default Filter