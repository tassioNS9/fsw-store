# 🛒 FSW Store

**FSW Store** é uma loja virtual de produtos eletrônicos desenvolvida com **Next.js 13**, **React**, **TypeScript** e **Prisma**.  
O projeto utiliza **Stripe** para processamento de pagamentos e segue boas práticas de organização de código, tipagem e arquitetura modular.

---

## 🚀 Tecnologias Principais

- **Next.js 13** — Framework React com suporte a rotas, SSR e API routes  
- **React 18** — Biblioteca principal de UI  
- **TypeScript** — Tipagem estática e segurança em tempo de compilação  
- **Prisma ORM** — Mapeamento objeto-relacional e integração com banco de dados  
- **NextAuth.js** — Autenticação com adaptador Prisma  
- **Tailwind CSS** — Estilização com classes utilitárias  
- **Stripe** — Integração de pagamentos online  
- **Radix UI** — Componentes acessíveis e personalizáveis  
- **Lucide React** — Ícones vetoriais para a interface  

---

## 🧱 Padrões e Arquitetura

- **Arquitetura baseada em componentes** (Atomic Design)  
- **Padrão de organização com `app/` directory (Next.js 13+)**  
- **Autenticação com NextAuth e adaptador Prisma**  
- **Camada de persistência com Prisma Client**  
- **Boas práticas com ESLint e Prettier configurados**  
- **Padrões de estilo com Tailwind + Prettier Plugin TailwindCSS**

---

## ⚙️ Configuração e Setup

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/fsw-store.git
cd fsw-store

2. Instalar dependências
npm install
# ou
yarn install

3. Configurar variáveis de ambiente
DATABASE_URL="postgresql://user:password@localhost:5432/fswstore"
NEXTAUTH_SECRET="sua_chave_secreta"
NEXTAUTH_URL="http://localhost:3000"
STRIPE_SECRET_KEY="sua_chave_stripe"
STRIPE_PUBLIC_KEY="sua_chave_publica"

4. Gerar o client do Prisma
npx prisma generate

5. Rodar o servidor de desenvolvimento
npm run dev