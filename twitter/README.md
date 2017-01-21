## Twitter - B2W Interview

Este é a solução do problema proposta desenvolvido por Felippe Maurício. 

## Organização

Este repositório contém um client desenvolvido em AngularJS e um server desenvolvido em NodeJS para consumir os dados da API do Twitter.

## Como rodar o projeto? 56 passos

1- Faça um clone do repositório em sua máquina;
````
git clone git@github.com:felippemauricio/twitter.git
````


2- Pelo terminal, acesse a pasta server. Logo depois, instale todas as dependências do servidor;
````
cd server
npm install
````

3- Rode o camando a seguir em seu terminal. Ele iniciará o servidor na porta 3000.
````
npm start
````

4- Agora, abra um segundo terminal, acesse a pasta client que está no mesmo nível que a pasta server. Depois, instale todas as dependências do client; 
````
cd server
npm install
````

5- Agora, rode o comando a seguir. Ele irá disparar uma task em gulp que fará todas as concatenações dos arquivos e deixará tudo prontinho.
````
npm run build
````


6- Acesse `localhost:3000 em seu browser.


## Problemas


Tive problemas com a api-key do Flickr disponibilizada. Todas as requisições davam que chave havia expirado. Para seguir, peguei uma chave temporária informada pela api. Espero que ela ainda esteja ativa no teste de vocês.
