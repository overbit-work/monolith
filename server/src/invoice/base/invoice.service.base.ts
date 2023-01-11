/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Invoice, Order } from "@prisma/client";

export class InvoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.InvoiceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceFindManyArgs>
  ): Promise<number> {
    return this.prisma.invoice.count(args);
  }

  async findMany<T extends Prisma.InvoiceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceFindManyArgs>
  ): Promise<Invoice[]> {
    return this.prisma.invoice.findMany(args);
  }
  async findOne<T extends Prisma.InvoiceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceFindUniqueArgs>
  ): Promise<Invoice | null> {
    return this.prisma.invoice.findUnique(args);
  }
  async create<T extends Prisma.InvoiceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceCreateArgs>
  ): Promise<Invoice> {
    return this.prisma.invoice.create<T>(args);
  }
  async update<T extends Prisma.InvoiceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceUpdateArgs>
  ): Promise<Invoice> {
    return this.prisma.invoice.update<T>(args);
  }
  async delete<T extends Prisma.InvoiceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceDeleteArgs>
  ): Promise<Invoice> {
    return this.prisma.invoice.delete(args);
  }

  async findOrder(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.invoice
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .order(args);
  }
}
