import { Stack, Heading } from "@chakra-ui/core";

export default function Home() {
  return (
    <Stack spacing={6}>
      <Heading as="h1" size="4xl" isTruncated>
        (4xl) In love with React & Next
      </Heading>
      <Heading as="h2" size="3xl" isTruncated>
        (3xl) In love with React & Next
      </Heading>
      <Heading as="h2" size="2xl">
        (2xl) In love with React & Next
      </Heading>
      <Heading as="h2" size="xl">
        (xl) In love with React & Next
      </Heading>
      <Heading as="h3" size="lg">
        (lg) In love with React & Next
      </Heading>
      <Heading as="h4" size="md">
        (md) In love with React & Next
      </Heading>
      <Heading as="h5" size="sm">
        (sm) In love with React & Next
      </Heading>
      <Heading as="h6" size="xs">
        (xs) In love with React & Next
      </Heading>
    </Stack>
  );
}
