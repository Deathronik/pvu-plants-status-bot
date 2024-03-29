import fetch from "node-fetch";
import moment from "moment";
import TelegramBot from "node-telegram-bot-api"

const accountsTokens = ['Bearer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHg1N2I1MTk0NjhhMjUzYzhhZmI3ZDUyZTc0ZTc1NzJmMjlmMTk0NzU4IiwibG9naW5UaW1lIjoxNjMxODk5MDcyOTQ5LCJjcmVhdGVEYXRlIjoiMjAyMS0wOC0xNSAwOTozNzoxMyIsImlhdCI6MTYzMTg5OTA3Mn0.BxHLLHmJWnbsPM7K-DmjQUKdOeu9Nl0IbHq9dk55wuw',
    'Bearer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHgwYTIzMDM3OTBmNDZhNmIxOTc3ZTliNWUzYjE3YWJkYjUxNWNkMmY2IiwibG9naW5UaW1lIjoxNjMxNzIxODI1MDc0LCJjcmVhdGVEYXRlIjoiMjAyMS0wOC0xNSAxNTo0NzoxNSIsImlhdCI6MTYzMTcyMTgyNX0.OZhv6SADuIC9FFWSufl6rWkKuk66a5003K2f9wWF4IY']

let currentAccount = accountsTokens[0]

const PVU_PLANTS_STATUS_LINK = 'https://backend-farm-stg.plantvsundead.com/farms?limit=10&offset=0'
const PVU_TOOL_LINK = 'https://backend-farm-stg.plantvsundead.com/farms/apply-tool'
const PVU_GROUP_LINK = 'https://backend-farm.plantvsundead.com/farm-status'
const PVU_WORLDTREE_STATUS_LINK = 'https://backend-farm.plantvsundead.com/world-tree/datas'
const token = 'your token';
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

moment.locale('ru-RU')

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
        bot.sendMessage(chatId, 'Не в вайтлисте, ожидайте свою группу\n\nУзнать свою группу /getgroup\nПолучить статус дерева /worldtree')
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
        bot.sendMessage(chatId, 'Не в вайтлисте, ожидайте свою группу\n\nУзнать свою группу /getgroup\nПолучить статус дерева /worldtree')
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
        bot.sendMessage(chatId, 'Не в вайтлисте, ожидайте свою группу\n\nУзнать свою группу /getgroup\nПолучить статус дерева /worldtree')
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
        bot.sendMessage(chatId, 'Не в вайтлисте, ожидайте свою группу')
    } else if (plantsJson.status === 0) {
        useScareCrow(plantsHasCrow, chatId)
    } else {
        bot.sendMessage(chatId, `Ошибка, код: ${plantsJson.status}`)
    }
});

bot.onText(/\/getgroup/, async (msg) => {
    const chatId = msg.chat.id;

    const groupJson = await getGroupStatus()
    if (groupJson.status === 0) {
        bot.sendMessage(chatId, `Текущая группа: ${groupJson.data.currentGroup}\nВаша группа: ${groupJson.data.inGroup}\n\nВаша группа будет ${diffTimeCalculation(groupJson.data.nextGroup)}`)
    } else {
        bot.sendMessage(chatId, `Ошибка, код: ${groupJson.status}`)
    }
});

bot.onText(/\/worldtree/, async (msg) => {
    const chatId = msg.chat.id;

    const treeJson = await getTreeStatus()
    if (treeJson.status === 0) {
        bot.sendMessage(chatId, `Количество поливов: ${treeJson.data.totalWater}\nУровень награды: ${treeJson.data.level}\n${treeJson.data.yesterdayReward === true ? 'Можно собрать награду за прошлый день' : ''}`)
    } else {
        bot.sendMessage(chatId, `Не в вайтлисте, ожидайте свою группу`)
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

const getGroupStatus = async () => {
    const response = await fetch(PVU_GROUP_LINK, {
        headers: {
            'authorization': currentAccount,
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
            'origin': 'https://marketplace.plantvsundead.com'
        }
    })

    return response.json()
}

const diffTimeCalculation = (endTime) => {
    let end = moment(endTime)
    let diffTime = end.fromNow()
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
                await fetch(PVU_TOOL_LINK, {
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
        await fetch(PVU_TOOL_LINK, {
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

    bot.sendMessage(chatId, `Нужно полить: ${needWater}${needWater !== 0 ? ', Полить /watering' : ''}\nС воронами: ${hasCrow}${hasCrow !== 0 ? ', Согнать /scarecrow' : ''}\nГотовых к сбору: ${needHarvest}\n\nДля подробной информации выполните команду /moreInfo\nЧтобы узнать группу выполните команду /getgroup`)
}

const getTreeStatus = async (chatId) => {
    const response = await fetch(PVU_WORLDTREE_STATUS_LINK, {
        headers: {
            'authorization': currentAccount,
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
            'origin': 'https://marketplace.plantvsundead.com'
        }
    })

    return response.json()
}

