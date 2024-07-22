import React from 'react'
import { BsStar } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

export const Rating = ({fullStars, emptyStars}) => {
  return (
    <div className="flex gap-1">
    {Array(fullStars)
      .fill()
      .map((s, i) => {
        return <FaStar key={i} size={26} color="orange" />;
      })}
    {Array(emptyStars)
      .fill()
      .map((s, i) => {
        return <BsStar key={i} size={26} color="orange" />;
      })}
  </div>
  )
}
