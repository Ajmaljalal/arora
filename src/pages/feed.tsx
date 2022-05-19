import { Box, Input } from '@chakra-ui/react'
import Head from 'next/head'
import React, { useState } from 'react'
import BodyLayout from '../components/layouts/body/body-layout'

type NewsFeedProps = {}

const Feed = ({ }: NewsFeedProps) => {
  const [isCreatePost, setCreatePost] = useState(false)

  const handleOnFocus = () => {
    setCreatePost(!isCreatePost)
  }

  return (
    <Box>
      <Head>
        <title>Job Portal News Feed</title>
        <meta name="description" content="Job vacancies, Jobs near me, Web developer jobs, react developer jobs, full stack developer jobs" />
      </Head>
      <BodyLayout>
        <Box maxWidth='700px' m='0 auto'>
          <Box p='10px' bg='brand.white' boxShadow='1px 1px 10px lightgray' borderRadius='4px'>
            <Input
              placeholder='Create Post'
              border='1px solid'
              borderColor='brand.grey300'
              boxSizing='border-box'
              colorScheme='brand.black'
              cursor='pointer'
              bg='brand.grey100'
              _placeholder={{ color: 'brand.grey500' }}
              _hover={{ borderColor: 'brand.grey500' }}
              onFocus={handleOnFocus}
            />
          </Box>
        </Box>
      </BodyLayout>
    </Box>
  )
}

export default Feed