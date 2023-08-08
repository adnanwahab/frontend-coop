// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const Sheets = require('node-sheets').default;

const handler = async (event) => {


  callApi











  try {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
    body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }


async function callApi() {
  try {
    const gs = new Sheets('1amfst1WVcQDntGe6walYt-4O5SCrHBD5WntbjhvfIm4');
    const authData = require('./client_secret_137652990869-7fpfbjnlsidolcmkftic4i7n643eggrs.apps.googleusercontent.com.json'); // authData = { client_email, private_key }
    await gs.authorizeJWT(authData);
    const table = await gs.tables('Formats!A1:E3');
    console.log(table.headers);
    console.log(table.formats);
    console.log(table.rows);
  } catch (err) {
    console.error(err);
  }
}

callApi()