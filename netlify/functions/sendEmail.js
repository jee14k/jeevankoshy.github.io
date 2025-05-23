const emailjs = require('@emailjs/nodejs');

exports.handler = async function(event) {
  const { name, email, message } = JSON.parse(event.body);

  try {
    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      { from_name: name, from_email: email, message },
      { publicKey: process.env.EMAILJS_PUBLIC_KEY, privateKey: process.env.EMAILJS_PRIVATE_KEY }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, response })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
};
