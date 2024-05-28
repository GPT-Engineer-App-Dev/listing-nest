import { Container, Text, VStack, Heading, Box, Button, HStack, Input, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [jobs, setJobs] = useState([]);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const addJob = () => {
    if (jobTitle && jobDescription) {
      setJobs([...jobs, { title: jobTitle, description: jobDescription }]);
      setJobTitle("");
      setJobDescription("");
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={6}>Job Listing Website</Heading>
        <Box width="100%" p={4} borderWidth="1px" borderRadius="lg">
          <VStack spacing={4}>
            <Input
              placeholder="Job Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
            <Textarea
              placeholder="Job Description"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
            <Button colorScheme="blue" onClick={addJob}>Add Job</Button>
          </VStack>
        </Box>
        <Box width="100%" mt={6}>
          <Heading as="h2" size="lg" mb={4}>Job Listings</Heading>
          {jobs.length === 0 ? (
            <Text>No job listings available.</Text>
          ) : (
            jobs.map((job, index) => (
              <Box key={index} p={4} borderWidth="1px" borderRadius="lg" mb={4}>
                <Heading as="h3" size="md">{job.title}</Heading>
                <Text mt={2}>{job.description}</Text>
              </Box>
            ))
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;