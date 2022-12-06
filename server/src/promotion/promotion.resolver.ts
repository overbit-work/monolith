import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PromotionResolverBase } from "./base/promotion.resolver.base";
import { Promotion } from "./base/Promotion";
import { PromotionService } from "./promotion.service";

@graphql.Resolver(() => Promotion)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PromotionResolver extends PromotionResolverBase {
  constructor(
    protected readonly service: PromotionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
