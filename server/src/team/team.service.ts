import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TeamServiceBase } from "./base/team.service.base";

@Injectable()
export class TeamService extends TeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
