import React, { useState } from "react";
import { HStack } from "@chakra-ui/react";
import StarIcon from "./star-icon";

const RatingView = ({ rating }: any) => {
  const buttons = [];

  const RatingButton = ({ idx }) => {
    return (
      <StarIcon color={rating >= idx ? '#f7ca07' : 'lightGray'} />
    );
  };

  for (let i = 1; i <= 5; i++) {
    buttons.push(<RatingButton key={i} idx={i} />);
  }

  return (
    <HStack spacing={1}>
      {buttons}
    </HStack>
  );
}

export default RatingView;
