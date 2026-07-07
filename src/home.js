export const HomeScreen = {
    render: () => {
       return `
        <section class="main">
            <div class="container-global">
                <span class="badge">⚡ Bem-vindo ao meu terminal</span>
                
                <div class="picture">
                    <img src="./assets/foto.jpeg" alt="Foto de Rhuanna Luna" width="300" height="350">
                </div>

                <div class="home-text">
                    <h1 class="title">Sou um <span class="title-span">Desenvolvedor em ascensão</span></h1>
                    <h2 class="home-subtitle">Estudante de Sistemas de Informação & Dev</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur deleniti eius quaerat, explicabo amet
                    ut unde sit necessitatibus quia asperiores animi eos corrupti recusandae possimus voluptate, repellendus
                    cumque blanditiis? Impedit!</p>
                </div>

                <div class="home-actions">
                    <button class="btn-main" onclick="document.querySelector('[data-screen=\\'contato\\']').click()">
                        <i class="fa-solid fa-code"></i> Fale comigo
                    </button>
                </div>
            </div>
        </section>

        <section class="grid">
            <div class="container-global">
                <div class="header-grid">
                    <h2>Projetos</h2>
                    <p>Aplicações e ecossistemas de código desenvolvidos com foco em performance.</p>
                </div>

                <div class="pillars">
                    <div class="card-pillars">
                        <div class="pillar-icon">
                            <i class="fa-solid fa-folder-open"></i>
                        </div>
                        <h3>Rede de tubarão</h3>
                        <p>Descrição breve do projeto aqui.</p>
                    </div>

                    <div class="card-pillars">
                        <div class="pillar-icon">
                            <i class="fa-solid fa-code"></i>
                        </div>
                        <h3>Teacher Page</h3>
                        <p>Descrição breve do projeto aqui.</p>
                    </div>

                    <div class="card-pillars">
                        <div class="pillar-icon">
                            <i class="fa-solid fa-gear"></i>
                        </div>
                        <h3>Adotei Por Amor</h3>
                        <p>Descrição breve do projeto aqui.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="obj">
            <div class="container-global">
                <div class="card-obj">
                    <h2>Meu objetivo</h2>
                    <p>Ingressar no mercado de tecnologia como desenvolvedor, aplicando de forma prática meus conhecimentos em programação, redes e banco de dados. Busco estabilidade e forte crescimento profissional dentro de uma equipe dinâmica, onde minha adaptabilidade e visão de produto possam contribuir diretamente para o sucesso de aplicações reais.</p>
                </div>
            </div>
        </section>

        <section class="jornada">
            <div class="container-global">
                <h2> MINHA JORNADA</h2>
                <div class="timeline-item">
                    <div class="" 
                    <div class="timeline-dot"></div>
                </div>
            </div>
        </section>

        <section class="contato">
            <div class="container-global">
                <div class="contato-card">
                    <h2>Contato</h2>

                    <div class="contato-lista">
                        <p>
                        <i class="fa-solid fa-graduation-cap"></i> <strong>Faculdade:</strong>
                        <a href="https://www.uninassau.edu.br/" target="_blank">Uninassau Recife</a>

                        </p>
                        
                        <p>
                            <i class="fa-solid fa-github"></i> <strong>GitHub:</strong> 
                            <a href="https://github.com/LuizEduardoVinhas" target="_blank">github.com/LuizEduardoVinhas</a>
                        </p>
                        <p>
                            <i class="fa-brands fa-linkedin"></i> <strong>LinkedIn:</strong> 
                            <a href="https://www.linkedin.com/in/luiz-eduardo-lima-cv" target="_blank">linkedin.com/in/luiz-eduardo-lima-cv</a>
                        </p>                   
                        <p>
                            <i class="fa-solid fa-envelope"></i> <strong>E-mail:</strong> 
                            <a href="mailto:luizelcvinhas@gmail.com">luizelcvinhas@gmail.com</a>
                        </p>
                    </div>
                </div>    
            </div>
        </section>


        `;
    }
};