import express from 'express';

const app = express();


const products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 15.99 },
  { id: 3, name: 'Product 3', price: 20.99 },
  { id: 4, name: 'Product 4', price: 25.99 },
  { id: 5, name: 'Product 5', price: 30.99 },
  { id: 6, name: 'Product 6', price: 35.99 },
  { id: 7, name: 'Product 7', price: 40.99 },
  { id: 8, name: 'Product 8', price: 45.99 },
  { id: 9, name: 'Product 9', price: 50.99 },
  { id: 10, name: 'Product 10', price: 55.99 },
];


app.get('/api/products', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 5; 
    const offset = parseInt(req.query.offset) || 0; 

    if (limit < 1 || offset < 0) {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid limit or offset values.'
    })
    }

    const paginatedProducts = products.slice(offset, offset + limit);

    res.json({
        success: true,
        data: {
            total: products.length,
            limit,
            offset,
            products: paginatedProducts,
          }
    });
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({ 
        success: false,
        error: 'Internal Server Error'
    });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
