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
          With over 1200+ hours of practical coding experience in HTML, CSS,
          JavaScript, React.js, and TypeScript I am a passionate Full Stack
          Developer dedicated to delivering exceptional digital experiences. I
          thrive in collaborative, interdisciplinary teams, executing
          goal-oriented projects that enhance the product experience. Agile
          methodologies and excellent project management skills drive my
          success. A motivated, skilled, and team-oriented developer, I am an
          ideal candidate for any software development team seeking excellence.
        </Text>
      </Box>
    </Container>
  );
};

export default AboutMe;
