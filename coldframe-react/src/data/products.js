export const categories = [
  { id: 'hot-coffee', name: 'Hot Coffee', slug: 'hot-coffee' },
  { id: 'cold-coffee', name: 'Cold Coffee', slug: 'cold-coffee' },
  { id: 'pastries', name: 'Pastries', slug: 'pastries' },
  { id: 'snacks', name: 'Snacks', slug: 'snacks' }
];

export const products = [
  {
    id: 1,
    name: 'Espresso',
    category: 'hot-coffee',
    price: 3.5,
    description: 'Rich and bold single or double shot of espresso',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=rich%20bold%20espresso%20coffee%20in%20small%20cup%2C%20cafe%20style&image_size=square_hd',
    inStock: true
  },
  {
    id: 2,
    name: 'Cappuccino',
    category: 'hot-coffee',
    price: 4.5,
    description: 'Perfectly balanced espresso with steamed milk and foam',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cappuccino%20coffee%20with%20latte%20art%20in%20ceramic%20cup%2C%20cafe%20atmosphere&image_size=square_hd',
    inStock: true
  },
  {
    id: 3,
    name: 'Iced Latte',
    category: 'cold-coffee',
    price: 5.0,
    description: 'Smooth espresso with cold milk over ice',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=iced%20latte%20coffee%20in%20tall%20glass%20with%20straw%2C%20cafe%20drink&image_size=square_hd',
    inStock: true
  },
  {
    id: 4,
    name: 'Cold Brew',
    category: 'cold-coffee',
    price: 4.75,
    description: 'Slow-steeped cold brew coffee for 12 hours',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=cold%20brew%20coffee%20in%20glass%20bottle%20and%20cup%20with%20ice%2C%20cafe%20style&image_size=square_hd',
    inStock: true
  },
  {
    id: 5,
    name: 'Croissant',
    category: 'pastries',
    price: 3.25,
    description: 'Buttery, flaky French croissant',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=golden%20buttery%20croissant%20on%20plate%2C%20cafe%20pastry&image_size=square_hd',
    inStock: true
  },
  {
    id: 6,
    name: 'Chocolate Muffin',
    category: 'pastries',
    price: 3.0,
    description: 'Rich chocolate chip muffin, freshly baked',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=chocolate%20muffin%20with%20chocolate%20chips%2C%20cafe%20pastry&image_size=square_hd',
    inStock: true
  },
  {
    id: 7,
    name: 'Bagel with Cream Cheese',
    category: 'snacks',
    price: 4.0,
    description: 'Fresh bagel with plain or flavored cream cheese',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=bagel%20with%20cream%20cheese%20on%20plate%2C%20cafe%20breakfast&image_size=square_hd',
    inStock: true
  },
  {
    id: 8,
    name: 'Cookie',
    category: 'snacks',
    price: 2.0,
    description: 'Warm chocolate chip cookie',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=warm%20chocolate%20chip%20cookie%2C%20cafe%20snack&image_size=square_hd',
    inStock: true
  }
];
