import { Box, Text, Image } from '@chakra-ui/react';

const products = [
  { id: 1, name: 'Trendy T-Shirt', price: '25.00', image: '/images/tshirt1.jpg' },
  { id: 2, name: 'Stylish Jeans', price: '40.00', image: '/images/jeans1.jpg' },
  { id: 3, name: 'Classic Jacket', price: '60.00', image: '/images/jacket1.jpg' }
];

const Products = () => {
  return (
    {products.map(product => (
      <Box key={product.id} p={5} shadow="md" borderWidth="1px">
        <Image borderRadius="md" src={product.image} alt={product.name} />
        <Text fontWeight="bold">{product.name}</Text>
        <Text>Description of the product here...</Text>
        <Text>${product.price}</Text>
      </Box>
    ))}
  );
};

export default Products;