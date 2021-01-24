# via-appia-api

Back-end API to go with Via Appia

Via Appia is an app to help dispatchers in a logistics company track the movement of goods and send drivers to deliver freight.

This project was created as part of the application process for a software development position with Rose Rocket.

This app is an API whose data is consumed by the [Via Appia app](https://github.com/sherwin-kwan/via-appia). See that repo's README.md for full instructions. 

NOTE: This back-end is NOT linked to a database; the data is stored in an object which is seeded in `/data/movements/js`. ALL DATA WILL BE LOST IF THIS SERVER IS KILLED.

## Routes

HTTP method | Route | What it does
---|---|---
GET | /movements/:id | Retrieves data for a single movement
GET | /movements | Retrieves data for all movements
POST | /movements | Creates a new movement
POST | /movements/:id | Edits an existing movement
DELETE | /movements/:id | Deletes a movement
