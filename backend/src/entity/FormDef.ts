import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class FormDef {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    companyUEN: string

    @Column()
    companyName: string

    @Column()
    fullName: string

    @Column()
    positionHeld: string

    @Column()
    email: string

    @Column()
    mobleNumber: number

}
