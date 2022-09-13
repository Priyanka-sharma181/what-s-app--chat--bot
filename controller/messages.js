const axios = require("axios")

async function sendTextMessage(data){
 try {
    const response= await axios.post(
        "https://whatsapp.turn.io/v1/messages",
        data,
        {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUdXJuIiwiZXhwIjoxNzIzMjk0MDQ4LCJpYXQiOjE2NjIxMjI4OTAsImlzcyI6IlR1cm4iLCJqdGkiOiJkZmQzZjViNy04ZWMxLTQxMGMtYjg2OC1hMTJkY2EwMWQ3NTUiLCJuYmYiOjE2NjIxMjI4ODksInN1YiI6Im51bWJlcjozNDQ1IiwidHlwIjoiYWNjZXNzIn0.8x2Ba-VjPmcnVtfByytROQKN0nWQIvjZBQqG--AtF2hPtIEkUhLt82NqXMMdd4fcmtAIcWvaZImvW8VBbtifAQ",
            "content-type": "application/json",
        },
    })
    const id = response.data.messages[0].id
    return id
    
 } catch (error) {
    return error
 }
}


async function sendImage(data){
    try {
        const response =await axios.post('https://whatsapp.turn.io/v1/messages',
        {
            "recipient_type": "individual",
            "to": `91${data.number}`,
            "type": "image",
            "image": {
                "id": `${data.id}`,
                "caption": "your-image-caption"
            }
        },
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUdXJuIiwiZXhwIjoxNzIzMjk0MDQ4LCJpYXQiOjE2NjIxMjI4OTAsImlzcyI6IlR1cm4iLCJqdGkiOiJkZmQzZjViNy04ZWMxLTQxMGMtYjg2OC1hMTJkY2EwMWQ3NTUiLCJuYmYiOjE2NjIxMjI4ODksInN1YiI6Im51bWJlcjozNDQ1IiwidHlwIjoiYWNjZXNzIn0.8x2Ba-VjPmcnVtfByytROQKN0nWQIvjZBQqG--AtF2hPtIEkUhLt82NqXMMdd4fcmtAIcWvaZImvW8VBbtifAQ",
                "content-type": "application/json",
            }
        }
        )
    } catch (error) {
        console.log(error);
    }
}

async function sendAudio(){
    try{
        let response = await axios.post(
            "https://whatsapp.turn.io/v1/messages",
            {
                "recipient_type": "individual",
                "to": `91${data.number}`,
                "type": "audio",
                "audio": {
                    "id": `${data.id}`,
                }
    
            },
            {
                headers: {
                    Authorization:
                    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUdXJuIiwiZXhwIjoxNzIzMjk0MDQ4LCJpYXQiOjE2NjIxMjI4OTAsImlzcyI6IlR1cm4iLCJqdGkiOiJkZmQzZjViNy04ZWMxLTQxMGMtYjg2OC1hMTJkY2EwMWQ3NTUiLCJuYmYiOjE2NjIxMjI4ODksInN1YiI6Im51bWJlcjozNDQ1IiwidHlwIjoiYWNjZXNzIn0.8x2Ba-VjPmcnVtfByytROQKN0nWQIvjZBQqG--AtF2hPtIEkUhLt82NqXMMdd4fcmtAIcWvaZImvW8VBbtifAQ",
                   "content-type": "application/json",
                },
            }
        );
      }
      catch(err){
         console.log(err.message);  
      }
    
}



module.exports = {sendTextMessage,sendImage,sendAudio}