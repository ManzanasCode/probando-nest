import { Entity, Column, PrimaryGeneratedColumn  } from 'typeorm'

@Entity({name: 'userstest' })
export class User{

    @PrimaryGeneratedColumn()
    id: Number

    @Column({ unique: true })
    username: string

    @Column()
    pwd: string

    @Column({ type: 'datetime', default: ()=> 'CURRENT_TIMESTAMP' })
    createdAt: Date

    @Column()
    rol: string
    

    @Column({nullable: true})
    infoDevice: string   
}