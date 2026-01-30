# 🌍 Tripleten web_project_around_auth

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

[![Preview do projeto](./src/assets/preview-around.png)](https://perozin.github.io/web_project_around_react/)

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

## 🎥 3. Demonstração / Demo

#### 🎬 [▶️ Assista ao vídeo / Watch the video](https://www.loom.com/share/9f4b63da251f47d2b03a94cfd202466b)

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
web_project_around_react/
├── public/
│ └── assets/
├── src/
│ ├── components/
│ │ ├── Card/
│ │ ├── Header/
│ │ ├── Footer/
│ │ ├── Popup/
│ │ │ ├── Popup.jsx
│ │ │ ├── PopupImage.jsx
│ │ │ ├── components/
│ │ │ │ ├── EditProfile/
│ │ │ │ ├── NewCard/
│ │ │ │ └── EditAvatar/
│ │ ├── Profile/
│ │ └── Forms/
│ ├── pages/
│ │ └── App.jsx
│ ├── styles/
│ ├── utils/
│ └── main.jsx
├── README.md
└── vite.config.js
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
```

---

## 🚀 8. **Como Executar / How to Run**

```bash
# 1️⃣ Clone o repositório / Clone the repository
git clone https://github.com/Perozin/web_project_around_react.git

# 2️⃣ Acesse a pasta / Access the folder
cd web_project_around_react

# 3️⃣ Instale as dependências / Install the dependencies.
npm install

# 4️⃣ Rode o servidor de desenvolvimento / Run the development server.
npm run dev
```

```
💡 **O Vite inicia automaticamente na porta exibida no terminal (ex.: http://localhost:5000)**
💡 **Vite starts automatically on the port displayed in the terminal (e.g., http://localhost:5000)**
```

---

## 🧾 9. **Resumo de Atualizações / Changelog**

### 📌 Autenticação

- 🔐 Implementação completa de autenticação
- 🛡️ ProtectedRoute para rotas privadas
- 🧭 Redirecionamento automático
- 💬 Popup de sucesso e erro
- 🌍 Ajustes para deploy com HashRouter
- 🧠 Validação de token no carregamento

---

## 🚧 10. Próximos Passos / Next Steps

- [ ] 🔄 Integração com backend próprio (Node.js / Express)
- [ ] 🌐 Context API global
- [ ] 🔐 Refresh Token
- [ ] 📱 Melhorias na responsividade mobile
- [ ] 🧪 Testes automatizados

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


