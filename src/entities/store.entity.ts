import { Entity, ObjectIdColumn, Column } from 'typeorm'
import { IsString, IsNumber, IsBoolean } from 'class-validator'
import { User } from './interface.entity'

@Entity({ name: 'stores' })
export class StoreShop {
  @ObjectIdColumn()
  @IsString()
  _id: string

  @Column()
  @IsString()
  code: string

  @Column()
  @IsString()
  name: string

  @Column()
  @IsString()
  mobile: string

  @Column()
  @IsString()
  address: string

  @Column()
  @IsBoolean()
  isActive: boolean

  @Column()
  @IsBoolean()
  isShop: boolean

  @Column()
  @IsNumber()
  indexRetail: number

  @Column()
  @IsNumber()
  indexStockControl: number

  @Column()
  @IsNumber()
  indexWholesale: number

  @Column()
  @IsNumber()
  indexImport: number

  @Column()
  @IsNumber()
  indexExport: number

  @Column()
  createdAt: number

  @Column()
  createdBy: User

  @Column()
  updatedAt: number

  @Column()
  updatedBy: User

  constructor(user: any) {
    if (user) {
      Object.assign(this, user)
    }
  }
}