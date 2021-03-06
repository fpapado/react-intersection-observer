import React from 'react'
import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import pck from '../package.json'
import './base.css'

setOptions({
  name: pck.name,
  url: pck.repository ? pck.repository.url : null,
})

/**
 * Use require.context to load dynamically: https://webpack.github.io/docs/context.html
 */
const req = require.context('../stories', true, /story\.js$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
