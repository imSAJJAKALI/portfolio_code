import { Box, Center, Grid, Heading, Image, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Skillgrid from '../components/Skillgrid';

// Import images
import html from '../components/images/html.png';
import css from '../components/images/css.png';
import javascript from '../components/images/js.png';
import react from '../components/images/react.png';
import typescript from '../components/images/typescript.png';
import mongodb from '../components/images/mongodb-original.svg';
import nodejs from '../components/images/nodejs-original.svg';
import python from '../components/images/python-svg-1.png';
import flask from '../components/images/flask.png';
import express from '../components/images/express-js.png';
import sql from '../components/images/sql.webp';
import langchain from '../components/images/langchain.png';
import angular from '../components/images/angular.png';
import vscode from '../components/images/vscode.png';
import git from '../components/images/git.jpg';
import netlify from '../components/images/netlify.jpg';
import render from '../components/images/render-logo-wordmark.png';
import openai from '../components/images/png-transparent-openai-chatgpt-logo.png';

const skills_data = [
  { image: html, name: "HTML" },
  { image: css, name: "CSS" },
  { image: javascript, name: "JavaScript" },
  { image: react, name: "React" },
  { image: typescript, name: "TypeScript" },
  { image: angular, name: "Angular" },
  { image: mongodb, name: "MongoDB" },
  { image: express, name: "Express.js" },
  { image: nodejs, name: "Node.js" },
  { image: python, name: "Python" },
  { image: flask, name: "Flask" },
  { image: sql, name: "Sql" },
  { image: openai, name: "Opean AI" },
  { image: langchain, name: "LangChain" },
  { image: vscode, name: "Visual Studio Code" },
  { image: git, name: "Git" },
  { image: netlify, name: "Netlify" },
  { image: render, name: "Render" },

];

const Skills = () => {
  return (
    <Box p={20} id='skills' bg={useColorModeValue('gray.100', 'gray.900')} >
      <Center mb={10}>
        <Heading as="h1" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>Skills & Abilities</Heading>
      </Center>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)",sm:"repeat(2,1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(5, 1fr)" }}
        gap={{ base: 4, md: 6, lg: 8 }}
        justifyContent="center"
      >
        {skills_data.map((el, index) => (
          <Skillgrid key={index} image={el.image} name={el.name} />
        ))}
      </Grid>
    </Box>
  )
}

export default Skills;
