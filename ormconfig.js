module.exports = [
  {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": [
      `./${process.env.PATH_ENTRY}/modules/**/infra/typeorm/entities/*.${process.env.EXTENSION}`
    ],
    "migrations": [
      `./${process.env.PATH_ENTRY}/shared/infra/typeorm/migrations/*.${process.env.EXTENSION}`
    ],
    "cli": {
      "migrationsDir": `./${process.env.PATH_ENTRY}/shared/infra/typeorm/migrations`
    }
  },
  {
    "name": "mongo",
    "type": "mongodb",
    "url": process.env.MONGODB_URL,
    "useUnifiedTopology": true,
    "entities": [
      `./${process.env.PATH_ENTRY}/modules/**/infra/typeorm/schemas/*.${process.env.EXTENSION}`
    ]
  }
]
