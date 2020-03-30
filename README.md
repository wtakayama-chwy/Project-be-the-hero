# Aplicação Be The Hero

## O que é? 
  Projeto fullstack para aprendizado próprio, focado na linguagem JavaScript.
  #### Demonstração versão Desktop (React + NodeJs):
  <img src="https://media.giphy.com/media/ie7MAqv6wOxJeKtk4J/giphy.gif">

## Stack utilizada: 
  - React (Frontend) <img src="https://cdn.iconscout.com/icon/free/png-256/react-4-1175110.png" height="35" alt="react-logo">
  - React Native (Mobile) <img src="https://toppng.com/uploads/preview/react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-11562851994zqcpwozsvy.png" height="35" alt="react-native-logo">
  - NodeJS (backend) <img src="https://img.favpng.com/7/2/3/node-js-javascript-react-png-favpng-ftgaqpknWg8SBBpxQAHqFq4wq.jpg" height="35" alt="nodejs-logo">

## Objetivo:
  Criar uma plataforma simples onde ONGs possam se registrar e cadastrar incidentes, os quais
necessitem de alguma ajuda financeira. A aplicação terá versão web e mobile.

## O que aprendi: 

### Backend:
  - Como utilizar o Nodejs
  - Como instalar e utilizar o __*EXPRESS*__ para facilitar as pré-configurações do Backend;
  - Como usar o __*NODEMON*__ para automatizar o processo de restart do servidor local;
  - Abstrair o objetivo da aplicação e separar **entidades e funcionalidade**;
  - Utilizar QueryBuilder __*KNEX*__ para __*SQLite3*__: Criação de tabelas, como criar uma conexão com o banco de dados para desenvolvimento e testes, realizar **migrations** para controlar versões do Banco de Dados e ainda facilitar o trabalho de desenvolvedores;
  - Como utilizar o __*INSOMNIA*__ para facilitar a realização de **requisições HTTP do tipo GET, POST e DELETE**. Tornando prática a visualização do JSON retornado e tratar erros com as possíveis rotas;
  - Tomar cuidado para não realizar requisições demais, sobrecarregando nosso servidor e comprometendo a perfomance de nossa aplicação
  - Como mapear as rotas dentro da nossa aplicação e utilizar o __*CELEBRATE*__ para validação doas rotas, de acordo com o tipo de dado;
  - Um pouco sobre __*CORS*__ e sua importância na segurança de nossa aplicação
  - A importância de declarar a função assíncronas para evitar erros;
  - Utilização de 1 **teste unitário** para testar a geração de id único;
  - Utilização de 1 **teste de integração** testando a criação da ONG e verificando se o id criado é compatível com o esperado (ter lenth: 8 e a propriedade de id, tomando cuidado para automatizar o reset de nosso DB: utilizando um banco de dados criado especificamente para testes e realizar rollback para resetar o mesmo, além de realizar a migration;
  

### Frontend:
  - Estrutura básica e funcionamento do REACT, e, o porquê é uma ferramenta muito poderosa, para criação de SPA (Single Page Applications)
  - O que são **componentes**, como lidar com a manipulação de **props**, como o React renderiza elementos de acordo com mudanças de **estado** e a importância da **imutabilidade** do estado, que não deve ser manipulado diretamente;
  - Separar nossos Controllers e serviços da aplicação;
  - Como subir ícones diretamente da dependência: __*react-icons*__;
  - Como criar **rotas** entre as "páginas" de nossa aplicação, utilizando o __*BrowserRouter, Switch e Route, useHistory e Link com react-router-dom*__;
  - Utilização do __*AXIOS*__ para requisições HTTP, linkando com nosso backend;
  - Estilização de nossos componentes, de acordo com sua **className, utilizando CSS e Flexbox**. E, ainda manter um arquivo global para componentes que tenham mesma estilização;
  - Utilizar o __*Intl*__ para formatações internacionais, como por exemplo currency 'BRL' = R$;
  - Com localStorage, podemos verificar o id o nome da ONG e exibir as informações na tela, de acordo com qual ONG estiver logada;
  

### Mobile:
  - Por quê a **abordagem do ReactNative é tão poderosa** em relação ao desenvolvimento padrão (Kotlin/Java para dev Android & Swift/Objective-C para dev IOS). 
  - As diferenças básicas entre Reacte ReactNative - Não há semântica, herança; 
  - Como utilizar o __*framework EXPO*__ para testar nossa aplicação diretamente no smartphone Android ou iOS;
  - O porquê é importante **importar logos em diferentes resoluções** devido ao DPI de cada tela de smartphone;
  - Como criar rotas entre as "páginas" de nossa aplicação utilizando __*NavigationContainer e createStackNavigator*__
  - Como usar __*MailComposer do expo-mail-composer*__ para abrir o e-mail já com o conteúdo básico pré-configurado;
  - Como abrir o **WhatsApp** de acordo com o WhatsApp cadastrado na aplicação;
  - Como criar um **scroll infinito** que irá renderizar de acordo com a posição do scroll na tela do usuário, utilizando __*FlatList*__ e lógica dentro de uma função que controla o loading de nossos incidentes cadastrado;
  - Realizar a importação de **constantes para estilização** de nossos elementos utilizando o __*StyleSheet.create*__;
  - Como subir ícones diretamente da dependência: __*@expo/vector-icons*__;
  - Utilização do __*AXIOS*__ para requisições HTTP, linkando com nosso backend. Importante ressaltar que devemos prestar atenção em qual será nossa URL Base, pois, se estivermos utilizando o EXPO devemos verificar o ip utilizado e apontar corretamente;
  - Utilizar o __*Intl*__ para formatações internacionais, como por exemplo currency 'BRL' = R$;
  
## Contribuições
Pull requests são bem-vindo. Para maiores alterações favor abrir uma issue para conversarmos.
Caso tenha algo que possa ser melhorado, não hesite em me contatar :smile:

## License
Projeto Baseado na [Semana OmniStack 11.0](https://rocketseat.com.br/week/inscricao/11.0), realizado no período de 23/03 à 29/03/2020. 
MIT License - Copyright (c) 2020 william-takayama
