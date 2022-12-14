/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ShipmentService } from "../shipment.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ShipmentCreateInput } from "./ShipmentCreateInput";
import { ShipmentWhereInput } from "./ShipmentWhereInput";
import { ShipmentWhereUniqueInput } from "./ShipmentWhereUniqueInput";
import { ShipmentFindManyArgs } from "./ShipmentFindManyArgs";
import { ShipmentUpdateInput } from "./ShipmentUpdateInput";
import { Shipment } from "./Shipment";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ShipmentControllerBase {
  constructor(
    protected readonly service: ShipmentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Shipment",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Shipment })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: ShipmentCreateInput): Promise<Shipment> {
    return await this.service.create({
      data: {
        ...data,

        order: data.order
          ? {
              connect: data.order,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        order: {
          select: {
            id: true,
          },
        },

        price: true,
        trackingNumber: true,
        updatedAt: true,
        waybillNumber: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Shipment",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Shipment] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ShipmentFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Shipment[]> {
    const args = plainToClass(ShipmentFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,

        order: {
          select: {
            id: true,
          },
        },

        price: true,
        trackingNumber: true,
        updatedAt: true,
        waybillNumber: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Shipment",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Shipment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ShipmentWhereUniqueInput
  ): Promise<Shipment | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,

        order: {
          select: {
            id: true,
          },
        },

        price: true,
        trackingNumber: true,
        updatedAt: true,
        waybillNumber: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Shipment",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Shipment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ShipmentWhereUniqueInput,
    @common.Body() data: ShipmentUpdateInput
  ): Promise<Shipment | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          order: data.order
            ? {
                connect: data.order,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          order: {
            select: {
              id: true,
            },
          },

          price: true,
          trackingNumber: true,
          updatedAt: true,
          waybillNumber: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Shipment",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Shipment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ShipmentWhereUniqueInput
  ): Promise<Shipment | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,

          order: {
            select: {
              id: true,
            },
          },

          price: true,
          trackingNumber: true,
          updatedAt: true,
          waybillNumber: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
