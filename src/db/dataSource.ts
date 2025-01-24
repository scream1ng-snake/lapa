import { DataSource } from "typeorm"
import config from "../config"
import { User } from "../entities/userEntity"

export const dataSource = new DataSource({
    // @ts-ignore
    type: config.db.type,
    host: config.db.host,
    port: config.db.port,
    username: config.db.user,
    password: config.db.password,
    database: config.db.database,
    entities: [User],
    logging: false,
    synchronize: true,
})
