## Twitter - B2W Interview

Este é a solução do problema proposta desenvolvido por Felippe Maurício. 

## Organização

Este repositório contém um client desenvolvido em AngularJS e um server desenvolvido em NodeJS para consumir os dados da API do Twitter.

## Como rodar o projeto? 6 passos

1- Faça um clone do projeto;
````
git clone git@github.com:felippemauricio/twitter.git
````

2- Acesse a pasta server pelo iTerm, ou qualquer outro terminal. Rode o comando a seguir para instalar as dependências do servidor;
````
npm install
````

3- Agora, inicie o servidor;
````
npm start
````

4- Agora, abra um outro terminal (não feche o que já está rodando o servidor), e acesse a pasta client. Rode o comando a seguir para instalar as dependências do client;
````
npm install
````

5- Agora, execute o comando abaixo para rodar uma task em gulp que deixará tudo certinho;
````
npm run build
````

6- Abra seu browser e acesse:
````
http://localhost:3000
````

## Problemas

1- Tive problemas com a api-key do Flickr disponibilizada. Todas as requisições davam que chave havia expirado. Para seguir, peguei uma chave temporária informada pela api. Espero que ela ainda esteja ativa no teste de vocês;

2- A api que retorna os tweets do Twitter lê no máximo de 200 em 200. E ao aplicar o filtro de não retornar as respostas, ele contabiliza os 200 e depois filtra. Assim, caso existam mais de 200 respostas seguidas, fico imposibilitado de ler mais tweets para a aba de 'Tweets';

3- Não consegui ler somente os tweets que possuiam Mídias. Neste caso, faço uma leitura normal e filtro no front.

## Data de entrega - Atenção

Minha data de entrega era até o dia 16/01/2017. Como ninguém veio falar comigo até o momento, fui fazendo algumas melhorias. Na data de entrega, tudo estava funcionando com os requisitos solicitados, mas eu não havia "enfeitado o pavão", ou, feito o "a +". Caso vocês queiram pegar o código de acordo com a data de entrega, basta ver os commits tanto no meu repositório, quanto pelos commits no pull-request. Meu intuito era melhorar um projeto meu, e não trapaciar. Por isto esta nota aqui em baixo. Obrigado desde já :)
 
````
Meu repo: https://github.com/felippemauricio/twitter
````
 
````
Pull Request: https://github.com/B2W-BIT/frontend-interview/pull/12 
```` 