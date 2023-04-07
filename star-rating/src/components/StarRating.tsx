import React from 'react';
import Star from './Star';


const StarRating = ({ style={}, totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = React.useState(0);

  return (
    <div style={{padding:"5px", ...style}}>
      {
        [...Array(totalStars)].map((_, i: number) => {
          return (
            <Star
              key={i}
              selected={selectedStars > i}
              onSelect={() => setSelectedStars(i + 1)}
            />
          )
        })
      }
      <p>{selectedStars} of {totalStars} stars</p>
    </div>
  )
}

export default StarRating;