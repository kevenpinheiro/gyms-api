# 🏋️ Gyms API

Gyms API é uma aplicação desenvolvida como parte dos estudos na plataforma **Rocketseat**, inspirada no famoso sistema **GymPass**. Este projeto visa oferecer funcionalidades de cadastro e gerenciamento de usuários em academias, aplicando princípios do **SOLID** e design patterns essenciais no desenvolvimento de APIs.


## 📚 Tecnologias Utilizadas
Esta API foi construída com as seguintes tecnologias e ferramentas:

- **NodeJS**
- **TypeScript**
- **Fastify**: Framework web rápido e eficiente.
- **Prisma ORM**: Gerenciamento de banco de dados com PostgreSQL.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenamento de dados.
- **Bcrypt.js**: Utilizado para hashing de senhas, garantindo a segurança dos dados.
- **Day.js**: Biblioteca de manipulação de datas.
- **Zod**: Validação e serialização de dados de forma simples e eficaz.
- **Vitest e Supertest**: Testes unitários e de ponta a ponta (E2E) para garantir a qualidade e integridade da API.


## ⚙️ Funcionalidades
A Gyms API permite uma série de operações essenciais para um sistema de gerenciamento de academias. As funcionalidades incluem:

- ✅ **Login de Usuário**: Permite ao usuário acessar sua conta com segurança.
- ✅ **Cadastro de Usuário**: Usuários podem se registrar para utilizar a plataforma.
- ✅ **Perfil de Usuário**: Usuários logados podem visualizar suas informações de perfil.
- ✅ **Histórico de Check-ins**: Usuários podem ver todos os check-ins realizados em academias.
- ✅ **Número de Check-ins**: Retorna o total de check-ins realizados pelo usuário logado.
- ✅ **Busca de Academias Próximas**: Os usuários podem buscar academias em um raio de até 10 km.
- ✅ **Busca por Nome de Academia**: Permite aos usuários encontrarem academias por nome.
- ✅ **Check-in em Academia**: Usuários podem realizar check-ins em academias.
- ✅ **Validação de Check-in**: Permite ao sistema validar a presença do usuário em uma academia.
- ✅ **Cadastro de Academia**: Academias podem ser adicionadas à plataforma.

---

## GitHub Actions
Este projeto inclui uma estratégia de **CI**, permitindo que testes unitários e E2E sejam  
executados sempre que for feito um novo push.