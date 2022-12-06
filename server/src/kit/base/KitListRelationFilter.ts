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
import { KitWhereInput } from "./KitWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class KitListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => KitWhereInput,
  })
  @ValidateNested()
  @Type(() => KitWhereInput)
  @IsOptional()
  @Field(() => KitWhereInput, {
    nullable: true,
  })
  every?: KitWhereInput;

  @ApiProperty({
    required: false,
    type: () => KitWhereInput,
  })
  @ValidateNested()
  @Type(() => KitWhereInput)
  @IsOptional()
  @Field(() => KitWhereInput, {
    nullable: true,
  })
  some?: KitWhereInput;

  @ApiProperty({
    required: false,
    type: () => KitWhereInput,
  })
  @ValidateNested()
  @Type(() => KitWhereInput)
  @IsOptional()
  @Field(() => KitWhereInput, {
    nullable: true,
  })
  none?: KitWhereInput;
}
export { KitListRelationFilter };
