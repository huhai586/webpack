var merge = require('webpack-merge');


var common = {
    module: {
  loaders: [
    {
      test: /\.css$/,
      loaders: ['style', 'css'],
    },
  ]
}
}

let oo = merge(common, {
    module: {
      // loaders will get concatenated!
      loaders: [
        {
          test: /\.css$/,
          loader: 'babel?stage=1'
        },
      ],
    }


})

console.log(oo)