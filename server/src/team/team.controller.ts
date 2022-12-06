import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TeamService } from "./team.service";
import { TeamControllerBase } from "./base/team.controller.base";

@swagger.ApiTags("teams")
@common.Controller("teams")
export class TeamController extends TeamControllerBase {
  constructor(
    protected readonly service: TeamService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
