import { Text } from '@chakra-ui/react';

const About = () => {
  return (
    <>
      <Text fontSize="2xl" p={5}>About Us Page</Text>
      {/* Text font size adjusts based on screen size for better readability on various devices */}
      <Text fontSize={{ base: "16px", md: "18px", lg: "20px" }} p={3}>Our brand is committed to sustainability and stylish, modern clothing.</Text>
    </>
  );
};

export default About;