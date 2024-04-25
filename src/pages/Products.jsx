import { Box, Text, Image, Flex } from '@chakra-ui/react';

const products = [
  {
    id: 1,
    name: 'Trendy T-Shirt',
    price: '25.00',
    image: '/images/tshirt1.jpg',
    description: 'A trendy t-shirt perfect for every occasion.'
  },
  {
    id: 2,
    name: 'Stylish Jeans',
    price: '40.00',
    image: '/images/jeans1.jpg',
    description: 'Comfortable and stylish jeans that fit well with any shirt.'
  },
  {
    id: 3,
    name: 'Classic Jacket',
    price: '60.00',
    image: '/images/jacket1.jpg',
    description: 'A classic jacket to keep you warm and stylish.'
  }
];

const Products = () => {
  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={4}>Our Products</Text>
      {products.map(product => (
        <Flex key={product.id} p={5} shadow="md" borderWidth="1px" direction="column" mb={4}>
          <Image borderRadius="md" src={product.image} alt={product.name} boxSize={{ base: "100%", sm: "80%", md: "60%" }} />
          <Text fontWeight="bold" mt={2}>{product.name}</Text>
          <Text>{product.description}</Text>
          <Text>${product.price}</Text>
        </Flex>
      ))}
    </Box>
  );
};

export default Products;