import { Box, Flex, Text, Button, Image, SimpleGrid, Heading } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Trendy T-Shirt',
    price: '25.00',
    image: '/images/tshirt1.jpg'
  },
  {
    id: 2,
    name: 'Stylish Jeans',
    price: '40.00',
    image: '/images/jeans1.jpg'
  },
  {
    id: 3,
    name: 'Classic Jacket',
    price: '60.00',
    image: '/images/jacket1.jpg'
  }
];

const Index = () => {
  const [cart, setCart] = useState([]);

  return (
    <Box p={5}>
      <Flex direction={{ base: "column", sm: "row" }} wrap="wrap" justifyContent="space-between" mb={5}>
        
        <Button as={Link} to="/products">Products</Button>
        <Button as={Link} to="/about">About Us</Button>
        <Flex align="center">
          <FaShoppingCart />
          <Text ml={2}>{cart.length}</Text>
        </Flex>
      </Flex>
      <Heading as="h1" size="xl" textAlign="center" mb={6} fontSize={{ base: "24px", md: "30px", lg: "36px" }}>Welcome to Our Fashion Store</Heading>
      {/* Responsive grid layout for product display */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {products.map(product => (
          <Box key={product.id} p={5} shadow="md" borderWidth="1px">
            <Image borderRadius="md" src={product.image} alt={product.name} />
            <Flex align="center" mt={2} justifyContent="space-between">
              <Text fontWeight="bold">{product.name}</Text>
              <Text>${product.price}</Text>
            </Flex>
            <Button leftIcon={<FaShoppingCart />} colorScheme="blue" variant="solid" w="full" mt={2} onClick={() => setCart([...cart, product])}>
              Add to Cart
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;