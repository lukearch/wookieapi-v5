const { builder } = require('@netlify/functions')

const { render } = require('../dist/wookieapi-v5/serverless/main')

const handler = async (event, context) => {
  try {
    const { html, headers, status } = await render(event, context)
    return {
      statusCode: status,
      body: html,
      multiValueHeaders: {
        'Content-Type': ['text/html; charset=utf-8'],
        ...headers
      }
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString()
    }
  }
}

exports.handler = builder(handler)
