# Air Quality Cron Job

This project serves as a cron job that runs every minute to fetch air quality data from external sources and stores it into a MongoDB database for future retrieval.

## Installation:

#### Before the installation, please add the `.env` file to your root project with the following Env Vars:
```bash
API_KEY=<YOR-API-KEY-HERE>
MONGODB_URI=mongodb://mongodb:27017/air_quality_db
IQAIR_API_URL=http://api.airvisual.com
NEAREST_CITY_API=/v2/nearest_city
CRON_SCHEDULE=* * * * *
```
### Important Note: 
#### This project depends on this [service](https://github.com/prof-alazhary/air-quality) in terms of Dockrization setup "Mongodb service",(They are using the same Database) So please make sure that you've started installation for [this](https://github.com/prof-alazhary/air-quality) first.

Then All what you need to do is:

```bash
> docker-compose up --build
```

## Tech and Necessary Packages:
- Tech: Nodejs
- Packages: node-cron (for scheduling cron jobs), Mongoose (for MongoDB interactions), Axios (for making HTTP requests)

## Code Folder Structure:
```bash
air-quality-cron/
│
src/
   ├── config/              # Configuration files
   ├── cron/                # Cron job implementation
   ├── models/              # MongoDB models
├── .gitignore
├── package.json
└── README.md            # This README file

```


## License

[MIT](https://choosealicense.com/licenses/mit/)