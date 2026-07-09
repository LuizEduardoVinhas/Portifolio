```markdown
# Portfólio Profissional

Portfólio web desenvolvido para centralizar projetos, exibir habilidades técnicas e fornecer um canal direto de contato para propostas e networking.

## 🛠️ Tecnologias

* **HTML5** & **CSS3** (Layout responsivo com variáveis nativas e efeitos visuais)
* **JavaScript (ES6+)** (Arquitetura SPA nativa, modularizada com componentes)
* **Font Awesome** (Ícones)
* **Formspree API** (Envio de formulário de contato para o e-mail)

## 📐 Estrutura do Projeto

A aplicação funciona como uma Single Page Application (SPA) sem frameworks. A navegação gerencia o ciclo de vida dos componentes em JavaScript através de dois métodos:

* **`render()`**: Retorna a string de HTML puro e injeta na árvore do DOM.
* **`after_render()`**: Executa logo após a injeção do HTML, vinculando os seletores e ouvintes de eventos (`addEventListener`) de forma segura para evitar conflitos de escopo.

## 🌟 Recursos Implementados

1. **Navegação SPA:** Troca de telas instantânea (Home/Contato) pelo gerenciador de rotas.
2. **Formulário de Contato:** Inputs com validação nativa e campo específico para identificação de Entidade/Instituição.
3. **Botão WhatsApp:** Redirecionamento direto usando a API do WhatsApp com frase personalizada pré-configurada.
4. **Envio de E-mail:** Integração com backend do Formspree para entrega direta na caixa de entrada.

## 🔧 Como Rodar Localmente

Por usar módulos nativos do JavaScript (`import`/`export`), o navegador bloqueia a execução direta do arquivo (CORS). É necessário rodar através de um servidor local:

1. Clone o repositório:
   ```bash
   git clone [https://github.com/LuizEduardoVinhas/SEU_REPOSITORIO.git](https://github.com/LuizEduardoVinhas/SEU_REPOSITORIO.git)

```

2. Abra a pasta:
```bash
cd SEU_REPOSITORIO

```


3. Inicie um servidor:
* Com a extensão **Live Server** no VS Code.
* Ou via terminal com Python:
```bash
python -m http.server 8080

```


Acesse `http://localhost:8080` no navegador.



## 👤 Links

* **GitHub:** [github.com/LuizEduardoVinhas](https://www.google.com/search?q=https://github.com/LuizEduardoVinhas)
* **LinkedIn:** [linkedin.com/in/luiz-eduardo-lima-coimbra-vinhas](https://www.google.com/search?q=https://linkedin.com/in/luiz-eduardo-lima-coimbra-vinhas)

```

```