import { Container, Text, VStack, Heading, Box, Button, Input, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [jobs, setJobs] = useState([]);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [resume, setResume] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const toast = useToast();

  const addJob = () => {
    if (jobTitle && jobDescription && companyName && location && salary) {
      setJobs([...jobs, { title: jobTitle, description: jobDescription, companyName, location, salary }]);
      setJobTitle("");
      setJobDescription("");
      setCompanyName("");
      setLocation("");
      setSalary("");
    }
  };

  const applyForJob = (job) => {
    setSelectedJob(job);
  };

  const submitApplication = () => {
    if (applicantName && applicantEmail && applicantPhone && resume) {
      // Simulate sending application to job poster
      console.log("Application submitted for job:", selectedJob);
      console.log("Applicant details:", { applicantName, applicantEmail, applicantPhone, resume });

      // Reset form fields
      setApplicantName("");
      setApplicantEmail("");
      setApplicantPhone("");
      setResume(null);
      setSelectedJob(null);

      toast({
        title: "Application submitted.",
        description: "Your application has been sent to the job poster.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
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
            <Input
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <Input
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Input
              placeholder="Salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
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
                <Text mt={2}><strong>Company:</strong> {job.companyName}</Text>
                <Text mt={2}><strong>Location:</strong> {job.location}</Text>
                <Text mt={2}><strong>Salary:</strong> {job.salary}</Text>
                <Text mt={2}>{job.description}</Text>
                <Button colorScheme="green" mt={4} onClick={() => applyForJob(job)}>Apply</Button>
              </Box>
            ))
          )}
        </Box>
        {selectedJob && (
          <Box width="100%" mt={6} p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h2" size="lg" mb={4}>Apply for {selectedJob.title}</Heading>
            <VStack spacing={4}>
              <Input
                placeholder="Name"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
              />
              <Input
                placeholder="Email"
                value={applicantEmail}
                onChange={(e) => setApplicantEmail(e.target.value)}
              />
              <Input
                placeholder="Phone Number"
                value={applicantPhone}
                onChange={(e) => setApplicantPhone(e.target.value)}
              />
              <Input
                type="file"
                onChange={(e) => setResume(e.target.files[0])}
              />
              <Button colorScheme="blue" onClick={submitApplication}>Submit Application</Button>
            </VStack>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;