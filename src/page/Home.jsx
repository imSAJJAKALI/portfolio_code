import {
    Box,
    Heading,
    Text,
    Flex,
    Icon,
    Link,
    Image,
    Button,
    HStack,
    VStack,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { EmailIcon, DownloadIcon } from "@chakra-ui/icons";
  import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import Font Awesome icons
  
  export default function Home() {
    const handleDownloadResume = () => {
      // Replace with the actual path to your resume PDF file
      const resumeUrl = "\sajjak-ali-resume.pdf";
      const link = document.createElement("a");
      link.href = resumeUrl;
      link.download = "Sajjak-Ali-Resume.pdf";
      link.click();
    };
  
    return (
      <Box minH="90vh" py={{base:"80px",md:"170px"}} px={4} bg={useColorModeValue('gray.100', 'gray.900')} id="home">
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          justifyContent="space-evenly"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box
            order={{ base: 2, md: 1 }}
            flex={{ base: "0 0 100%", md: "0 0 auto" }}
            ml={{ base: 0, md: 8 }}
            mb={{ base: 8, md: 0 }}
            maxW={{ base: "100%", md: "50%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <VStack alignItems={{base:"center",md:"start"}} spacing={4}>
              <Heading as="h1"  fontSize={{ base: "2xl", md: "4xl" }}>
                Hello, it's Me
              </Heading>
              <Heading fontSize={{ base: "4xl", md: "6xl" }} >Sajjak Ali</Heading>
              <Heading fontSize={{ base: "1.5xl", md: "2xl" }} >And I'm a</Heading>
              <Box alignItems={{base:"center",md:"start"}}>

              <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=700&size=27&pause=1000&color=1450A3&width=457&height=62&lines=Full+Stack+Web+Developer;Front+End+Developer;ReactJS+Developer;MERN+Stack+Developer" alt="Typing SVG" /></a>
              </Box>
             
              <HStack spacing={4}>
                <Link href="mailto:sajjak2506@gmail.com">
                  <EmailIcon
                    boxSize={{ base: 6, md: 8 }}
                    color="blue.500"
                    _hover={{ color: "blue.700" }}
                  />
                </Link>
                <Link href="https://github.com/imSAJJAKALI" target="_blank">
                  <Icon
                    as={FaGithub}
                    boxSize={{ base: 6, md: 8 }}
                    color="blue.500"
                    _hover={{ color: "blue.700" }}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/sajjak-ali-8696a4223/"
                  target="_blank"
                >
                  <Icon
                    as={FaLinkedin}
                    boxSize={{ base: 6, md: 8 }}
                    color="blue.500"
                    _hover={{ color: "blue.700" }}
                  />
                </Link>
              </HStack>
              <Box id="resume-button-2" mt={4}>
                <Button
                  onClick={handleDownloadResume}
                  colorScheme="blue"
                  backgroundColor="#1450A3"
                >
                <a target="_blank" href="https://drive.google.com/file/d/1-iiaCwvaytlakUa2JmpTD0DDWKQprSxR/view?usp=sharing"> Resume <DownloadIcon boxSize={5} ml={2} /></a> 
                </Button>
              </Box>
            </VStack>
          </Box>
          <Box
            order={{ base: 1, md: 2 }}
            flex={{ base: "0 0 100%", md: "0 0 auto" }}
            mr={{ base: 0, md: 8 }}
            maxW={{ base: "100%", md: "50%" }}
          >
            <Image
              src="https://avatars.githubusercontent.com/u/112471219?s=400&u=d4b2546725e392520e1695d151caa622abec06d1&v=4"
              alt="Profile"
              boxSize={{ base: "200px", md: "300px" }}
              borderRadius="full"
              boxShadow="xl"
              
            />
          </Box>
        </Flex>
      </Box>
    );
  }
  