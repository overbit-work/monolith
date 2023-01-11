/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Promotion, Discount } from "@prisma/client";

export class PromotionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PromotionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromotionFindManyArgs>
  ): Promise<number> {
    return this.prisma.promotion.count(args);
  }

  async findMany<T extends Prisma.PromotionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromotionFindManyArgs>
  ): Promise<Promotion[]> {
    return this.prisma.promotion.findMany(args);
  }
  async findOne<T extends Prisma.PromotionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromotionFindUniqueArgs>
  ): Promise<Promotion | null> {
    return this.prisma.promotion.findUnique(args);
  }
  async create<T extends Prisma.PromotionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromotionCreateArgs>
  ): Promise<Promotion> {
    return this.prisma.promotion.create<T>(args);
  }
  async update<T extends Prisma.PromotionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromotionUpdateArgs>
  ): Promise<Promotion> {
    return this.prisma.promotion.update<T>(args);
  }
  async delete<T extends Prisma.PromotionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PromotionDeleteArgs>
  ): Promise<Promotion> {
    return this.prisma.promotion.delete(args);
  }

  async getDiscount(parentId: string): Promise<Discount | null> {
    return this.prisma.promotion
      .findUnique({
        where: { id: parentId },
      })
      .discount();
  }
}
