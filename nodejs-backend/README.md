# Backend with Image APIs
The project will with `8088` port by default.
So http://localhost:8088/api/images should be called to get data.

## Table of Content:
- [APIs](#apis)
- [Technologies](#technologies)
- [Install](#install)
- [Run](#run)

## APIs
* GET /api/images?start={start}&end={end}
```
Respose
{
    images: [
        {
            id: String,
            title: String,
            cost: String,
            description: String,
            thumbnail: String,
            image: String,
        }
    ],
    start: Number,
    end: Number,
    total: Number
}
```

## Technologies
`Node.js`, `Express.js`, `Typescript`

## Install
- Download or clone the repository
- Run `npm install`

## Run
- Run `npm run dev` to see the app running locally
