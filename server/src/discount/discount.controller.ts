import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DiscountService } from "./discount.service";
import { DiscountControllerBase } from "./base/discount.controller.base";

@swagger.ApiTags("discounts")
@common.Controller("discounts")
export class DiscountController extends DiscountControllerBase {
  constructor(
    protected readonly service: DiscountService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
