# Documentação

## Eder Sampaio
- **E-mail:** [edersampaio@outlook.com.br](mailto:edersampaio@outlook.com.br)
- **Telefone:** (11) 98658-3449

### Observações

Gostaria de fazer algumas considerações antes que o meu teste fosse avaliado. Não consegui fazer a integração da aplicação com a API do Twitter, pesquisei, e algumas soluções propostas eram em PHP, Angular.js ou React. Estou iniciando os estudos em ES6 e posteriormente Angular.js e React. Não deixei de fazer o teste, por isso acabei trabalhando com mocks. Gostaria que se possível meu teste fosse avaliado. Fico a disposição para esclarecer quaisquer dúvidas.

Obrigado pela oportunidade.

## Rodando o projeto

```
$ npm install && gulp server
```

## Dependências

### Node.js

```
$ sudo apt-get update
$ sudo apt-get install nodejs npm
```

### Gulp.js

```
$ npm install gulp-cli -g
$ npm install gulp -D
```
## Dependências opcionais

### Ruby

```
$ sudo apt-get install ruby-full
```

### Sass

```
$ sudo gem install sass
```

## Tarefas Gulp

### gulp sass

Compila os arquivos .scss do diretório src/scss/. Requer dependências opcionais.

```
$ gulp sass
```

### gulp scripts

Concatena e minifica os arquivos .js do diretório src/js/.

```
$ gulp scripts
```

### gulp hint

Busca e reporta erros nos arquivos .js do diretório src/js/.

```
$ gulp hint
```

### gulp images

Otimiza images PNG, JPG, GIF e SVG.

```
$ gulp images
```

### gulp watch

Verifica as alterações dos arquivos .scss e .js e executa as tarefas gulp sass, gulp scripts e gulp hint.

```
$ gulp watch
```

### gulp server

Inicia servidor Node na porta 4000.

```
$ gulp server
```

### gulp

Roda todas as tarefas.

```
$ gulp
```