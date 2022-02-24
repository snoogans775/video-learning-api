# tcc-media
API and Back-end server for Change Companies Media

## Installation

```bash
$ npm install
```

Set your database connection in .env
```javascript
DATABASE_URL="mysql://<user>:<password>@localhost:3306/tccmedia?schema=public"
```
Sync database
```bash
$ npx prisma migrate
```
```bash
$ npx prisma generate
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Development
Push schema changes to development database
```
npx prisma db push
```
Use this to space out your migrations when making lots of changes

## Libraries
Database / ORM
MySQL 5.7
Prisma 2: https://docs.nestjs.com/recipes/prisma
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
