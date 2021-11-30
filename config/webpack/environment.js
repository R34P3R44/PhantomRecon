import { environment } from 'npm i --save-dev @types/rails__webpacker'

import { ProvidePlugin } from 'webpack'
environment.plugins.prepend('Provide',
  new ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery'
  })
)

module.exports = environment