import { Button } from "./Button";
import { Bonus } from "./Bonus";
import { Rating } from "./Rating";
import { Image } from "./Image";

export const Card = ({ name, img, bg, rating }) => {

  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    // -------Parent container --------
    <div className="rounded-sm shadow-md p-4 flex flex-wrap lg:items-center sm:flex-col gap-6 border">

      {/* ---image component -------- */}
      <Image bg={bg} img={img}/>

      <div className="flex-1 flex flex-col lg:flex-row md:gap-4 sm:gap-2 md:w-1/2">
      
        {/* Casino description  container */}
        <div className="flex-1 flex flex-col gap-3 justify-center items-center md:items-start">

          {/* casino name  */}
          <p className="border-b-2 border-black capitalize text-xl">{name}</p>

          {/* star ratings component */}
          <Rating
           fullStars={fullStars} 
           emptyStars={emptyStars}
           />

        </div>

        {/* bonus component  */}
        <Bonus/>
        
      </div>

      {/* cta button component */}      
      <Button/>

    </div>
  );
};
