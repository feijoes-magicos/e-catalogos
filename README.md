Apresento esse pequeno desafio como teste técnico de frontend ao corpo de contratação da e-catalogos,
sendo destinado este arquivo para o esclarecimento de certos aspectos sobre a execução do código.

DEPEDÊNCIAS
---

quanto a execução, concerne somente o uso da biblioteca json-server e da discernição de variáveis de ambiente disponibilizada pelo vite,
ambas incluidas nas dependências.

Para fazer usos do sistema é necessário executar o seguinte script

    npx json-server <local> --port <number>

onde local representa o caminho para o arquivo products.json e number a porta de aplicação escolhida com ambiente de execução

E configurar a variável .env na raiz do projeto para que haja uma variável VITE_PRODUCTS_URL que aponte um local onde dar fetch nos dados
essenciais para a aplicação

EXECUÇÃO 
---

após configurar corretamente as dependências, rode o comando:

    npm run dev
