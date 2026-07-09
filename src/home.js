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
                    <h2 class="home-subtitle">Sistemas de Informação & Desenvolvimento de Software</h2>
                    <p class="home-p">
                    Estudante de Sistemas de Informação em busca da primeira oportunidade profissional em desenvolvimento, manutenção ou análise de software. Focado em <strong>Back-end</strong> e em transição para <strong>Fullstack</strong>, possuo base técnica em banco de dados, UX/UI, sistemas operacionais, cibersegurança e redes. Sou proativo, adaptável e colaborativo, aplicando liderança e criatividade para resolver desafios técnicos e impulsionar o crescimento da equipe.
                    </p>
                </div>

                <div class="home-actions">
                    <button class="btn-main" onclick="window.open('https://wa.me/55819817169?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto!', '_blank')">
                        <i class="fa-brands fa-whatsapp"></i> Fale comigo
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
                        <i class="fa-solid fa-fish"></i> </div>
                    <h3>Rede Tubarão</h3>
                    <p>Plataforma desenvolvida para mapear, analisar e disponibilizar informações estatísticas sobre o comportamento e histórico de incidentes envolvendo ataques de tubarões em Recife e Região Metropolitana, auxiliando na conscientização pública.</p>
                </div>

                <div class="card-pillars">
                    <div class="pillar-icon">
                        <i class="fa-solid fa-chalkboard-user"></i> </div>
                    <h3>Teacher Page</h3>
                    <p>Landing page institucional e comercial sob medida para uma docente autônoma. O site centraliza a divulgação de informações profissionais, agendamento de horários e viabiliza a venda direta de aulas e materiais didáticos digitais.</p>
                </div>

                <div class="card-pillars">
                    <div class="pillar-icon">
                        <i class="fa-solid fa-paw"></i> </div>
                    <h3>Adotei Por Amor</h3>
                    <p>Plataforma web criada com o objetivo de conectar protetores independentes a adotantes responsáveis, facilitando e viabilizando o processo completo de adoção de animais de forma segura, organizada e intuitiva.</p>
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
    
            <h2>MINHA JORNADA</h2>

            <div class="timeline">

                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <span class="timeline-date">2026 - Cursando</span>
                        <h3>Sistemas de Informação</h3>
                        <h4>Uninassau Graças</h4>
                        <p>Desenvolvendo bases sólidas em engenharia de requisitos, governança de TI, arquitetura de sistemas e desenvolvimento de software.</p>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                    <span class="timeline-date">2026</span>
                        <h3>Técnico em tecnologia da informação</h3>
                        <h4>Senac Recife</h4>
                        <p>Especialização em infraestrutura de redes, montagem e manutenção de computadores, lógica de programação.</p>
                    </div>
                </div>

            </div> </div>
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