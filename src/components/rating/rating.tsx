import React, { useState } from "react";
import { HStack } from "@chakra-ui/react";
import StarIcon from "./star-icon";

const Rating = ({ scale, onClick }: any) => {
  const [rating, setRating] = useState(0);
  const stars = [];

  const handleOnclick = idx => {
    if (!isNaN(idx)) {
      // allow user to click first icon and set rating to zero if rating is already 1
      if (rating === 1 && idx === 1) {
        setRating(0);
        onClick(0)
      } else {
        setRating(idx);
        onClick(idx)
      }
    }
  };

  const RatingButton = ({ idx }) => {
    return (
      <StarIcon color={rating >= idx ? '#f7ca07' : 'lightGray'} onClick={() => handleOnclick(idx)} />
    );
  };

  for (let i = 1; i <= scale; i++) {
    stars.push(<RatingButton key={i} idx={i} />);
  }

  return (
    <HStack spacing={1}>
      {stars}
    </HStack>
  );
}

export default Rating;
