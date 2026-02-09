import React from 'react'

const CategoryCard = ({card}) => {
    console.log(card)
    return (
        <div className="category_card">
            <img src={card.Image}
                alt="Category 1" />
            <h2>{card.name}</h2>
        </div>
    )
}

export default CategoryCard
