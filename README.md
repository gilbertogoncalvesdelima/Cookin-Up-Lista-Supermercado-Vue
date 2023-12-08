## Projeto, Cookin'Up

A ideia do projeto é a seguinte: você está em casa, não possui muitas ideias de receitas para preparar, portanto, pode utilizar este site para selecionar os ingredientes que possui em sua casa.

Para simular essa situação, vamos selecionar alguns ingredientes nos cards de categoria que serão: azeite de oliva, alho, orégano, ovos, queijo e leite.

À medida que selecionamos os ingredientes, eles aparecem na lista que está na parte superior da seção de ingredientes intitulada "Sua lista". Podemos remover esses ingredientes, caso não queiramos utilizá-los. Basta desselecioná-los.

Ao final da página, clicamos no botão "Buscar receitas". Feito isso, aparecem as receitas que podem ser feitas com os ingredientes selecionados. Caso queira, podemos clicar no botão "Editar lista" e realizar uma nova busca.

criar um projeto Vue do zero, criará os primeiros componentes, entenderá o que são, para que servem e como podem nos auxiliar.

Vamos também conhecer várias diretivas do Vue que resolvem problemas comuns de HTML e CSS, muitas vezes relacionados à repetição de código. Além disso, abordaremos o que é estado e reatividade, um dos conceitos fundamentais de frameworks de front-end.

Aplicaremos comunicação entre componentes, utilizando props e eventos. Estes são problemas muito específicos que surgem quando estamos trabalhando com frameworks de front-end.

Por fim, vamos explorar os métodos de ciclo de vida do Vue, pois utilizaremos um deles, o Created.

## Preparando o ambiente: Ferramentas

Visual Studio Code
Para realizar o curso, você pode utilizar o editor de código de sua preferência, mas recomendamos que você utilize o Visual Studio Code (ou VSCode, ou VSC) para utilizar os mesmos recursos que a pessoa instrutora utiliza.

Node.js
Vamos precisar do Node.js (ou Node) durante todo o curso. Caso você já tenha feito algum curso de JavaScript, talvez o Node já esteja instalado. Se você não tiver certeza, é possível conferir com os seguintes passos:

Abra uma janela do terminal do seu computador de acordo com seu sistema operacional:
Windows: no campo de busca do menu Iniciar, pesquise pelo programa “Prompt de Comando” ou pelo programa “Windows Powershell” e selecione um deles.
MacOs: acesse o terminal disponível no menu de Aplicações, dentro da pasta de Utilitários.
Linux (Ubuntu): acesse o terminal disponível no menu de Programas/Aplicações. Caso não localize, pode estar dentro da pasta Utilitários.
No terminal que abrir, digite node --version ou node -v e pressione Enter. Caso retorne um número de versão, como por exemplo v18.0.0, significa que o Node já está instalado.
Caso o Node não esteja instalado, você pode seguir o passo a passo do artigo Como instalar o Node.js no Windows, Linux e macOS!

Utilizaremos a versão 18.17.0 do Node. Recomenda-se que você utilize a versão LTS mais recente e que seja no mínimo a versão 18. Não utilize a versão Current, pois apesar de ser mais recente, ela pode conter alguns bugs.

## Criando o projeto no framework, Vue

tilizamos o comando npm create vue@3.7.3 (ou o npm create vue@latest), que executa o pacote create-vue para nos ajudar com as configurações iniciais do projeto.
Identificar as dependências de um projeto Node e instalá-las:
As dependências são listadas no arquivo package.json e devemos instalá-las com o comando npm install.
Criar o seu primeiro componente e entender suas vantagens:
Os componentes do Vue são arquivos com a extensão .vue e que seguem uma estrutura chamada SFC (Single-File Component, ou Componente de arquivo único, em português).
Cada componente encapsula seu conteúdo (<template>), estilos (<style>) e lógica (<script>) em um único arquivo, aumentando a organização do projeto.
Diferenciar estilos “escopados” de estilos normais:
Ao utilizar o atributo scoped em uma tag <style>, os estilos se limitam ao escopo do arquivo atual. Isso quer dizer que eles não vão afetar outros componentes, evitando conflitos de código CSS.
Ainda é possível utilizar tags <style> normais, o que fará com que seus estilos sejam globais.


```js
npm create vue@3.7.3
```

Quando você instalar a primeira vez, ele ira perguntar se você quer instalar o Pacote Create Vue, depois só colocar Y, que no caso é sim

```js
Need to install the following packages:
create-vue@3.7.3
Ok to proceed? (y) y
```

Depois irá aparecer uma opção para você colocar o nome do projeto

```js
Project name: » nome-do-projeto
```
Depois irá perguntar se você gostaria da opção typescript, no meu caso irei utilizar então é yes

```js
? Add TypeScript? » No / Yes
```
Eu coloquei que não

```js
? Add JSX Support? » No / Yes
```

Coloquei Não

```js
? Add Vue Router for Single Page Application development? » No / Yes
```

Não

```js
? Add Pinia for state management? » No / Yes
```

Não 

```js
? Add Vitest for Unit Testing? » No / Yes
```
Não

```js
? Add an End-to-End Testing Solution? » - Use arrow-keys. Return to submit.
>   No
    Cypress
    Nightwatch
    Playwright
```

Não 

```js
? Add ESLint for code quality? » No / Yes
```

Fim, aparecera assim


```js
Scaffolding project in C:\Users\User\Documents\Alura\Front-End\Vue\Projeto\Projeto-Vue\cookin-up...

Done. Now run:

  cd cookin-up
  npm install
  npm run dev
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

dando tudo certo, abrira uma URL

```sh
  VITE v4.5.1  ready in 551 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

## Extenões Utilizadas no VsCode

```sh
Vue Language Features (Volar)
```

```sh
TypeScript Vue Plugin (Volar)
```

Habilitando o modo Takeover
Você pode realizar mais uma etapa para otimizar a performance do seu VSCode, que é habilitar o modo Takeover da extensão Volar. Essa etapa é recomendada pelo Vue quando estamos trabalhando em um projeto Vue com TypeScript. Para habilitar esse modo, basta seguir os passos da seção Volar Takeover Mode da documentação.

```sh
https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode
```
```sh
@builtin typeScript
```

## CSS com Escopo

App.vue: abaixo do banner, escrevemos a abreviação Emmet h1.titulo para adicionar um <h1> com a classe titulo. Também vamos preencher este h1 com o "Texto do App.vue"

Assim sendo, dentro do <style scoped>, referenciaremos esta classe .titulo passando a propriedade color com valor red - um clássico teste de CSS.

App.vue

```sh
<template>
    <Banner />
    
    <h1 class="titulo">
        Texto do App.vue
    </h1>
</template>

<style scoped>
.titulo {
    color: red;
}
</style>
```

Ao salvar este arquivo e abrir o navegador, aparece "Texto do App.vue" em vermelho no canto inferior esquerdo do banner

Agora, faremos o mesmo no banner. Dentro do <header>, adicionaremos um <h1> com a mesma classe titulo, preenchido com o texto "Texto do Banner.vue".

Banner.vue

```sh
<template>
    <header class="banner">
        <!-- código omitido -->
        
        <h1 class="titulo">
        Texto do App.vue
        </h1>
    </header>
</template>
```

Será que este <h1> que está com mesma classe influenciado pela classe que declaramos no App.vue, com o estilo de cor vermelha? Novamente, salvamos o arquivo e vamos verificar no navegador.

O "Texto do Banner.vue" é exibido, porém, não está vermelho. Portanto, o estilo que inserimos no App.vue, que deveria colorir de vermelho qualquer elemento com a classe titulo, não está afetando o componente do banner. Essa é a explicação do que significa o scoped (ou "com escopo" em português).

Este atributo indica que os estilos afetam apenas o escopo do arquivo atual, não vazando para outros componentes. Isso é um grande benefício para evitar problemas de conflitos CSS no front-end.

Portanto, é padrão utilizar o <style scoped>, pois auxilia bastante no nosso desenvolvimento.

Mas como realmente funciona internamente? Vamos abrir o navegador e inspecionar o elemento "Texo do App.vue", que está vermelho. Podemos usar a tecla "F12" para abrir o DevTools ou usar as teclas "Ctrl + Shift + C "e passar o cursor por cima de "Texto do App.vue".


```sh
<h1 data-v-7a7a37b1 class="titulo"> Texto do App.vue</h1>
```

No DevTools, podemos visualizar que a tag <h1> está com um atributo chamado data, acompanhado de uma sequência de caracteres. Abaixo, o estilo de cor vermelha está associado à classe titulo e, ao mesmo tempo, identificando este atributo data.


```sh
.titulo[data-v-7a7a37b1] {
    color:red;
}
```
Ao analisar o "texto do Banner.vue", dentro do <header>, podemos verificar que ele também possui um atributo data, mas com um identificador diferente.

```sh
<h1 class="titulo" data-v-3587acbb > Texto do Banner.vue</h1>
```

Isso ocorre porque, quando inserimos o atributo scoped na tag <style> de um componente, o Vue.js adiciona atributos com identificadores únicos para cada componente. Desta forma, todos os elementos do Banner.vue terão o mesmo identificador e não serão afetados pelo estilo de cor vermelha dos elementos do arquivo App.vue.

O Vue.js se utiliza de uma ferramenta chamada PostCSS para aplicar essa diferenciação e evitar conflitos entre os estilos.

Além dos estilos scoped, também temos a possibilidade de declarar um estilo global, se assim desejarmos, no mesmo componente. Para isso, vamos voltar para o VS Code e remover o scoped se quisermos que nossa classe titulo afete qualquer outro componente da nossa aplicação.

App.vue

```sh
<style>
 .titulo {
    color: red;
}
</style>
```

Se salvamos o arquivo e retornamos ao navegador, os dois textos que inserimos estarão coloridos de vermelho.

Além disso, é possível ter uma tag style normal e uma tag style scoped no mesmo componente.

Ademais, outra maneira de usar estilos globais é a que nós já estamos empregando neste projeto. Em "src > assets > main.css", já preparamos alguns estilos globais, como cabeçalhos, por exemplo.

Essa é outra maneira de utilizar estilos globais, uma forma um pouco mais clássica. Portanto, nós temos mais de uma possibilidade. Dependendo do caso de uso, uma pode ser mais adequada do que a outra.

Vamos apenas excluir as modificações do <style> que fizemos recentemente, pois não serão necessárias para o projeto. Ou seja, excluir os estilos e o <h1> tanto do App.vue quanto do Banner.vue. Depois de salvar os arquivos, tudo voltará ao normal quando visualizado no navegador.

Dessa forma, exploramos um pouco mais sobre como os componentes funcionam no Vue e seus estilos.

Documentação

SFC CSS Features

```sh
https://vuejs.org/api/sfc-css-features.html
```

## URL para obter um JSON de categorias:

A URL que utilizamos para obter o JSON de categorias foi disponibilizada a partir de um Gist do GitHub.

Um Gist é basicamente um ou mais blocos de códigos, escritos em qualquer linguagem, que você pode criar no site GitHub Gist. Basta ter uma conta no GitHub, acessar o site e você poderá criar seus próprios Gists!

```sh
https://gist.github.com/
```

Para compartilhar um Gist com quem você quiser, antes de criá-lo, basta alterar a opção “Create secret gist” para “Create public gist”, assim ele se tornará público. Depois de criá-lo, você terá um link como o seguinte:

https://gist.github.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964

Cada bloco de código do Gist possui um botão chamado “Raw”, que levará a uma URL para aquele bloco de código específico, que mostra na tela seu código-fonte. Os dois blocos de código do meu gist acima possuem essas URLs:

https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json

https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json

```sh
https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json
```
Exemplo, se você pesquisar em (temperos e especiarias Orégano), (Óleos, Gorduras e Vinagres, Alho), (Óleos, Gorduras e Vinagres, Azite de oliva)
Você irá ver que ele ira buscar a imagem conforme está em receitas.json

receitas.json


```sh
[
  {
    "nome": "Pasta de Alho Assado",
    "ingredientes": [
      "Alho",
      "Azeite de Oliva"
    ],
    "imagem": "pasta_de_alho_assado.png"
  },
  {
    "nome": "Patê de Alho Assado",
    "ingredientes": [
      "Alho",
      "Azeite de Oliva"
    ],
    "imagem": "pate_de_alho_assado.png"
  },
  {
    "nome": "Alho Assado",
    "ingredientes": [
      "Alho",
      "Azeite de Oliva",
      "Orégano"
    ],
    "imagem": "alho_assado.png"
  },
  {
    "nome": "Arroz de Alho",
    "ingredientes": [
      "Arroz",
      "Alho",
      "Óleo"
    ],
    "imagem": "arroz_de_alho.png"
  },
  {
    "nome": "Pão de Alho",
    "ingredientes": [
      "Pão",
      "Manteiga",
      "Alho",
      "Orégano"
    ],
    "imagem": "pao_de_alho.png"
  },
  {
    "nome": "Macarrão de Alho e Óleo",
    "ingredientes": [
      "Macarrão",
      "Alho",
      "Óleo",
      "Manteiga"
    ],
    "imagem": "macarrao_de_alho_e_oleo.png"
  },
  {
    "nome": "Bacalhau com chips de alho",
    "ingredientes": [
      "Bacalhau",
      "Alho",
      "Azeite de Oliva",
      "Limão"
    ],
    "imagem": "bacalhau_com_chips_de_alho.png"
  },
  {
    "nome": "Manteiga com tomilho e alho",
    "ingredientes": [
      "Manteiga",
      "Alho",
      "Tomilho"
    ],
    "imagem": "manteiga_com_tomilho_e_alho.png"
  },
  {
    "nome": "Tortei com recheio de Abóbora",
    "ingredientes": [
      "Massa de pastel",
      "Abóbora",
      "Tomate",
      "Alho",
      "Óleo",
      "Farinha de rosca",
      "Noz moscada"
    ],
    "imagem": "tortei.png"
  },
  {
    "nome": "Creme de Galinha",
    "ingredientes": [
      "Frango",
      "Leite",
      "Creme de Leite",
      "Milho",
      "Ovos"
    ],
    "imagem": "creme_de_galinha.png"
  },
  {
    "nome": "Panqueca",
    "ingredientes": [
      "Farinha de trigo",
      "Manteiga",
      "Leite",
      "Ovos"
    ],
    "imagem": "panqueca.png"
  },
  {
    "nome": "Milkshake de chocolate",
    "ingredientes": [
      "Chocolate",
      "Chantilly"
    ],
    "imagem": "milkshake_de_chocolate.png"
  },
  {
    "nome": "Mousse de chocolate",
    "ingredientes": [
      "Creme de Leite",
      "Chocolate",
      "Ovos",
      "Manteiga"
    ],
    "imagem": "mousse_de_chocolate.png"
  }
]
```

Link, URL, Funcionando

```sh
https://gilberto-goncalves-lima-cookinup-vue.netlify.app/
```

Certificado, Alura, Vue

```sh
https://drive.google.com/drive/folders/1UhelYKsbaRLw4JX66Eomg--gEQBn-tC1
```

