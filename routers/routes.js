const express = require("express")
const { sendMessage, webhookForText } = require("../controller/chatbot")
const router = express.Router()

router.post("/sendMessage",sendMessage)
router.post("/webhook",webhookForText)

module.exports=router

