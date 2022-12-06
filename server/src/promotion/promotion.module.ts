import { Module } from "@nestjs/common";
import { PromotionModuleBase } from "./base/promotion.module.base";
import { PromotionService } from "./promotion.service";
import { PromotionController } from "./promotion.controller";
import { PromotionResolver } from "./promotion.resolver";

@Module({
  imports: [PromotionModuleBase],
  controllers: [PromotionController],
  providers: [PromotionService, PromotionResolver],
  exports: [PromotionService],
})
export class PromotionModule {}
