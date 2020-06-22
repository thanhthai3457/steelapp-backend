import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { ApolloError } from 'apollo-server-express'
import { getMongoRepository } from 'typeorm'
import {
  Vendor as VendorType
} from 'graphql.schema'
import { Vendor } from 'entities/entity.index'

@Resolver('Vendor')
export class VendorResolver {
  @Query('getVendors')
  async getVendors (): Promise<VendorType[] | ApolloError> {
    try {
      console.log('vaof')
      const vendors = await getMongoRepository(Vendor).find({
        where: {
          isActive: true
        }
      })
      return vendors.sort((a, b) => a.name > b.name ? 1 : -1)
    } catch (error) {
      return new ApolloError(error)
    }
  }
}