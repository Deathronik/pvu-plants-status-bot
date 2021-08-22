import fetch from "node-fetch";
import moment from "moment";
import TelegramBot from "node-telegram-bot-api"

const PVU_PLANTS_STATUS_LINK = 'https://backend-farm.plantvsundead.com/farms?limit=10&offset=0'
const token = '1954705823:AAEQKOd3875K9obwfmpO3xtmoLhui9A-MCs';
const bot = new TelegramBot(token, {polling: true});

console.log('Bot Start')

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Hi, I`m here to help keep an eye on your farm');
});

bot.onText(/\/getStatus/, async (msg) => {
    const chatId = msg.chat.id;

    const plantsJson = await getPlantsStatus()
    if (plantsJson.status === 444)
    {
        console.log('Farm Maintenance')
        bot.sendMessage(chatId, 'Farm Maintenance. Please wait your group')
    } else if (plantsJson.status === 0) {
        showPlantsStatus(plantsJson, chatId)
    } else {
        bot.sendMessage(chatId, `Error, status: ${plantsJson.status}`)
    }
});


const exampleResponse = {
    "status": 0,
    "data": [
        {
            "_id": "611eb2409754af0014316cda",
            "plant": {
                "farmConfig": {
                    "le": 250,
                    "hours": 72
                },
                "sunflowerId": 1,
                "type": 1,
                "iconUrl": "https://pvu-static.s3.ap-southeast-1.amazonaws.com/farms/sapling.svg",
                "synergy": {}
            },
            "land": {
                "elements": {
                    "fire": 0,
                    "water": 0,
                    "ice": 0,
                    "wind": 0,
                    "electro": 0,
                    "parasite": 0,
                    "light": 0,
                    "dark": 0,
                    "metal": 0
                },
                "capacity": {
                    "plant": 5,
                    "motherTree": 1
                },
                "landId": 0,
                "x": 0,
                "y": 0,
                "totalOfElements": 0,
                "rarity": 0
            },
            "isTempPlant": true,
            "stage": "farming",
            "ownerId": "0x57b519468a253c8afb7d52e74e7572f29f194758",
            "landId": 0,
            "plantId": 0,
            "plantType": 1,
            "activeTools": [
                {
                    "count": 1,
                    "_id": "611eb2409754af0014316cdb",
                    "id": 1,
                    "type": "POT",
                    "endTime": "2021-08-29T19:35:47.212Z",
                    "startTime": "2021-08-19T19:35:47.212Z"
                },
                {
                    "count": 2,
                    "_id": "611eb2409754af0014316cdd",
                    "id": 3,
                    "type": "WATER",
                    "endTime": "2021-08-22T19:35:47.500Z",
                    "startTime": "2021-08-21T20:35:47.500Z"
                }
            ],
            "createdAt": "2021-08-19T19:34:24.035Z",
            "updatedAt": "2021-08-22T02:49:24.369Z",
            "__v": 0,
            "harvestTime": "2021-08-22T19:35:47.500Z",
            "rate": {
                "le": 250,
                "hours": 72
            },
            "startTime": "2021-08-19T19:35:47.500Z",
            "hasSynergy": false,
            "needWater": false,
            "hasSeed": false,
            "inGreenhouse": false,
            "count": 93,
            "totalHarvest": 0,
            "totalExtraHarvest": 0
        },
        {
            "_id": "611f805d7acbce00192a2bab",
            "plant": {
                "farmConfig": {
                    "le": 250,
                    "hours": 72
                },
                "sunflowerId": 1,
                "type": 1,
                "iconUrl": "https://pvu-static.s3.ap-southeast-1.amazonaws.com/farms/sapling.svg",
                "synergy": {}
            },
            "land": {
                "elements": {
                    "fire": 0,
                    "water": 0,
                    "ice": 0,
                    "wind": 0,
                    "electro": 0,
                    "parasite": 0,
                    "light": 0,
                    "dark": 0,
                    "metal": 0
                },
                "capacity": {
                    "plant": 5,
                    "motherTree": 1
                },
                "landId": 0,
                "x": 0,
                "y": 0,
                "totalOfElements": 0,
                "rarity": 0
            },
            "isTempPlant": true,
            "stage": "farming",
            "ownerId": "0x57b519468a253c8afb7d52e74e7572f29f194758",
            "landId": 0,
            "plantId": 0,
            "plantType": 1,
            "activeTools": [
                {
                    "count": 1,
                    "_id": "611f805d7acbce00192a2bac",
                    "id": 1,
                    "type": "POT",
                    "endTime": "2021-08-30T10:13:57.662Z",
                    "startTime": "2021-08-20T10:13:57.662Z"
                },
                {
                    "count": 2,
                    "_id": "611f805d7acbce00192a2bae",
                    "id": 3,
                    "type": "WATER",
                    "endTime": "2021-08-22T10:13:57.954Z",
                    "startTime": "2021-08-21T10:13:57.954Z"
                }
            ],
            "createdAt": "2021-08-20T10:13:49.188Z",
            "updatedAt": "2021-08-21T12:06:03.436Z",
            "__v": 0,
            "harvestTime": "2021-08-23T10:13:57.954Z",
            "rate": {
                "le": 250,
                "hours": 72
            },
            "startTime": "2021-08-20T10:13:57.954Z",
            "hasSynergy": false,
            "needWater": false,
            "hasSeed": false,
            "inGreenhouse": false,
            "count": 134,
            "totalHarvest": 0,
            "totalExtraHarvest": 0
        },
        {
            "_id": "6121cffb36e7590012739f53",
            "plant": {
                "farmConfig": {
                    "le": 250,
                    "hours": 72
                },
                "sunflowerId": 1,
                "type": 1,
                "iconUrl": "https://pvu-static.s3.ap-southeast-1.amazonaws.com/farms/sapling.svg",
                "synergy": {}
            },
            "land": {
                "elements": {
                    "fire": 0,
                    "water": 0,
                    "ice": 0,
                    "wind": 0,
                    "electro": 0,
                    "parasite": 0,
                    "light": 0,
                    "dark": 0,
                    "metal": 0
                },
                "capacity": {
                    "plant": 5,
                    "motherTree": 1
                },
                "landId": 0,
                "x": 0,
                "y": 0,
                "totalOfElements": 0,
                "rarity": 0
            },
            "isTempPlant": true,
            "stage": "farming",
            "ownerId": "0x57b519468a253c8afb7d52e74e7572f29f194758",
            "landId": 0,
            "plantId": 0,
            "plantType": 1,
            "activeTools": [
                {
                    "count": 1,
                    "_id": "6121cffb36e7590012739f54",
                    "id": 1,
                    "type": "POT",
                    "duration": 10,
                    "endTime": "2021-09-01T04:18:29.893Z",
                    "startTime": "2021-08-22T04:18:29.893Z"
                },
                {
                    "count": 2,
                    "_id": "6121cffb36e7590012739f56",
                    "id": 3,
                    "type": "WATER",
                    "duration": 0,
                    "endTime": "2021-08-23T04:18:30.181Z",
                    "startTime": "2021-08-22T04:18:30.181Z"
                }
            ],
            "createdAt": "2021-08-22T04:18:03.697Z",
            "updatedAt": "2021-08-22T04:18:56.791Z",
            "__v": 0,
            "harvestTime": "2021-08-25T04:18:30.181Z",
            "rate": {
                "le": 250,
                "hours": 72
            },
            "startTime": "2021-08-22T04:18:30.181Z",
            "hasSynergy": false,
            "needWater": false,
            "hasSeed": false,
            "inGreenhouse": false,
            "count": 161,
            "totalHarvest": 0,
            "totalExtraHarvest": 0
        }
    ],
    "total": 3
}

const getPlantsStatus = async () => {
    const response = await fetch(PVU_PLANTS_STATUS_LINK, {
        headers: {
            'authorization': 'Bearer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHg1N2I1MTk0NjhhMjUzYzhhZmI3ZDUyZTc0ZTc1NzJmMjlmMTk0NzU4IiwibG9naW5UaW1lIjoxNjI5NTMwNjAyMzM5LCJjcmVhdGVEYXRlIjoiMjAyMS0wOC0xNSAwOTozNzoxMyIsImlhdCI6MTYyOTUzMDYwMn0.EO_tnfvY6vZXkMxHCcu8UntXmNAq3RbhZ2t1UFi292s',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
            'origin': 'https://marketplace.plantvsundead.com'
        }
    })

    return response.json()
}

const durationCalculation = (endTime) => {
    let now = moment(new Date())
    let end = moment(endTime)
    let duration = moment.duration(end.diff(now))
    let hours = duration.asHours()
    return Math.floor(hours)
}


const showPlantsStatus = (plantsJson, chatId) => {
    const plants = plantsJson.data;

    plants.forEach((plant, index) => {

        const waterTool = plant.activeTools.find(obj => obj.type === "WATER")

        bot.sendMessage(chatId, `Plant number: ${(index + 1)}\nPlant id: ${plant._id}\n${plant.needWater ? 'The plant requires watering' : 'The plant don`t need to be watered'}\nHours left to watering: ${durationCalculation(waterTool.endTime)}\nHours to harvest: ${durationCalculation(plant.harvestTime)}\n${plant.hasCrow !== undefined ? 'Plant has crow!!! Need use Scarecrow!' : 'There is no crow on the plant'}`)
    })
}

