const twilio = require("twilio");
const config = require("../config");

class TwilioSender {
  constructor() {
    this.client = twilio(config.twilio.TWILIO_SID, config.twilio.TWILIO_AUTH);
  }

  async sendSms(phone, firstName, email) {
    this.client.messages
      .create({
        body: `Nuevo pedido de ${firstName}, ${email} realizado con exito`,
        from: config.twilio.TWILIO_PHONE,
        messagingServiceSid: config.twilio.TWILIO_MSG_SRV_SID,
        to: phone
      })
      .then((res) => console.log("respuesta sms:\n", res));
  }

  async sendWhatsapp(phone, firstName, email) {
    const response = await this.client.messages.create({
      body: `Nuevo pedido de ${firstName}, ${email} realizado con exito ${phone}`,
      mediaUrl: [
        "https://th.bing.com/th/id/R.08c8d89e61f42f9d0065814fc6a1530f?rik=rwu89rJBYVYPDw&pid=ImgRaw&r=0"
      ],
      from: "whatsapp:+14782804903",
      to: "whatsapp:+541164537116"
    });

    console.log("RESPUESTA wpp:\n", response);
  }
}

module.exports = new TwilioSender();
