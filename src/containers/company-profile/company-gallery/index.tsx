import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import { BaseButton } from '../../../components/buttons/button'

type GalleryProps = {
  images: string[]
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <>
      <Flex justifyContent='flex-end'>
        <BaseButton text='Upload image' color='brand.white' bg='brand.secondary' onClick={() => console.log('uploading')} />
      </Flex>
      <Box sx={{ columnCount: [1, 2, 3, 4], columnGap: "8px" }} mt='16px'>
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
    </>
  )
}

export default Gallery