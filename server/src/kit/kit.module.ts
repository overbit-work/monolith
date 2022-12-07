import { Module } from "@nestjs/common";
import { KitModuleBase } from "./base/kit.module.base";
import { KitService } from "./kit.service";
import { KitController } from "./kit.controller";
import { KitResolver } from "./kit.resolver";

@Module({
  imports: [KitModuleBase],
  controllers: [KitController],
  providers: [KitService, KitResolver],
  exports: [KitService],
})
export class KitModule {}
