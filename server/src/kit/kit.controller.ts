import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { KitService } from "./kit.service";
import { KitControllerBase } from "./base/kit.controller.base";

@swagger.ApiTags("kits")
@common.Controller("kits")
export class KitController extends KitControllerBase {
  constructor(
    protected readonly service: KitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
