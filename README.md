# 🌍 Tripleten web_project_around_auth

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

[![Preview do projeto](./src/assets/preview-around.png)](https://perozin.github.io/web_project_around_auth/)

> 🎯 **Clique na imagem acima para acessar o projeto publicado**  
> 💡 **Click on the image above to access the published project**

## 🗣️ **README BILÍNGUE — <img src="https://flagcdn.com/w20/br.png" width="20"/> Português | <img src="https://flagcdn.com/w20/us.png" width="20"/> English**

---

## <img src="https://flagcdn.com/w20/br.png" width="20"/> 1. **Nome do Projeto**

**web_project_around_auth**

---

## <img src="https://flagcdn.com/w20/br.png" width="20"/> 2. **Descrição do Projeto**

### Este projeto representa a evolução do web_project_around_react, agora com autenticação completa, utilizando React + Vite, para proporcionar:

```
- componentização robusta
- reatividade com hooks
- autenticação baseada em token (JWT)
- rotas protegidas
- controle de sessão do usuário
- carregamento rápido via Vite
- melhor organização do código
```

### **Os usuários podem:**

```
🖼️ Exibir cards com imagens e legendas
➕ Adicionar novos cards
✏️ Editar informações do perfil
👤 Atualizar o avatar
👁️ Abrir imagens ampliadas através de modais
🔐 Criar conta (Signup)
🔑 Fazer login (Signin)
🚪 Encerrar sessão (Logout)
```

Agora, o projeto conta com fluxo completo de autenticação, controle de acesso e persistência de sessão via JWT.

### 🔥 **Novidades (Autenticação)**

```
🚀 Reestruturação completa dos Popups
🧩 Padronização de props: onClose, onSubmit, isOpen
🎛️ Controle centralizado de modais no App.jsx
📦 Melhora na árvore de componentes
🖼️ PopupImage funcionando isoladamente
✏️ PopupEditProfile totalmente funcional
➕ PopupAddPlace integrado ao fluxo principal
👤 PopupEditAvatar reestruturado
```

---

## <img src="https://flagcdn.com/w20/us.png" width="20"/> 1. **Project Name**

**web_project_around_auth**

---

## <img src="https://flagcdn.com/w20/us.png" width="20"/> 2. **Project Description**

### This project represents the evolution of web_project_around_react, now featuring full authentication, built with React + Vite, providing:

```
- Robust componentization
- React Hooks and reactivity
- JWT-based authentication
- Protected routes
- Session persistence
- Fast bundling with Vite
```

### **Users can**:

```
🖼️ View image cards
➕ Add new cards
✏️ Edit profile info
👤 Change avatar
👁️ Preview images in modals
🔐 Sign up
🔑 Sign in
🚪 Log out
```

The project now includes a complete authentication flow, access control, and token validation.

### 🔥 **New Features (Authentication)**

This project brought **profound improvements to the architecture**:

```
🔐 Signup and Signin implementation
🔑 JWT-based authentication
🛡️ ProtectedRoute for access control
🧭 Automatic redirects based on auth state
🧠 Token validation on page reload
📩 Logged user email displayed in Header
🚪 Functional logout
💬 Success and error feedback via InfoTooltip
🌍 GitHub Pages deployment using HashRouter
```

The new architecture now follows:

- A single **central state** to control each modal
- All Popups receive **isOpen, onClose, and onSubmit** events
- States cleared on each opening
- Corrected visual identity in CSS
- Fully independent components

---

## 🖼️ Capturas de Tela / Exemplos de Uso - Screenshots / Usage Examples

Abaixo estão exemplos visuais do fluxo de autenticação de usuários implementado no projeto, demonstrando o funcionamento correto das telas de Registro, Login, proteção de rotas e controle de sessão com JWT, conforme solicitado nesta sprint. / Below are visual examples of the user authentication flow implemented in the project, demonstrating the correct functioning of the Registration, Login, route protection, and session control screens with JWT, as requested in this sprint.

### 🔹 Tela de Registro (/signup)

<p align="center">
  Permite que um novo usuário crie uma conta informando e-mail e senha. / It allows a new user to create an account by providing an email address and password.
</p>

<p align="center"> 
  <img src="https://github.com/user-attachments/assets/9c82e6d6-4c1a-45cf-b681-6badb8dace79" 
    alt="Tela de registro de usuário com campos de e-mail e senha" 
    width="520" /> 
</p>

<p align="center">
  Após o cadastro bem-sucedido, o sistema retorna feedback visual ao usuário e redireciona para a tela de login. / After successful registration, the system provides visual feedback to the user and redirects them to the login screen.
</p>

<p align="center">
  <img
    src="https://github.com/user-attachments/assets/97093e5f-0e45-4297-afa0-ccbf53e37eb2"
    alt="Tela de registro com sucesso"
    width="520"
  />
</p>

### 🔹 Tela de Login (/signin)

<p align="center">
  Permite que um usuário previamente cadastrado realize o login. / Allows a previously registered user to log in.  
</p>

<p align="center"> 
  <img  src="https://github.com/user-attachments/assets/40dd1513-0940-46b0-a857-3ddf5c4e47d0" 
    alt="Tela de login de usuário com autenticação via JWT, media screem 1280px" 
    width="520" 
  /> 
</p>

<p align="center">
  Ao autenticar com sucesso, um token JWT é armazenado no localStorage e o usuário é redirecionado automaticamente para a página principal protegida. / Upon successful authentication, a JWT token is stored in localStorage and the user is automatically redirected to the protected main page. 
</p>

<p align="center"> 
  <img   
    src="https://github.com/user-attachments/assets/2c02ff2c-94fa-4516-9923-648dc723dbdb"
    alt="Usuário autenticado, redirecionado para a página principal protegida"
    width="520"  
  />
</p>

### 🔹 Proteção de Rotas (ProtectedRoute)

* Rotas sensíveis da aplicação são protegidas por um componente de alto nível (ProtectedRoute). / Sensitive application routes are protected by a high-level component (ProtectedRoute).
* Usuários não autenticados são automaticamente redirecionados para a tela de login, impedindo acesso direto via URL. /  Unauthenticated users are automatically redirected to the login screen, preventing direct access via URL.

```
✔️ Usuário autenticado → acesso liberado - Authenticated user → access granted
❌ Usuário não autenticado → redirecionamento para /signin - Unauthenticated user → redirect to /signin

```

<p align="center"> 
  <img   
    src="https://github.com/user-attachments/assets/2b0f8a69-f88b-4a38-bbe2-e3c0be3cb18e"
    alt="Mensagem rertornada a usuário não autorizado" 
    width="520"  
  />
</p>

### 🔹 Persistência de Sessão com Token JWT / Session Persistence with JWT Token

* Ao recarregar a página, o aplicativo verifica automaticamente a existência e validade do token armazenado: / Upon reloading the page, the application automatically verifies the existence and validity of the stored token:

```
🔐 Token válido → usuário permanece logado - Valid token → user remains logged in
🚫 Token inválido ou ausente → logout automático e redirecionamento - Invalid or missing token → automatic logout and redirection
```

* Esse processo garante segurança, experiência contínua e controle de sessão no front-end. / This process ensures security, a seamless experience, and session control on the front-end.

### 🔹 Header Dinâmico baseado em Autenticação / Dynamic Header based on Authentication

* O cabeçalho da aplicação se adapta dinamicamente ao estado de autenticação: / The application header dynamically adapts to the authentication state:

  * Usuário logado: / Logged-in user:

```
Exibição do e-mail - Email display
Botão Sair - Exit button
```

  * Usuário não logado: / User not logged in:

```
Links para Entrar ou Registrar - Links to Log In or Register
```

### 🔹 Feedback Visual de Autenticação (Popup) / Visual Authentication Feedback (Popup)

* O sistema exibe mensagens visuais claras para o usuário em ações críticas: / The system displays clear visual messages to the user during critical actions:

```
✅ Cadastro realizado com sucesso - Registration successful.
❌ Erro de autenticação ou cadastro inválido - Authentication error or invalid registration.
```

* Esses feedbacks são exibidos por meio de um popup reutilizável, controlado centralmente pelo estado do App.jsx. / This feedback is displayed via a reusable popup, centrally controlled by the App.jsx state.

✨ Esse conjunto de telas e fluxos demonstra a implementação completa do ciclo de autenticação no front-end, incluindo: / This set of screens and flows demonstrates the complete implementation of the authentication cycle on the front-end, including:

```
🔐 Registro de usuário - User registration
🔑 Login com JWT - Login with JWT
🛡️ Proteção de rotas - Route protection
♻️ Persistência de sessão - Session persistence
🎯 Feedback visual ao usuário - Visual feedback to the user
```

---

## 🎥 3. Demonstração / Demo

#### 🎬 [▶️ Assista ao vídeo / Watch the video](https://www.loom.com/share/4b13b900e46144d8b39051a92f9464d0)

---

## ⚙️ 4. Tecnologias Utilizadas / Technologies Used

```
| Categoria / Category           | Tecnologias e Técnicas / Technologies & Techniques |
| ------------------------------ | -------------------------------------------------- |
| **Front-end**                  | React 18, JSX, JavaScript ES6+                     |
| **Autenticação / Auth**        | JWT, Protected Routes                              |
| **Arquitetura / Architecture** | Componentização + Hooks                            |
| **Bundler**                    | Vite                                               |
| **Roteamento / Routing**       | React Router DOM (HashRouter)                      |
| **Ambiente / Environment**     | VSCode, Git, GitHub                                |
```

---

## 🧠 5. **Conceitos de React Aplicados / React Concepts Implemented**

```
| Conceito / Concept           | Descrição / Description                                  |
| ---------------------------- | -------------------------------------------------------- |
| **Componentes**              | Componentes reutilizáveis                                |
| **JSX**                      | Sintaxe integrada ao JavaScript                          |
| **Props**                    | Comunicação entre componentes                            |
| **useState()**               | Estado interno                                           |
| **useEffect()**              | Efeitos colaterais                                       |
| **ProtectedRoute**           | Controle de acesso por autenticação                      |
| **Conditional Rendering**    | Renderização baseada no estado de login                  |
| **Token Persistence**        | Autenticação persistente com localStorage                |
```

---

## 🏗️ 6. **Estrutura de Arquivos / File Structure (Vite + React)**

```
web_project_around_auth/
├── docs/                     # Build para GitHub Pages
├── public/
├── src/
│ ├── components/
│ │ ├── App.jsx
│ │ ├── Header/
│ │ ├── Footer/
│ │ ├── Main/
│ │ ├── Card/
│ │ ├── Login/
│ │ ├── Register/
│ │ ├── ProtectedRoute/
│ │ ├── Popup/
│ │ └── InfoTooltip/
│ ├── utils/
│ │ ├── auth.js
│ │ └── api.js
│ ├── styles/
│ ├── index.css
│ └── main.jsx
├── vite.config.js
└── README.md

```

---

## 🧩 7. **Principais Funcionalidades / Key Features**

```
✅ Autenticação completa (Signup / Signin)
✅ Rotas protegidas
✅ Persistência de sessão
✅ Header dinâmico conforme autenticação
✅ Feedback visual de sucesso e erro
✅ Deploy funcional no GitHub Pages
✅ Logout funcional
✅ Componentização total
✅ Popups controlados por estado
✅ Responsividade (desktop e mobile)
```

---

## 🚀 8. **Como Executar / How to Run**

```
git clone https://github.com/Perozin/web_project_around_auth.git
cd web_project_around_auth
npm install
npm run dev
```

---

## 🧾 9. **Resumo de Atualizações / Changelog**

### 📌 Autenticação

- 🔐 Login e Registro implementados
- 🔒 ProtectedRoute criado
- 🧭 React Router configurado
- 🚪 Logout funcional
- 📧 Exibição do email do usuário
- 🌐 Deploy funcional no GitHub Pages
- 📱 Versão mobile concluída

---

## 🚧 10. Próximos Passos / Next Steps

- [ ] 🔄 Integração com backend próprio (Node.js / Express)
- [ ] 🌐 Context API global
- [ ] 🔐 Refresh Token
- [ ] 📱 Melhorar UX de erros
- [ ] 🧪 Testes automatizados
- [ ] 🧭 useReducer

---

## 👨‍💻 **Autor / Author**

**Marcio Perusin**  
Desenvolvedor Full Stack em formação — Bootcamp **TripleTen**

🔗 [GitHub](https://github.com/Perozin)
🔗 [LinkedIn](https://www.linkedin.com/in/marcio-perozin)

---

## 📝 **Licença / License**

📄 Este projeto é de uso educacional e sem fins comerciais.  
📄 This project is for educational purposes only and has no commercial intent.


