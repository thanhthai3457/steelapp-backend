import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { ApolloError } from 'apollo-server-express'
import { getMongoRepository } from 'typeorm'
import {
  StoreShop as StoreShopType
} from 'graphql.schema'
import { StoreShop } from 'entities/store.entity'

@Resolver('StoreShop')
export class StoreShopResolver {
  @Query('getStores')
  async getStores (): Promise<StoreShopType[] | ApolloError> {
    try {
      const stores = await getMongoRepository(StoreShop).find({
        where: {
          isActive: true,
          isShop: true
        }
      })
      return stores.sort((a, b) => a.name > b.name ? 1 : -1)
    } catch (error) {
      return new ApolloError(error)
    }
  }
}