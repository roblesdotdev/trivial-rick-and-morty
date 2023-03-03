Full Stack Monorepo

Work in progress...

### Dependencies

- `git >= 2.39.2S`
- `node >= 18.13`
- `pnpm >= 7.28.0`

### Start

```
$ git clone git@github.com:roblesdotdev/trivial-rick-and-morty.git folder-name
$ cd folder-name
$ pnpm i
$ pnpm start:nx
```

### API

Base URL: `http://localhost:${process.env.APP_PORT}`.

`APP_PORT`: defaults to 3001.

- `GET /healthcheck`: returns the server status.
- `GET /rickandmorty/character/:id`: returns character listing data.
- `GET /rickandmorty/detail/:id`: return character detail.
- `GET /rickandmorty/fav`: return the list of favorites.
- `POST /rickandmorty/fav`: add a new favorite to the list.
- `DELETE /rickandmorty/fav/:id`: remove a favorite from the list.
