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
import { CompanyWhereUniqueInput } from "../../company/base/CompanyWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserCreateNestedManyWithoutTeamsInput } from "./UserCreateNestedManyWithoutTeamsInput";
@InputType()
class TeamCreateInput {
  @ApiProperty({
    required: false,
    type: () => CompanyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CompanyWhereUniqueInput)
  @IsOptional()
  @Field(() => CompanyWhereUniqueInput, {
    nullable: true,
  })
  company?: CompanyWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutTeamsInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutTeamsInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutTeamsInput, {
    nullable: true,
  })
  users?: UserCreateNestedManyWithoutTeamsInput;
}
export { TeamCreateInput };