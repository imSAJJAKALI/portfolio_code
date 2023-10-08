import React from 'react';
import {
  Box,
  Center,
  Grid,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import ProjectCard from '../components/ProjectCard';
import find_my_trip from '../components/images/find_my_trip.jpg';
import quickby from '../components/images/quickby.jpg';
import crocs from '../components/images/crocs.jpg';
import belk from '../components/images/Belk_clone.png';
import triptravel from '../components/images/triptravel.jpg';

const projects_data = [
  {
    title: "Find My Trip",
    description: "Cloning of a Travel web application that provides a platform where we can book good tourism packages and resorts.",
    imageUrl: find_my_trip,
    techstack: "React, ChakraUI, Json-Server, NodeJS, Express, Typescript, Firebase",
    projectUrl: "https://findmytrip.netlify.app/",
    githubUrl: "https://github.com/imSAJJAKALI/Find_My_Trip"
  },
  {
    title: "Quick Buy",
    description: "Cloning of Quick Buy Its a web application that provides a platform to buy Fashion Products .It a user friendly E Commerce Website.",
    imageUrl: quickby,
    techstack: "JavaScript, HTML, CSS, React, Chakra UI",
    projectUrl: "https://clever-sunshine-800676.netlify.app/",
    githubUrl: "https://github.com/imSAJJAKALI/Quick_Buy"
  },
  {
    title: "Crocs",
    description: "Cloning of Crocs Its a web application that provides a platform to buy Shoes,Sleeper.It a user friendly E Commerce Website",
    imageUrl: crocs,
    techstack: "React, ChakraUI, Json-Server, NodeJS, Express, Typescript, Firebase",
    projectUrl: "https://delicate-belekoy-6a378c.netlify.app/",
    githubUrl: "https://github.com/imSAJJAKALI/flashy-burst-4121"
  },
  {
    title: "Belk Clone",
    description: "Cloning of Belk Its a web application that provides a platform to buy fashion clothes products.It a user friendly E Commerce Website.",
    imageUrl: belk,
    techstack: "HTML, CSS, JavaScript",
    projectUrl: "https://adorable-praline-6d38b5.netlify.app/index.html",
    githubUrl: "https://github.com/0x-Sarthak/teeny-wool-9254"
  },
  {
    title: "Trip Travel",
    description: "Cloning of Trip Travel Its a web application that provides a platform to book Tour Package .It a user friendly E Commerce Website",
    imageUrl: triptravel,
    techstack: "HTML, CSS, JavaScript",
    projectUrl: "https://adorable-praline-6d38b5.netlify.app/index.html",
    githubUrl: "https://github.com/0x-Sarthak/teeny-wool-9254"
  },
  // Add more project data objects as needed
];

const Project = () => {
  return (
    <Box p={6} id='projects' margin={{base:1,md:5,lg:20}} mt={-5}>
      <Center mb={10}>
        <Heading as="h1" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
          Projects
        </Heading>
      </Center>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={6}
        justifyContent="center"
      >
        {projects_data.map((el, index) => (
          <ProjectCard key={index} {...el} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Project;
