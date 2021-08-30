import fetch from "node-fetch";
import moment from "moment";
import TelegramBot from "node-telegram-bot-api"

const accountsTokens = ['Bearer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHg1N2I1MTk0NjhhMjUzYzhhZmI3ZDUyZTc0ZTc1NzJmMjlmMTk0NzU4IiwibG9naW5UaW1lIjoxNjI5NTMwNjAyMzM5LCJjcmVhdGVEYXRlIjoiMjAyMS0wOC0xNSAwOTozNzoxMyIsImlhdCI6MTYyOTUzMDYwMn0.EO_tnfvY6vZXkMxHCcu8UntXmNAq3RbhZ2t1UFi292s',
    'Bearer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHgwYTIzMDM3OTBmNDZhNmIxOTc3ZTliNWUzYjE3YWJkYjUxNWNkMmY2IiwibG9naW5UaW1lIjoxNjI5MDQyNDM5ODE0LCJjcmVhdGVEYXRlIjoiMjAyMS0wOC0xNSAxNTo0NzoxNSIsImlhdCI6MTYyOTA0MjQzOX0.hQoXHGHqmc5v0LsuWq7Bz5aTAJsG2TYDm_GCk_i6ZYc']

let currentAccount = accountsTokens[0]

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
            "hasCrow": "true",
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
                    "endTime": "2021-08-29T21:26:18.607Z",
                    "startTime": "2021-08-28T21:26:18.607Z"
                }
            ],
            "createdAt": "2021-08-23T17:18:19.193Z",
            "updatedAt": "2021-08-29T04:42:35.769Z",
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
            "count": 57,
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
                    "endTime": "2021-08-29T18:41:11.515Z",
                    "startTime": "2021-08-28T17:41:11.515Z"
                }
            ],
            "createdAt": "2021-08-26T16:41:04.057Z",
            "updatedAt": "2021-08-29T10:41:25.521Z",
            "__v": 0,
            "harvestTime": "2021-08-29T17:32:59.559Z",
            "rate": {
                "le": 250,
                "hours": 72
            },
            "startTime": "2021-08-26T16:41:11.515Z",
            "hasSynergy": false,
            "needWater": false,
            "hasSeed": false,
            "pausedTime": null,
            "inGreenhouse": false,
            "count": 6,
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
                    "endTime": "2021-08-30T11:51:32.703Z",
                    "startTime": "2021-08-29T10:51:32.703Z"
                }
            ],
            "createdAt": "2021-08-28T10:51:16.300Z",
            "updatedAt": "2021-08-29T11:01:32.675Z",
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
            "count": 108,
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
                    "endTime": "2021-08-30T09:51:29.136Z",
                    "startTime": "2021-08-29T10:51:29.136Z"
                }
            ],
            "createdAt": "2021-08-28T10:51:17.855Z",
            "updatedAt": "2021-08-29T11:01:36.390Z",
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
            "count": 189,
            "totalHarvest": 0,
            "totalExtraHarvest": 0
        },
        {
            "_id": "612b106a05be5b00094b0304",
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
                    "_id": "612b106a05be5b00094b0305",
                    "id": 1,
                    "type": "POT",
                    "duration": 10,
                    "endTime": "2021-09-08T04:43:33.809Z",
                    "startTime": "2021-08-29T04:43:33.809Z"
                },
                {
                    "count": 2,
                    "_id": "612b106a05be5b00094b0307",
                    "id": 3,
                    "type": "WATER",
                    "duration": 0,
                    "endTime": "2021-08-30T04:43:34.006Z",
                    "startTime": "2021-08-29T04:43:34.006Z"
                }
            ],
            "createdAt": "2021-08-29T04:43:22.012Z",
            "updatedAt": "2021-08-29T04:43:39.962Z",
            "__v": 0,
            "harvestTime": "2021-09-01T04:43:34.006Z",
            "rate": {
                "le": 250,
                "hours": 72
            },
            "startTime": "2021-08-29T04:43:34.006Z",
            "hasSynergy": false,
            "needWater": false,
            "hasSeed": false,
            "inGreenhouse": false,
            "count": 185,
            "totalHarvest": 0,
            "totalExtraHarvest": 0
        },
        {
            "_id": "612b106c29c46d00084b40e1",
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
                    "_id": "612b106c29c46d00084b40e2",
                    "id": 1,
                    "type": "POT",
                    "duration": 10,
                    "endTime": "2021-09-08T04:43:42.849Z",
                    "startTime": "2021-08-29T04:43:42.849Z"
                },
                {
                    "count": 2,
                    "_id": "612b106c29c46d00084b40e4",
                    "id": 3,
                    "type": "WATER",
                    "duration": 0,
                    "endTime": "2021-08-30T04:43:42.912Z",
                    "startTime": "2021-08-29T04:43:42.912Z"
                }
            ],
            "createdAt": "2021-08-29T04:43:24.047Z",
            "updatedAt": "2021-08-29T04:43:46.949Z",
            "__v": 0,
            "harvestTime": "2021-09-01T04:43:42.912Z",
            "rate": {
                "le": 250,
                "hours": 72
            },
            "startTime": "2021-08-29T04:43:42.912Z",
            "hasSynergy": false,
            "needWater": false,
            "hasSeed": false,
            "inGreenhouse": false,
            "count": 75,
            "totalHarvest": 0,
            "totalExtraHarvest": 0
        }
    ],
    "total": 6
}

let plantsNeedWater = []
let plantsHasCrow = []

console.log('Bot Start')

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Hi, I`m here to help keep an eye on your farm');
});

bot.onText(/\/account1/, (msg) => {
    const chatId = msg.chat.id;

    if (currentAccount !== accountsTokens[0]) {
        currentAccount = accountsTokens[0]
        bot.sendMessage(chatId, 'Вы переключились на 1 аккаунт');
    } else {
        bot.sendMessage(chatId, 'Вы уже находитесь в аккаунте 1');
    }
});

bot.onText(/\/account2/, (msg) => {
    const chatId = msg.chat.id;

    if (currentAccount !== accountsTokens[1]) {
        currentAccount = accountsTokens[1]
        bot.sendMessage(chatId, 'Вы переключились на 2 аккаунт');
    } else {
        bot.sendMessage(chatId, 'Вы уже находитесь в аккаунте 2');
    }
});

bot.onText(/\/moreInfo/, async (msg) => {
    const chatId = msg.chat.id;

    const plantsJson = await getPlantsStatus()
    if (plantsJson.status === 444) {
        console.log('Farm Maintenance')
        bot.sendMessage(chatId, 'Farm Maintenance. Please wait your group')
    } else if (plantsJson.status === 0) {
        showPlantsStatus(plantsJson, chatId)
    } else {
        bot.sendMessage(chatId, `Ошибка, код: ${plantsJson.status}`)
    }
});

bot.onText(/\/status/, async (msg) => {
    const chatId = msg.chat.id;

    plantsNeedWater = []
    plantsHasCrow = []

    const plantsJson = await getPlantsStatus()
    if (plantsJson.status === 444) {
        console.log('Farm Maintenance')
        bot.sendMessage(chatId, 'Farm Maintenance. Please wait your group')
    } else if (plantsJson.status === 0) {
        showGlobalStatus(plantsJson, chatId)
    } else {
        bot.sendMessage(chatId, `Ошибка, код: ${plantsJson.status}`)
    }
});

bot.onText(/\/watering/, async (msg) => {
    const chatId = msg.chat.id;

    const plantsJson = await getPlantsStatus()
    if (plantsJson.status === 444) {
        console.log('Farm Maintenance')
        bot.sendMessage(chatId, 'Farm Maintenance. Please wait your group')
    } else if (plantsJson.status === 0) {
        startWatering(plantsNeedWater, chatId)
    } else {
        bot.sendMessage(chatId, `Ошибка, код: ${plantsJson.status}`)
    }
});

bot.onText(/\/scarecrow/, async (msg) => {
    const chatId = msg.chat.id;

    const plantsJson = await getPlantsStatus()
    if (plantsJson.status === 444) {
        console.log('Farm Maintenance')
        bot.sendMessage(chatId, 'Farm Maintenance. Please wait your group')
    } else if (plantsJson.status === 0) {
        useScareCrow(plantsHasCrow, chatId)
    } else {
        bot.sendMessage(chatId, `Ошибка, код: ${plantsJson.status}`)
    }
});

const getPlantsStatus = async () => {
    const response = await fetch(PVU_PLANTS_STATUS_LINK, {
        headers: {
            'authorization': currentAccount,
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

        bot.sendMessage(chatId, `Номер растения: ${(index + 1)}\nID растения: ${plant._id}\n${plant.needWater ? 'Растение нужно полить!!!' : 'Растению не требуеться полив'}\n${waterTool !== undefined ? ('Осталось времени до полива: ' + diffTimeCalculation(waterTool.endTime)) : ''}\nОсталось времени до сбора: ${diffTimeCalculation(plant.harvestTime)}\n${plant.hasCrow !== undefined ? 'На растении сидит ворона, нужно согнать!!!!' : 'На растении нету вороны'}`)
    })
}

const startWatering = async (plantsNeedWater, chatId) => {
    for (let i = 0; i < plantsNeedWater.length; i++) {
        const body = {
            "farmId": `${plantsNeedWater[i]._id}`,
            "toolId": 3,
            "token": {
                "challenge": "default",
                "seccode": "default",
                "validate": "default"
            }
        }

        for (let i = 0; i < 2; i++) {
            let count = 0;

            try {
                await fetch(PVU_WATERING_LINK, {
                    method: 'post',
                    body: JSON.stringify(body),
                    headers: {
                        'authorization': currentAccount,
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
                        'origin': 'https://marketplace.plantvsundead.com',
                        'Accept': '*/*',
                        'Content-Type': 'application/json',
                        'Content-Length': '121'
                    }
                }).then(res => res.json()).then(json => {
                    if (json.status === 0) {
                        count++
                        bot.sendMessage(chatId, `${count} полив растения "${plantsNeedWater[i]._id}" сделан успешно`)
                    } else if (json.status === 20) {
                        bot.sendMessage(chatId, `Полив не требуеться`)
                    } else if (json.status === 444) {
                        bot.sendMessage(chatId, `Не в вайт листе, ожидайте своей группы`)
                    } else {
                        bot.sendMessage(chatId, `Ошибка, код: ${json.status}`)
                    }
                })
            } catch (e) {
                console.log(e)
            }
        }
    }
    plantsNeedWater = []
}

const useScareCrow = async (plantsHasCrow, chatId) => {
    for (let i = 0; i < plantsHasCrow.length; i++) {
        const body = {
            "farmId": `${plantsHasCrow[i]._id}`,
            "toolId": 4,
            "token": {
                "challenge": "default",
                "seccode": "default",
                "validate": "default"
            }
        }
        await fetch(PVU_WATERING_LINK, {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'authorization': currentAccount,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
                'origin': 'https://marketplace.plantvsundead.com',
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Content-Length': '121'
            }
        }).then(res => res.json()).then(json => {
            if (json.status === 0) {
                bot.sendMessage(chatId, `Ворона с растения "${plantsHasCrow[i]._id}" успешно прогнана`)
            } else if (json.status === 17) {
                bot.sendMessage(chatId, `Проганять ворону не требуеться`)
            } else if (json.status === 444) {
                bot.sendMessage(chatId, `Не в вайт листе, ожидайте своей группы`)
            } else {
                bot.sendMessage(chatId, `Ошибка, код: ${json.status}`)
            }
        })
    }
    plantsHasCrow = []
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
        if (plant.hasCrow !== undefined) {
            hasCrow++
            plantsHasCrow.push(plant)
        }
        if (plant.stage !== 'farming' && plant.synergy !== 'paused') {
            needHarvest++
        }
    })

    bot.sendMessage(chatId, `Нужно полить: ${needWater}${needWater !== 0 ? ', Полить /watering' : ''}\nС воронами: ${hasCrow}${hasCrow !== 0 ? ', Согнать /scarecrow' : ''}\nГотовых к сбору: ${needHarvest}\n\nДля подробной информации выполните команду /moreInfo`)
}

