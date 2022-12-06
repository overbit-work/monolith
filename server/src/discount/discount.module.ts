import { Module } from "@nestjs/common";
import { DiscountModuleBase } from "./base/discount.module.base";
import { DiscountService } from "./discount.service";
import { DiscountController } from "./discount.controller";
import { DiscountResolver } from "./discount.resolver";

@Module({
  imports: [DiscountModuleBase],
  controllers: [DiscountController],
  providers: [DiscountService, DiscountResolver],
  exports: [DiscountService],
})
export class DiscountModule {}
