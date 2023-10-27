import { Box, Text, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';

const GitHubStats = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} p={4} borderRadius="md" boxShadow="lg" id='github'>
      <Text fontSize="xl" mb={4}>
        📊 GitHub Stats:
      </Text>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center" mb={4}>
        <Image
          src="https://github-readme-stats.vercel.app/api?username=imSAJJAKALI&theme=highcontrast&hide_border=false&include_all_commits=true&count_private=true"
          alt="GitHub Stats"
          borderRadius="md"
          boxShadow="md"
        />
      </Flex>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center" mb={4}>
        <Image
          src="https://github-readme-streak-stats.herokuapp.com/?user=imSAJJAKALI&theme=highcontrast&hide_border=false"
          alt="GitHub Streak Stats"
          borderRadius="md"
          boxShadow="md"
        />
      </Flex>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
        <Image
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=imSAJJAKALI&theme=highcontrast&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
          alt="Top Languages"
          borderRadius="md"
          boxShadow="md"
        />
      </Flex>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
      <GitHubCalendar width={"100%"} fill={useColorModeValue('gray.100', 'gray.900')} style={{color: useColorModeValue('gray.100', 'gray.900'), margin:"auto", padding:"20px"  }} className="cla" colorScheme={"light"}  username="imSAJJAKALI" />
      </Flex>
    </Box>
  );
};

export default GitHubStats;
