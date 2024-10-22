import { PrismaClient } from '@prisma/client';
// Update the import statement to use the new package
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();
async function main(): Promise<void> {
  for (let i = 0; i < 10; i++) { // Adjust the number of records as needed
    await prisma.product.create({
      data: {
        title: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        price: parseFloat(faker.commerce.price()),
        stock: faker.number.int({ min: 0, max: 100 }), // Corrected method call
      
      },
    });
  }
}

main()
  .catch((e: Error) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });