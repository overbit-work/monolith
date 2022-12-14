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
import { AddressCreateNestedManyWithoutCompaniesInput } from "./AddressCreateNestedManyWithoutCompaniesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { TeamCreateNestedManyWithoutCompaniesInput } from "./TeamCreateNestedManyWithoutCompaniesInput";

@InputType()
class CompanyCreateInput {
  @ApiProperty({
    required: false,
    type: () => AddressCreateNestedManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => AddressCreateNestedManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => AddressCreateNestedManyWithoutCompaniesInput, {
    nullable: true,
  })
  addresses?: AddressCreateNestedManyWithoutCompaniesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => TeamCreateNestedManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => TeamCreateNestedManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => TeamCreateNestedManyWithoutCompaniesInput, {
    nullable: true,
  })
  teams?: TeamCreateNestedManyWithoutCompaniesInput;
}

export { CompanyCreateInput };
