![Logo](https://user-images.githubusercontent.com/53785487/214283803-a2de9e5d-3a5b-462b-91ae-ce1ac7c624a9.png)

Link.me é uma aplicação Web de gerenciamento e compartilhamento de links no estilo linktr.ee desenvolvida como desafio técnico para uma vaga de estágio.

---

### :man_technologist: Sobre a aplicação

[A aplicação](https://link-me-sqr.netlify.app/) conta com um sistema de autenticação, criação, edição e removão de links, controle de acesso de usuários, e compartilhamento de páginas de links através do nome de usuário.

Este projeto usa as seguintes tecnologias:

- [React.js](https://reactjs.org)
- [Vite.js](https://vitejs.dev)
- [Node.js](https://nodejs.org/en/)

---

### 🎨 Prototipação
[Link para o projeto no figma](https://www.figma.com/file/chosjspfHPO20qYQBgIZrH/LINK.ME?node-id=0%3A1&t=bJUAjiDouA5f2iUN-1)

---

### 📁 Instalação e execução

```bash
  #  clone o repositório
  git clone https://github.com/mvgoliveira/Link.me

  #  navegue até o repositório clonado
  cd Link.me
  
  #  navegue até as pastas específicas
  cd frontend
  cd backend

  #  baixe as dependências
  yarn [dentro de cada página específica]

  # configure o banco de dados
  yarn prisma migrate dev --name init
 
  #  divirta-se!
  yarn dev [no frontend]
  yarn dev [no backend]
```

É necessário adicionar as variáveis ambientes VITE_TOKEN_SECRET e VITE_API_URL, DATABASE_URL e TOKEN_SECRET.
As variáveis TOKEN_SECRET e VITE_TOKEN_SECRET são usados para assinar e verificar os tokens de autenticação JWT, VITE_API_URL é a URL da api (http://localhost:5000 no caso de ser executado localmente), e a variável DATABASE_URL é usado pelo prisma para efetuar a conexão com o banco de dados PostgreSQL.

<hr>

Feito com :hearts: por **[Marcus Oliveira](https://www.linkedin.com/in/marcus-oliveira-3b92011a7/)**.
