import React from 'react'

export default function Stars({ rating }) {

    const renderStars = () => {
        const fullStars = Math.round(rating);
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
          stars.push(<i key={i} className="fa fa-star active" />);
        }
        
        const emptyStars = 5 - fullStars;
        for (let i = 0; i < emptyStars; i++) {
          stars.push(<i key={fullStars + i} className="fa fa-star" />);
        }
    
        return stars;
      };

  return (
    <div>{renderStars()}</div>
  )
}
