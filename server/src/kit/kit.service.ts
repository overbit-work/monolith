import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { KitServiceBase } from "./base/kit.service.base";

@Injectable()
export class KitService extends KitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
