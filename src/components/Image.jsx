import React from 'react'

export const Image = ({bg, img}) => {
  return (
    <div
    style={{ backgroundColor: bg }}
    className={`flex items-center justify-center flex-1 md:w-1/2`}
  >
    <img className="lg:h-[103px]" src={img} alt="img" />
  </div>
  )
}
