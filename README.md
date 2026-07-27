This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


src/
├── app/
├── components/
├── features/
├── lib/
├── models/
├── services/
├── types/
└── styles/


O que vai em cada pasta

app/
Aqui ficam as rotas, páginas e layout do Next.js. No seu MVP, isso cobre coisas como login, cadastro, perfil, feed, criação de publicação e leitura de post. O documento lista essas páginas principais no escopo do projeto.

components/
Componentes reutilizáveis da interface, como botão, input, header, cards de post, avatar, navbar e pequenos blocos do editor.

features/
Cada funcionalidade principal pode ficar isolada aqui. Por exemplo: auth, profile, posts, editor, feed, comments. Isso combina com a orientação do documento de tratar o MVP como uma sequência de “features verticais”.

lib/
Funções auxiliares e infraestrutura, como conexão com MongoDB, utilitários de sessão, hash de senha e helpers gerais.

models/
Modelos do Mongoose, como User e depois Post. O documento coloca User Model na fase 2 e Post Model na fase 3.

services/
Regras de negócio e operações sobre os dados: criar usuário, autenticar, salvar publicação, buscar posts, curtir, comentar.

types/
Tipos e interfaces do TypeScript, como User, Post, Block, Comment e tipos de formulário.

styles/
Estilos globais, tokens visuais e arquivos de CSS Modules, se você optar por essa abordagem.