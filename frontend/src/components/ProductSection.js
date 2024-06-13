import React from 'react'
import porimage from '../assets/4.jpg';
import ProductCard from '../components/ProductCard'

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: 'Carrot',
      description: 'Fresh organic carrots.',
      image: porimage,
    },
    {
      id: 2,
      name: 'Apple',
      description: 'Crispy and sweet apples.',
      image: porimage,
    },
    {
      id: 3,
      name: 'Banana',
      description: 'Ripe and delicious bananas.',
      image: porimage,
    },];
  return (
    <div className="container mx-auto px-4 font-poppins">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
  )
}

export default ProductSection
