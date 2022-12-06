/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PromotionWhereUniqueInput } from "../../promotion/base/PromotionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class PromotionUpdateManyWithoutDiscountsInput {
  @Field(() => [PromotionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PromotionWhereUniqueInput],
  })
  connect?: Array<PromotionWhereUniqueInput>;

  @Field(() => [PromotionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PromotionWhereUniqueInput],
  })
  disconnect?: Array<PromotionWhereUniqueInput>;

  @Field(() => [PromotionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PromotionWhereUniqueInput],
  })
  set?: Array<PromotionWhereUniqueInput>;
}
export { PromotionUpdateManyWithoutDiscountsInput };
