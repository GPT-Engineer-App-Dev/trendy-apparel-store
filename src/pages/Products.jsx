import { Text } from '@chakra-ui/react';

const Products = () => {
  return (
    <Box key={product.id} p={5} shadow="md" borderWidth="1px">
      <Image borderRadius="md" src={product.image} alt={product.name} />
      <Text fontWeight="bold">{product.name}</Text>
      <Text>Description of the product here...</Text>
      <Text>${product.price}</Text>
    </Box>
  );
};

export default Products;