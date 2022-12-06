import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { InvoiceResolverBase } from "./base/invoice.resolver.base";
import { Invoice } from "./base/Invoice";
import { InvoiceService } from "./invoice.service";

@graphql.Resolver(() => Invoice)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class InvoiceResolver extends InvoiceResolverBase {
  constructor(
    protected readonly service: InvoiceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
