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

        bot.sendMessage(chatId, `Plant number: ${(index + 1)}\nPlant id: ${plant._id}\n${plant.needWater ? 'The plant requires watering' : 'The plant don`t need to be watered'}\nTime left to watering: ${diffTimeCalculation(waterTool.endTime)}\nTime left to harvest: ${diffTimeCalculation(plant.harvestTime)}\n${plant.hasCrow !== undefined ? 'Plant has crow!!! Need use Scarecrow!' : 'There is no crow on the plant'}`)
    })
}

