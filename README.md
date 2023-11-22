# BRQ Movie App

Este é um aplicativo simples para visualização de uma lista de filmes, com a capacidade de marcar filmes como favoritos. Abaixo estão alguns detalhes importantes sobre o projeto.

## Instruções de Login
- Para acessar a tela de login, utilize as seguintes credenciais: **Usuário: user | Senha: 123**

## Configuração da API Key
- Antes de executar o aplicativo localmente, é necessário fornecer uma API Key válida do [The Movie DB](https://www.themoviedb.org/settings/api/). Insira a chave da API no arquivo `.env` na raiz do projeto com a seguinte estrutura:

```env
EXPO_PUBLIC_API_KEY=SuaChaveAqui
```
## Executando o Projeto Localmente
- Para rodar o projeto localmente, execute os seguintes comandos:

```bash
git clone https://github.com/helioLJ/brq-movies.git
cd brq-movies
npm install
npx expo start
```
- Recomendo o uso do aplicativo Expo Go para visualizar o aplicativo no seu dispositivo móvel. Leia o QRCode no terminal para visualizar no celular.

## Estrutura de Pastas
- O código é organizado em diferentes componentes, facilitando a manutenção e compreensão do projeto.

## Testes Unitários
- A cobertura de testes é garantida com o uso do [Jest](https://jestjs.io/) e [@testing-library/react-native](https://testing-library.com/docs/react-native-testing-library/intro/). Execute os testes unitários com o comando:

```bash
npm run test
```

## Estilização Rápida com Tailwindcss e Nativewind
- Utilizei [Tailwindcss](https://tailwindcss.com/) com [Nativewind](https://nativewind.io/) para uma estilização prática e ágil.

## Padronização de Código
- [ESLint](https://eslint.org/) e [Prettier](https://prettier.io/) são utilizados para manter um estilo de código consistente em toda a aplicação.

## Tipagem Forte com TypeScript
- O [TypeScript](https://www.typescriptlang.org/) é adotado para fornecer uma tipagem forte, reduzindo erros durante o desenvolvimento.

## Framework e Bibliotecas
- O projeto é baseado em [React Native](https://reactnative.dev/) com o framework [Expo](https://expo.dev/) para um desenvolvimento ágil.
- [Expo Router](https://docs.expo.dev/routing/introduction/) é utilizado para gerenciar o roteamento de rotas e abas.
- [React Hook Form](https://react-hook-form.com/) é empregado para criar formulários avançados com validações.
- [Redux](https://redux.js.org/) e [Redux Toolkit](https://redux-toolkit.js.org/) são utilizados para o gerenciamento do estado global para a funcionalidade de "Favoritos".
- [React Query](https://react-query.tanstack.com/) da Tanstack é utilizado para cacheamento de chamadas HTTP, garantindo um código mais limpo e evitando o uso desnecessário de `useState` e `useEffect`.
- [Axios](https://axios-http.com/) é utilizado para realizar chamadas à API do The Movie DB.

Sinta-se à vontade para explorar, modificar e melhorar este projeto! Se precisar de alguma ajuda ou tiver dúvidas, não hesite em entrar em contato.
