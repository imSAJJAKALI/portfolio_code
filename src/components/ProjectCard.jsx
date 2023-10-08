import React from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  Link,
  Stack,
  Icon,
  HStack,
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, imageUrl,techstack, projectUrl, githubUrl }) => {
 console.log(imageUrl)
    return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      shadow="lg"
      transition="transform 0.2s ease"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Image src={imageUrl} alt={title} maxH="200px" />
      <Box p="6">
        <Stack spacing={3}>
          <Heading fontSize="xl">{title}</Heading>
          <Text fontSize="sm">{description}</Text>
          <Text fontSize="sm" color="gray.500">
            Technologies: {techstack}
          </Text>
        </Stack>
        <HStack spacing={3} mt={4} justifyContent={"space-between"} >
          <Link
            href={projectUrl}
            isExternal
            color="teal.500"
            _hover={{ color: 'teal.600' }}
          >
            <Icon as={FaExternalLinkAlt} />
             View Demo
          </Link>
          <Link
            href={githubUrl}
            isExternal
            color="gray.500"
            _hover={{ color: 'gray.600' }}
          >
            <Icon as={FaGithub} />
             GitHub Repo
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProjectCard;
