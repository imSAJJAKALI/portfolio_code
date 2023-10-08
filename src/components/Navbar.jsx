import React, { useState } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  extendTheme,
  CSSReset,
  ChakraProvider,
  theme,
  ColorModeProvider,
  useColorMode,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';
import {BsSunFill,BsMoon} from 'react-icons/bs'

const Links = ["Home", "About", "Skills", "Projects", "GitHub", "Contact"];



export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    onClose();
  };

  return (
    
     
       
        <Box
        bg={useColorModeValue('white', 'gray.800')}
          px={4}
          position="fixed"
          top={0}
          left={0}
          right={0}
          width="100%"
          zIndex={999}
        >
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Text fontWeight={"800"} fontSize={"large"}>SAJJAK ALI</Text>
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <ScrollLink
                    key={link}
                    to={link.toLowerCase()} // Match the ID of the sections
                    spy={true}
                    smooth={true} // Enable smooth scrolling
                    offset={-70}
                    duration={500} // Control the scroll duration
                    onClick={() => handleLinkClick(link)}
                  >
                    <a href={link}><b>{link}</b></a>
                  </ScrollLink>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              {/* <Avatar
                size={'sm'}
                src={'https://avatars.githubusercontent.com/u/112471219?s=96&v=4'}
              /> */}
              <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? <BsMoon/> : <BsSunFill/>}
      </Button>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <ScrollLink
                    key={link}
                    to={link.toLowerCase()} // Match the ID of the sections
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => handleLinkClick(link)}
                  >
                    <a href={link}>{link}</a>
                  </ScrollLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
     
   
  );
};

export default Navbar;
