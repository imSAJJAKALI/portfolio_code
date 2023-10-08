import React from 'react'
import { Box, HStack, Image, Text, useColorModeValue } from '@chakra-ui/react'

const Skillgrid = ({ image, name }) => {
  return (
    <HStack
      boxShadow='lg'
      p='6'
      rounded='lg'
      bg={useColorModeValue('"whiteAlpha.900"', 'gray.800')}
     
      _hover={{
        boxShadow: 'xl',
        bg: 'blue.200',
        transform: 'scale(1.05)',
        transition: 'all 0.3s ease',
      }}
      cursor="pointer" // Add a pointer cursor on hover
    >
      <Image src={image} height={10} width={10} />
      <Text  >{name}</Text>
    </HStack>
  )
}

export default Skillgrid
