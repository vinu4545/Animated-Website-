export const coffeeProducts = [
  // Cold Coffee Variants
  { name: "Cold Coffee", prompt: "rich cold coffee in glass, cafe style" },
  { name: "Iced Coffee", prompt: "iced coffee with ice cubes in tall glass, cafe drink" },
  { name: "Classic Cold Coffee", prompt: "classic cold coffee in glass with cream, cafe beverage" },
  { name: "Cold Coffee with Ice Cream", prompt: "cold coffee with scoop of vanilla ice cream on top" },
  { name: "Chocolate Cold Coffee", prompt: "chocolate cold coffee with whipped cream and chocolate syrup" },
  { name: "Hazelnut Cold Coffee", prompt: "hazelnut cold coffee with hazelnut syrup and crushed nuts" },
  { name: "Caramel Cold Coffee", prompt: "caramel cold coffee with caramel drizzle and whipped cream" },
  { name: "Vanilla Cold Coffee", prompt: "vanilla cold coffee in glass, creamy and smooth" },
  { name: "Mocha Cold Coffee", prompt: "mocha cold coffee with chocolate and coffee flavors" },
  { name: "Oreo Cold Coffee", prompt: "oreo cold coffee with crushed oreo cookies on top" },
  { name: "KitKat Cold Coffee", prompt: "kitkat cold coffee with kitkat pieces in glass" },
  { name: "Irish Cold Coffee", prompt: "irish cold coffee with whiskey and whipped cream" },
  { name: "Butterscotch Cold Coffee", prompt: "butterscotch cold coffee with butterscotch syrup and nuts" },
  
  // Iced & Specialty Coffee
  { name: "Iced Americano", prompt: "iced americano coffee in clear glass with ice" },
  { name: "Iced Latte", prompt: "iced latte coffee with milk in tall glass" },
  { name: "Iced Cappuccino", prompt: "iced cappuccino with foam and cinnamon" },
  { name: "Iced Mocha", prompt: "iced mocha coffee with chocolate sauce" },
  { name: "Iced Caramel Latte", prompt: "iced caramel latte with caramel drizzle" },
  { name: "Iced Vanilla Latte", prompt: "iced vanilla latte with vanilla syrup" },
  { name: "Cold Brew Coffee", prompt: "cold brew coffee in glass bottle and cup with ice" },
  { name: "Nitro Cold Brew", prompt: "nitro cold brew coffee with creamy foam head" },
  
  // Frappes & Blended Drinks
  { name: "Coffee Frappe", prompt: "coffee frappe blended with ice and whipped cream" },
  { name: "Caramel Frappe", prompt: "caramel frappe blended drink with caramel syrup" },
  { name: "Mocha Frappe", prompt: "mocha frappe blended with chocolate and coffee" },
  { name: "Chocolate Frappe", prompt: "chocolate frappe blended with ice and chocolate sauce" },
  { name: "Java Chip Frappe", prompt: "java chip frappe with chocolate chips" },
  
  // Non-Coffee Cold Café Drinks
  { name: "Iced Chocolate", prompt: "iced chocolate drink in glass with whipped cream" },
  { name: "Cold Cocoa", prompt: "cold cocoa drink in glass, rich and chocolatey" },
  { name: "Chocolate Milkshake", prompt: "thick chocolate milkshake in tall glass" },
  { name: "Vanilla Milkshake", prompt: "creamy vanilla milkshake with whipped cream" },
  { name: "Strawberry Milkshake", prompt: "strawberry milkshake with fresh strawberries" },
  { name: "Oreo Shake", prompt: "oreo milkshake with crushed oreo cookies" },
  { name: "Mango Shake", prompt: "mango milkshake with fresh mangoes, tropical drink" }
];

export function getCafeImageUrl(prompt) {
  const encodedPrompt = encodeURIComponent(prompt + ", professional food photography, cafe aesthetic, high quality, appetizing");
  return `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodedPrompt}&image_size=square_hd`;
}
