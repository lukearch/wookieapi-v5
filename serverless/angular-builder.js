import * as builder from '@netlify/functions'
import * as render from '../dist/wookieapi-v5/serverless/main'
import * as _mockBrowser from 'mock-browser'

const handler = async (event, context) => {
  try {
    const { html, headers, status } = await render(event, context)
    const MockBrowser = _mockBrowser.mocks.MockBrowser
    const mock = new MockBrowser()

    global['document'] = mock.getDocument()
    global['window'] = mock.getWindow()
    global['navigator'] = mock.getNavigator()
    global['localStorage'] = mock.getLocalStorage()

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
