import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UUID } from "../utils/types";
import { User } from "./user.entity";

export interface IRegisterSlot {
  masterId: UUID
  clientId: UUID
  slotId: UUID
  date: Date
}
@Entity()
class Booking {
  @PrimaryGeneratedColumn('uuid')
  id!: UUID

  @Column({ type: 'timestamptz' }) 
  date!: Date

  @Column('text')
  slotId!: UUID

  @ManyToOne(() => User, u => u.id)
  client!: User

  @ManyToOne(() => User, u => u.id)
  master!: User
}

export default Booking