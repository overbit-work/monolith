/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ShipmentWhereInput } from "./ShipmentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ShipmentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ShipmentWhereInput,
  })
  @ValidateNested()
  @Type(() => ShipmentWhereInput)
  @IsOptional()
  @Field(() => ShipmentWhereInput, {
    nullable: true,
  })
  every?: ShipmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => ShipmentWhereInput,
  })
  @ValidateNested()
  @Type(() => ShipmentWhereInput)
  @IsOptional()
  @Field(() => ShipmentWhereInput, {
    nullable: true,
  })
  some?: ShipmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => ShipmentWhereInput,
  })
  @ValidateNested()
  @Type(() => ShipmentWhereInput)
  @IsOptional()
  @Field(() => ShipmentWhereInput, {
    nullable: true,
  })
  none?: ShipmentWhereInput;
}
export { ShipmentListRelationFilter };