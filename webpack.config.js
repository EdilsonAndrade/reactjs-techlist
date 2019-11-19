const path = require('path')
module.exports = {
  //onde estão o arquivo de entrada da aplicação
  entry: path.resolve(__dirname, 'src', 'index.js'),
  //informa onde será a saida e o nome do arquivo com toda a aplicação
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    //aqui vão os modulos que será utilizados para transpilarar os arquivos, js, css e etc para que o browser entenda
    rules: [
      //informar ao webpack para cada tipo de arquivo o q ele deve utilizar
      {
        //faz uma verificação onde todo arquivo que termine com .js excluindo a pasta node_modules seja carregado com o babel loader para interpretar ao navegador
        //abaixo toda expressãop regular se inicia comop segue: /  /  o \. faz um scape do . pois sem isto ele vai entender q é qualquer caracter
        // quando se poem a barra ele diz exatamente um ponto e o $ diz que o arquivo tem que terminar deste jeito ou seja. .js
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
           //abaixo toda expressãop regular se inicia comop segue: /  /  o \. faz um scape do . pois sem isto ele vai entender q é qualquer caracter
        // quando se poem a barra ele diz exatamente um ponto e o $ diz que o arquivo tem que terminar deste jeito ou seja. .js
        test: /\.css$/,
        use:[
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g|)$/i,
        use:{
          loader: 'file-loader'
        }
      }
    ]
  }
}