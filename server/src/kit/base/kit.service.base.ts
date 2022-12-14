/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Kit, Product } from "@prisma/client";

export class KitServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.KitFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.KitFindManyArgs>
  ): Promise<number> {
    return this.prisma.kit.count(args);
  }

  async findMany<T extends Prisma.KitFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.KitFindManyArgs>
  ): Promise<Kit[]> {
    return this.prisma.kit.findMany(args);
  }
  async findOne<T extends Prisma.KitFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.KitFindUniqueArgs>
  ): Promise<Kit | null> {
    return this.prisma.kit.findUnique(args);
  }
  async create<T extends Prisma.KitCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.KitCreateArgs>
  ): Promise<Kit> {
    return this.prisma.kit.create<T>(args);
  }
  async update<T extends Prisma.KitUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.KitUpdateArgs>
  ): Promise<Kit> {
    return this.prisma.kit.update<T>(args);
  }
  async delete<T extends Prisma.KitDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.KitDeleteArgs>
  ): Promise<Kit> {
    return this.prisma.kit.delete(args);
  }

  async findProduct(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<Product[]> {
    return this.prisma.kit
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .product(args);
  }
}
