# Desafio-Fullstack-cadastro-e-login

O objetivo desse desafio é construir uma aplicação semelhante a uma agenda, cadastrando usuários e seus respectivos contatos.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **[Implantação](#-implanta%C3%A7%C3%A3o)** para saber como implantar o projeto.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
- Editor de texto (IDE) preferencialmente VScode pois foi nele que a aplicação foi desenvolvida
- Uma ferramenta de teste e depuração de APIs para testes (Opicional)
```

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

Clonar o Repositório :

```
- Clique no botão (<>code) e copie e chave SSH
```

Salvar uma copia do projeto em sua máquina:

```
- Abra o diretorio onde será salvo o projeto e abra o terminal nesse diretório
- Rode o comando: git clone (chave SSH copiada)
- Após isso você terá uma copia totalmente editavel de todo o projeto em sua maquina
```

## 📦 Implantação

Manipulando o arquivo .env

```
- Crie um arquivo chamado .env na raiz da pasta "Back-End"
- Dentro dele crie as variáveis de ambiente seguindo o padrão do arquivo .env.example
- Configure suas variáveis de ambiente com suas credenciais do PostgresSQL e um novo banco de dados para estar utilizando no projeto.

- ATENÇÃO: Para que o servidor funcione corretamente as credenciais do arquivo .env devem estar exatamente iguais as credenciais do seu banco de dados PostegresSQL e não se esqueça de salvar o arquivo 
```

Instalando as dependências necessárias para executar o servidor local 

```
- Na raiz do projeto abra o terminal e mude para a pasta de Back - End com o comando: cd Back-End
- Em seguida instale as dependências do servidor com o comando: npm install
```

Executando as migrações

```
- Ainda com o terminal aberto na pasta Back-End, execute as migrações com o comando: npm run typeorm migration:run -- -d src/data-source
```

Executando o servidor localmente 

```
- Ainda com o terminal aberto na pasta Back-End, execute o servidor localmente com o comando: npm run dev 
```

Instalando as dependências necessárias para executar a aplicação localmente 

```
- Na raiz do projeto abra um novo terminal e mude para a pasta de Front - End com o comando: cd Front-End
- Em seguida instale as dependências do servidor com o comando: npm install
```

Executando a aplicação localmente 

```
- Ainda com o terminal aberto na pasta Front-End, execute a aplicação localmente com o comando: npm run dev
- Abra o navegador de sua preferência e acesse o endereço "http://localhost:5173/" para utilizar a aplicação normalmente
```

## 🛠️ Construído com

Ferramentas e tecnologias usadas na criação do projeto

* [Node](https://nodejs.org/pt-br) - O framework Back-end 
* [React](https://react.dev) - O framework Front-end 
* [Typescript](https://www.typescriptlang.org) - Linguagem de programação
* [PostgreSQL](https://www.postgresql.org) - Gerenciador de banco de dados
* [Insomnia](https://insomnia.rest) - Software para debug de requisições HTTP
* [VScode](https://code.visualstudio.com) - Editor de texto (IDE)
* [Dbeaver](https://dbeaver.io) - Vizualizador de banco de dados 

## ✒️ Autor

*  [Rafael Rocha](https://github.com/Rafaelgot10)

Se você tiver alguma dúvida, sugestão ou feedback sobre a API,
sinta-se à vontade para entrar em contato com o desenvolvedor mencionado acima.
