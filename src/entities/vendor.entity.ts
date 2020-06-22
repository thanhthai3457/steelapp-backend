import { Entity, ObjectIdColumn, Column } from 'typeorm'
import { IsString, IsBoolean } from 'class-validator'
import { User } from './interface.entity'

@Entity({ name: 'vendors' })
export class Vendor {
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
  @IsString()
  taxCode: string

  @Column()
  @IsString()
  accountingObjectId: string

  @Column()
  @IsString()
  contactPerson: string

  @Column()
  @IsString()
  email: string

  @Column()
  createdAt: number

  @Column()
  createdBy: User

  @Column()
  updatedAt: number

  @Column()
  updatedBy: User

  constructor(vendor: any) {
    if (vendor) {
      Object.assign(this, vendor)
    }
  }
}