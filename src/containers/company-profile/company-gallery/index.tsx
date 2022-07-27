import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import { BaseButton } from '../../../components/buttons/button'

type GalleryProps = {
  images: string[]
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <Box sx={{ columnCount: [1, 2, 3, 4], columnGap: "8px" }}>
      {images?.map(image => {
        return (
          <Image
            key={image}
            w="100%"
            borderRadius="4px"
            mb={2}
            d="inline-block"
            src={image}
            alt="Alt"
            loading='lazy'
          />
        )
      })}
    </Box>
  )
}

export default Gallery