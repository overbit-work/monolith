import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DiscountResolverBase } from "./base/discount.resolver.base";
import { Discount } from "./base/Discount";
import { DiscountService } from "./discount.service";

@graphql.Resolver(() => Discount)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DiscountResolver extends DiscountResolverBase {
  constructor(
    protected readonly service: DiscountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
