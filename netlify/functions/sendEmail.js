const emailjs = require('@emailjs/nodejs');

exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: "Method Not Allowed" })
    };
  }

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, message: "Request body is missing" })
    };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, message: "Invalid JSON body" })
    };
  }

  const { name, email, message } = data;

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, message: "Missing name, email, or message" })
    };
  }

  try {
    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      { from_name: name, from_email: email, message },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, response })
    };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: error.message })
    };
  }
};
