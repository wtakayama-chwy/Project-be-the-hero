# be-the-hero 

### O que é? 
  Projeto fullstack para aprendizado próprio, focado na linguagem JavaScript.

### Stack utilizada: 
  React (Frontend), React Native (Mobile) e NodeJS (backend)

### Objetivo:
  Criar uma plataforma simples onde ONGs possam se registrar e cadastrar incidentes, os quais
necessitem de alguma ajuda financeira. A aplicação terá versão web e mobile.

O que aprendi: 

1) Backend:
  - Como utilizar o Nodejs
  - Como instalar e utilizar o EXPRESS para facilitar as pré-configurações do Backend;
  - Como usar o nodemon para automatizar o processo de restart do servidor local;
  - Abstrair o objetivo da aplicação e separar entidades e funcionalidade;
  - Utilizar QueryBuilder Knex para SQLite3: Criação de tabelas, como criar uma conexão com o banco de dados para desenvolvimento e testes, realizar migrations para controlar versões do Banco de Dados e ainda facilitar o trabalho de desenvolvedores;
  - Como utilizar o INSOMNIA para facilitar a realização de requisições HTTP do tipo GET, POST e DELETE. Tornando prática a visualização do JSON retornado e erros com as possíveis rotas;
  - Tomar cuidado para não realizar requisições demais, sobrecarregando nosso servidor e comprometendo a perfomance de nossa aplicação
  - Como mapear as rotas dentro da nossa aplicação e utilizar o CELEBRATE para validação doas rotas, de acordo com o tipo de dado;
  - Um pouco sobre CORS e sua importância na segurança de nossa aplicação
  - A importância de declarar a função assíncronas para evitar erros;
  - Utilização de 1 teste unitário para testar a geração de id único;
  - Utilização de 1 teste de integração testando a criação da ONG e verificando se o id criado é compatível com o esperado (ter lenth: 8 e a propriedade de id, tomando cuidado para automatizar o reset de nosso DB, utilizando um banco de dados criado especificamente para testes e realizar rollback para resetar o mesmo, além de realizar a migration;
  

2) Frontend:
  - Estrutura básica e funcionamento do REACT, e, o porquê é uma ferramenta muito poderosa, para criação de SPA (Single Page Applications)
  - O que são componentes, como lidar com a manipulação de props, como o React renderiza elementos de acordo com mudanças de estado e a importância da imutabilidade do estado, que não deve ser manipulado diretamente;
  - Separar nossos Controllers e serviços da aplicação;
  - Como subir ícones diretamente da dependência: react-icons;
  - Como criar rotas entre as "páginas" de nossa aplicação, utilizando o BrowserRouter, Switch e Route, useHistory e Link com react-router-dom;
  - Utilização do AXIOS para requisições HTTP, linkando com nosso backend;
  - Estilização de nossos componentes, de acordo com sua className, utilizando CSS e Flexbox. E, ainda manter um arquivo global para componentes que tenham mesma estilização;
  - Utilizar o Intl para formatações internacionais, como por exemplo currency 'BRL' = R$;
  - Com localStorage, podemos verificar o id o nome da ONG e exibir as informações na tela, de acordo com qual ONG estiver logada;
  

3) Mobile:
  - Por quê a abordagem do ReactNative é tão poderosa em relação ao desenvolvimento padrão (Kotlin/Java para dev Android & Swift/Objective-C para dev IOS). 
  - As diferenças básicas entre Reacte ReactNative - Não há semântica, herança; 
  - Como utilizar o framework EXPO para ir testando nossa aplicação diretamente no smartphone Android ou iOS;
  - O porquê é importante importar logos em diferentes resoluções devido ao DPI de cada tela de smartphone;
  - Como criar rotas entre as "páginas" de nossa aplicação utilizando NavigationContainer, createStackNavigator
  - Como usar MailComposer do expo-mail-composer para abrir o e-mail já com o conteúdo básico pré-configurado;
  - Como abrir o WhatsApp de acordo com o WhatsApp cadastrado na aplicação;
  - Como criar um scroll infinito que irá renderizar de acordo com a posição do scroll na tela do usuário, utilizando FlatList e lógica dentro de uma função que controla o loading de nossos incidentes cadastrado;
  - Realizar a importação de constantes para estilização de nossos elementos utilizando o StyleSheet.create;
  - Como subir ícones diretamente da dependência: @expo/vector-icons;
  - Utilização do AXIOS para requisições HTTP, linkando com nosso backend, importante ressaltar que devemos prestar atenção em qual será nossa URL Base, pois se estivermos utilizando o EXPO devemos verificar o ip utilizado e apontar corretamente;
  - Utilizar o Intl para formatações internacionais, como por exemplo currency 'BRL' = R$;
  

Projeto Baseado na Semana OmniStack 11.0, realizado no período de 23/03 à 29/03/2020. 
