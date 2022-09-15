const axios = require("axios");
const path = require("path");
require("dotenv").config()
const { sendTextMessage, sendImage, sendAudio } = require("./messages");

const sendMessage=async(req,res)=>{
    try {
     let object = req.body
     if(!req.files){
       let msgType=object.type=="link"?true:false;
       let data = {
       "preview_url":msgType,
       "recipient_type": "individual",
       "to": `91${object.number}`,
       "type":   "text",
       "text": {
         "body": `${object.text}`
       }}
       const id = await sendTextMessage(data)
       res.send(id)
     }
    if(req.files){
       let details = req.files.file.data;
       console.log(details);
       let mimtype = req.files.file.mimetype;
       let arr = mimtype.split("/")
       let  response = await axios.post(
         "https://whatsapp.turn.io/v1/media",
         details,
         {
             headers: {
                 Authorization:
                 "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUdXJuIiwiZXhwIjoxNzIzMjk0MDQ4LCJpYXQiOjE2NjIxMjI4OTAsImlzcyI6IlR1cm4iLCJqdGkiOiJkZmQzZjViNy04ZWMxLTQxMGMtYjg2OC1hMTJkY2EwMWQ3NTUiLCJuYmYiOjE2NjIxMjI4ODksInN1YiI6Im51bWJlcjozNDQ1IiwidHlwIjoiYWNjZXNzIn0.8x2Ba-VjPmcnVtfByytROQKN0nWQIvjZBQqG--AtF2hPtIEkUhLt82NqXMMdd4fcmtAIcWvaZImvW8VBbtifAQ",
                 "content-type": `${mimtype}`
             }
         })
         if(response){
           let data = {"id":response.data.media[0].id,"number":object.number}
           if(arr[0]=="image"){
             await sendImage(data)
           }
           if(arr[0]=="audio"){
             await sendAudio(data)
           }
         }
         res.send("send")
   }
} catch (error) {
     console.log(error);
    }
}

const getPhoto = async(Name)=>{
  try {
    return photo.data.preview_url
 } catch (error) {
    console.log(error);
  }
}
                  
               





const webhookForText = async(req,res)=>{
  console.log(req.body);
    try {
        let contacts = req.body.contacts[0]
        let message = req.body.messages[0]
        if (message.type=='text') {  
          if(message.text.body=='Hii'){
            let data = {
            "preview_url":false,
            "to":contacts.wa_id, 
            "recipient_type": "individual",
            "type":"text",
            "text":{
                "body":`Hii ${contacts.profile.name}`
              }
          }
          let id = await sendTextMessage(data)
          }if(message.text.body=='bye'){
            let data = {"preview_url":false,
            "to":contacts.wa_id, 
            "recipient_type": "individual",
            "type":"text",
            "text":{
                "body":`bye ${contacts.profile.name} will meet soon`
              }
          }
          let id = await sendTextMessage(data)
        
          }if(message.text.body=="cat"){
          const photo = await axios.get(`https://pixabay.com/api/?key=29946717-3800392e516e7a0f0961e4a37&q=cat&image_type=photo`)
          console.log(photo.data.hits[0].previewURL);
          let d = {
              "preview_url":true,
              "recipient_type": "individual",
              "to": `91${contacts.wa_id}`,
              "type": "text",
              "text": {
                  "body":`${photo.data.hits[0].previewURL}`
              }
           }
         let id  = sendTextMessage(d)
          }
         }
    } catch (error) {
        console.log(error);
    }
}
module.exports={sendMessage,webhookForText}



