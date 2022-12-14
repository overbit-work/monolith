/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Discount, Product, Promotion, User } from "@prisma/client";

export class DiscountServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DiscountFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscountFindManyArgs>
  ): Promise<number> {
    return this.prisma.discount.count(args);
  }

  async findMany<T extends Prisma.DiscountFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscountFindManyArgs>
  ): Promise<Discount[]> {
    return this.prisma.discount.findMany(args);
  }
  async findOne<T extends Prisma.DiscountFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscountFindUniqueArgs>
  ): Promise<Discount | null> {
    return this.prisma.discount.findUnique(args);
  }
  async create<T extends Prisma.DiscountCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscountCreateArgs>
  ): Promise<Discount> {
    return this.prisma.discount.create<T>(args);
  }
  async update<T extends Prisma.DiscountUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscountUpdateArgs>
  ): Promise<Discount> {
    return this.prisma.discount.update<T>(args);
  }
  async delete<T extends Prisma.DiscountDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DiscountDeleteArgs>
  ): Promise<Discount> {
    return this.prisma.discount.delete(args);
  }

  async findProduct(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<Product[]> {
    return this.prisma.discount
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .product(args);
  }

  async findPromotions(
    parentId: string,
    args: Prisma.PromotionFindManyArgs
  ): Promise<Promotion[]> {
    return this.prisma.discount
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .promotions(args);
  }

  async findUser(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.discount
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .user(args);
  }
}
