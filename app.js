import fetch from "node-fetch";
import moment from "moment";
import TelegramBot from "node-telegram-bot-api"

const PVU_PLANTS_STATUS_LINK = 'https://backend-farm.plantvsundead.com/farms?limit=10&offset=0'
const PVU_WATERING_LINK = 'https://backend-farm-stg.plantvsundead.com/farms/apply-tool'
const token = '1954705823:AAEQKOd3875K9obwfmpO3xtmoLhui9A-MCs';
const bot = new TelegramBot(token, {polling: true});

const testResponse = {
    "status": 0,
    "data": [
        {
            "_id": "6123d85bb7041100127c7a9a",
            "plant": {
                "farmConfig": {
                    "le": 850,
                    "hours": 144
                },
                "sunflowerId": 2,
                "type": 2,
                "iconUrl": "https://pvu-static.s3.ap-southeast-1.amazonaws.com/farms/mama.svg",
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
            "plantType": 2,
            "activeTools": [
                {
                    "count": 1,
                    "_id": "6123d85bb7041100127c7a9b",
                    "id": 1,
                    "type": "POT",
                    "duration": 10,
                    "endTime": "2021-09-02T20:26:18.314Z",
                    "startTime": "2021-08-23T20:26:18.314Z"
                },
                {
                    "count": 2,
                    "_id": "6123d85bb7041100127c7a9d",
                    "id": 3,
                    "type": "WATER",
                    "duration": 0,
                    "endTime": "2021-08-28T21:26:18.607Z",
                    "startTime": "2021-08-27T21:26:18.607Z"
                }
            ],
            "createdAt": "2021-08-23T17:18:19.193Z",
            "updatedAt": "2021-08-28T10:48:59.193Z",
            "__v": 0,
            "harvestTime": "2021-08-29T20:55:00.310Z",
            "rate": {
                "le": 850,
                "hours": 144
            },
            "startTime": "2021-08-23T20:26:18.607Z",
            "hasSynergy": false,
            "needWater": false,
            "hasSeed": false,
            "pausedTime": null,
            "inGreenhouse": false,
            "count": 28,
            "totalHarvest": 0,
            "totalExtraHarvest": 0
        },
        {
            "_id": "6126b124a354e200192ff2c5",
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
                    "_id": "6126b124a354e200192ff2c6",
                    "id": 1,
                    "type": "POT",
                    "duration": 10,
                    "endTime": "2021-09-04T21:07:55.125Z",
                    "startTime": "2021-08-25T21:07:55.125Z"
                },
                {
                    "count": 2,
                    "_id": "6126b124a354e200192ff2c8",
                    "id": 3,
                    "type": "WATER",
                    "duration": 0,
                    "endTime": "2021-08-28T20:07:55.416Z",
                    "startTime": "2021-08-27T21:07:55.416Z"
                }
            ],
            "createdAt": "2021-08-25T21:07:48.338Z",
            "updatedAt": "2021-08-28T10:48:52.182Z",
            "__v": 0,
            "harvestTime": "2021-08-28T21:07:55.416Z",
            "rate": {
                "le": 250,
                "hours": 72
            },
            "startTime": "2021-08-25T21:07:55.416Z",
            "hasSynergy": false,
            "needWater": true,
            "hasSeed": false,
            "inGreenhouse": false,
            "count": 85,
            "totalHarvest": 0,
            "totalExtraHarvest": 0
        },
        {
            "_id": "6126b636e2a40b0012b0f95b",
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
                    "_id": "6126b636e2a40b0012b0f95c",
                    "id": 1,
                    "type": "POT",
                    "duration": 10,
                    "endTime": "2021-09-04T21:29:31.568Z",
                    "startTime": "2021-08-25T21:29:31.568Z"
                },
                {
                    "count": 2,
                    "_id": "6126b636e2a40b0012b0f95e",
                    "id": 3,
                    "type": "WATER",
                    "duration": 0,
                    "endTime": "2021-08-28T21:29:31.857Z",
                    "startTime": "2021-08-27T20:29:31.857Z"
                }
            ],
            "createdAt": "2021-08-25T21:29:26.194Z",
            "updatedAt": "2021-08-28T10:48:47.007Z",
            "__v": 0,
            "harvestTime": "2021-08-28T21:29:31.857Z",
            "rate": {
                "le": 250,
                "hours": 72
            },
            "startTime": "2021-08-25T21:29:31.857Z",
            "hasSynergy": false,
            "needWater": true,
            "hasSeed": false,
            "inGreenhouse": false,
            "count": 168,
            "totalHarvest": 0,
            "totalExtraHarvest": 0
        },
        {
            "_id": "6127c420ad63d00012ebe3cf",
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
                    "_id": "6127c420ad63d00012ebe3d0",
                    "id": 1,
                    "type": "POT",
                    "duration": 10,
                    "endTime": "2021-09-05T16:41:11.225Z",
                    "startTime": "2021-08-26T16:41:11.225Z"
                },
                {
                    "count": 2,
                    "_id": "6127c420ad63d00012ebe3d2",
                    "id": 3,
                    "type": "WATER",
                    "duration": 0,
                    "endTime": "2021-08-28T17:41:11.515Z",
                    "startTime": "2021-08-27T16:41:11.515Z"
                }
            ],
            "createdAt": "2021-08-26T16:41:04.057Z",
            "updatedAt": "2021-08-27T18:52:56.671Z",
            "__v": 0,
            "harvestTime": "2021-08-29T16:41:11.515Z",
            "rate": {
                "le": 250,
                "hours": 72
            },
            "startTime": "2021-08-26T16:41:11.515Z",
            "hasSynergy": false,
            "needWater": false,
            "hasSeed": false,
            "inGreenhouse": false,
            "count": 187,
            "totalHarvest": 0,
            "totalExtraHarvest": 0
        },
        {
            "_id": "612a1524127d8f000822f6c2",
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
                    "_id": "612a1524127d8f000822f6c3",
                    "id": 1,
                    "type": "POT",
                    "duration": 10,
                    "endTime": "2021-09-07T10:51:32.681Z",
                    "startTime": "2021-08-28T10:51:32.681Z"
                },
                {
                    "count": 2,
                    "_id": "612a1524127d8f000822f6c5",
                    "id": 3,
                    "type": "WATER",
                    "duration": 0,
                    "endTime": "2021-08-29T10:51:32.703Z",
                    "startTime": "2021-08-28T10:51:32.703Z"
                }
            ],
            "createdAt": "2021-08-28T10:51:16.300Z",
            "updatedAt": "2021-08-28T10:51:39.659Z",
            "__v": 0,
            "harvestTime": "2021-08-31T10:51:32.703Z",
            "rate": {
                "le": 250,
                "hours": 72
            },
            "startTime": "2021-08-28T10:51:32.703Z",
            "hasSynergy": false,
            "needWater": false,
            "hasSeed": false,
            "inGreenhouse": false,
            "count": 32,
            "totalHarvest": 0,
            "totalExtraHarvest": 0
        },
        {
            "_id": "612a15250ba1d600080c7112",
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
                    "_id": "612a15250ba1d600080c7113",
                    "id": 1,
                    "type": "POT",
                    "duration": 10,
                    "endTime": "2021-09-07T10:51:29.113Z",
                    "startTime": "2021-08-28T10:51:29.113Z"
                },
                {
                    "count": 2,
                    "_id": "612a15250ba1d600080c7115",
                    "id": 3,
                    "type": "WATER",
                    "duration": 0,
                    "endTime": "2021-08-29T10:51:29.136Z",
                    "startTime": "2021-08-28T10:51:29.136Z"
                }
            ],
            "createdAt": "2021-08-28T10:51:17.855Z",
            "updatedAt": "2021-08-28T10:51:44.273Z",
            "__v": 0,
            "harvestTime": "2021-08-31T10:51:29.136Z",
            "rate": {
                "le": 250,
                "hours": 72
            },
            "startTime": "2021-08-28T10:51:29.136Z",
            "hasSynergy": false,
            "needWater": false,
            "hasSeed": false,
            "inGreenhouse": false,
            "count": 107,
            "totalHarvest": 0,
            "totalExtraHarvest": 0
        }
    ],
    "total": 6
}

let plantsNeedWater = []

console.log('Bot Start')

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Hi, I`m here to help keep an eye on your farm');
});

bot.onText(/\/moreInfo/, async (msg) => {
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

bot.onText(/\/status/, async (msg) => {
    const chatId = msg.chat.id;

    const plantsJson = await getPlantsStatus()
    if (plantsJson.status === 444)
    {
        console.log('Farm Maintenance')
        bot.sendMessage(chatId, 'Farm Maintenance. Please wait your group')
    } else if (plantsJson.status === 0) {
        showGlobalStatus(plantsJson, chatId)
    } else {
        bot.sendMessage(chatId, `Error, status: ${plantsJson.status}`)
    }
});

bot.onText(/\/watering/, async (msg) => {
    const chatId = msg.chat.id;

    const plantsJson = await getPlantsStatus()
    if (plantsJson.status === 444)
    {
        console.log('Farm Maintenance')
        bot.sendMessage(chatId, 'Farm Maintenance. Please wait your group')
    } else if (plantsJson.status === 0) {
        startWatering(plantsNeedWater, chatId)
    } else {
        bot.sendMessage(chatId, `Error, status: ${plantsJson.status}`)
    }
});

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

const diffTimeCalculation = (endTime) => {
    let now = moment(new Date())
    let end = moment(endTime)
    let diffTime = end.from(now)
    return diffTime
}

const showPlantsStatus = (plantsJson, chatId) => {
    const plants = plantsJson.data;

    plants.forEach((plant, index) => {

        const waterTool = plant.activeTools.find(obj => obj.type === "WATER")

        bot.sendMessage(chatId, `Номер растения: ${(index + 1)}\nID растения: ${plant._id}\n${plant.needWater ? 'Растение нужно полить!!!' : 'Растению не требуеться полив'}\n${waterTool !== undefined && ('Осталось времени до полива: ' + diffTimeCalculation(waterTool.endTime))}\nОсталось времени до сбора: ${diffTimeCalculation(plant.harvestTime)}\n${plant.hasCrow !== undefined ? 'На растении сидит ворона, нужно согнать!!!!' : 'На растении нету вороны'}`)
    })
}

const startWatering = async (plantsNeedWater, chatId) => {
    for (let i = 0; i < plantsNeedWater.length; i++) {
        const body = {
            "farmId": `${plantsNeedWater[i]._id}`,
            "toolId":3,
            "token":{"challenge":"default","seccode":"default","validate":"default"}
        };

        for (let i = 0; i < 2; i++) {
            let count = 0;

            try {
                await fetch(PVU_WATERING_LINK, {
                    method: 'post',
                    body: body,
                    headers: {
                        'authorization': 'Bearer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHg1N2I1MTk0NjhhMjUzYzhhZmI3ZDUyZTc0ZTc1NzJmMjlmMTk0NzU4IiwibG9naW5UaW1lIjoxNjI5NTMwNjAyMzM5LCJjcmVhdGVEYXRlIjoiMjAyMS0wOC0xNSAwOTozNzoxMyIsImlhdCI6MTYyOTUzMDYwMn0.EO_tnfvY6vZXkMxHCcu8UntXmNAq3RbhZ2t1UFi292s',
                        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
                        'origin': 'https://marketplace.plantvsundead.com'
                    }
                }).then(res => {
                    if (res.status === 0) {
                        count++
                        bot.sendMessage(chatId, `${count} полив растения "${plantsNeedWater[i]._id}" сделан успешно`)
                    } else if (res.status === 20) {
                        bot.sendMessage(chatId, `Полив не требуеться`)
                    }
                })
            } catch (e) {
                console.log(e)
            }
        }
    }
    plantsNeedWater = []
    bot.sendMessage(chatId, `Полив растений завершен`)
}

const showGlobalStatus = (plantJson, chatId) => {
    const plants = plantJson.data
    let needWater = 0
    let hasCrow = 0
    let needHarvest = 0

    plants.forEach(plant => {
        if (plant.needWater === true) {
            needWater++
            plantsNeedWater.push(plant)
        }
        if (plant.hasCrow !== undefined)
            hasCrow++
        if (plant.stage !== 'farming')
            needHarvest++
    })

    bot.sendMessage(chatId, `Нужно полить: ${needWater}, ${needWater !== 0 && 'Полить /watering'}\nС воронами: ${hasCrow}\nГотовых к сбору: ${needHarvest}\n\nДля подробной информации выполните команду /moreInfo`)
}

