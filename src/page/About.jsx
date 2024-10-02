import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';

const AboutMe = () => {
  return (
    <Container maxW="container.md" py={8} id='about'>
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        px={8}
        py={12}
        borderRadius="lg"
        boxShadow="lg"
      >
        <Heading as="h1" fontSize="4xl" mb={4}>
          About Me!
        </Heading>
        <Text fontSize="xl" mb={4}>
          I'm Sajjak Ali
        </Text>
        <Text fontSize="xl" mb={4}>
          Full Stack Web Developer
        </Text>
        <Divider my={4} />
        <Text fontSize="lg" mb={4}>
        A highly motivated Full Stack Developer with a focus on front-end development, specializing in React, JavaScript, and CSS. With 6 months of experience at Cnetric Global Inc,  worked on over 10 e-commerce projects, delivering responsive and visually appealing interfaces. Committed to continuous learning, I strive to bring efficiency and innovation to product-driven companies.
        </Text>
      </Box>
    </Container>
  );
};

export default AboutMe;
