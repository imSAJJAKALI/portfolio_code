import React from 'react';
import { Box, Flex, Link, Icon, HStack, Text, useColorModeValue, Heading } from '@chakra-ui/react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box  bg={useColorModeValue('white', 'gray.800')}  py={20} id="contact">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Heading fontSize="lg">Contact Me</Heading>
        <Text fontSize="md" mt={10}>
          Contact Number - <Link href="tel:+919598839695">+91 9598839695</Link>
        </Text>
        <Text fontSize="md" mt={2}>
          Email Address -{' '}
          <Link href="mailto:sajjak2506@gmail.com">sajjak2506@gmail.com</Link>
        </Text>
        <Text fontSize="md" mt={2}>
          Address - Gorakhpur, Uttar Pradesh, Pincode - 273158
        </Text>
      </Flex>
      <HStack spacing={4} justifyContent="center" mt={4}>
        <Link href="mailto:sajjak2506@gmail.com" isExternal>
          <Icon as={FaEnvelope} boxSize={6} />
        </Link>
        <Link href="https://www.linkedin.com/in/sajjak-ali-8696a4223/" isExternal>
          <Icon as={FaLinkedin} boxSize={6} />
        </Link>
        <Link href="https://github.com/imSAJJAKALI" isExternal>
          <Icon as={FaGithub} boxSize={6} />
        </Link>
      </HStack>
    </Box>
  );
};

export default Footer;
