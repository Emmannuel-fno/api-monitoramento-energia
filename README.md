API de Monitoramento de Consumo de Energia
Projeto desenvolvido com NestJS para o monitoramento de consumo de energia em uma comunidade, com funcionalidades de:

✅ Cadastro de consumo
✅ Consulta de histórico
✅ Visualização de alertas de consumo elevado

Além disso, o projeto inclui um front-end simples, feito com HTML, CSS e JavaScript, para facilitar a interação com a API.

🚀 Tecnologias utilizadas
NestJS

TypeORM

SQLite3

HTML, CSS e JavaScript Vanilla

🗂️ Estrutura do Projeto
pgsql
Copiar
Editar
/public              → Front-end (arquivos estáticos)
/src                 → Código-fonte NestJS (back-end)
/test                → Testes
package.json         → Configurações do Node.js
tsconfig.json        → Configurações do TypeScript
nest-cli.json        → Configurações do NestJS
README.md            → Este arquivo
⚙️ Como rodar o projeto
✅ Pré-requisitos:
Node.js instalado

npm instalado

✅ Passos:
Clone ou baixe este repositório.

No terminal, navegue até a pasta do projeto.

Instale as dependências:

bash
Copiar
Editar
npm install
Execute a aplicação:

bash
Copiar
Editar
npm run start:dev
🌐 Acessando o Front-end
Após rodar a aplicação, acesse no navegador:

Página	URL
Tela de Cadastro de Consumo	http://localhost:3000/public/Cadastro.html
Tela de Histórico de Consumo	http://localhost:3000/public/historico.html
Tela de Alertas de Consumo	http://localhost:3000/public/alertas.html

📝 Funcionalidades
✅ Tela de Cadastro:
Informar ID do usuário

Quantidade de energia consumida (kWh)

Data do consumo

Enviar para API via método POST

✅ Tela de Histórico:
Informar ID do usuário

Data inicial e final

Exibe histórico de consumo via método GET

✅ Tela de Alertas:
Informar ID do usuário

Exibe alertas de consumo elevado nos últimos dois meses via método GET

📦 Como preparar para entrega
Confirme que todos os testes e acessos funcionam.

Comprima (em .zip) apenas os seguintes itens:

✅ Pasta src
✅ Pasta test
✅ Arquivo package.json
✅ Arquivo tsconfig.json
✅ Arquivo nest-cli.json

Importante:
✅ Não precisa enviar a pasta node_modules nem o dist.

✅ Observação
Caso haja dúvidas sobre o funcionamento ou ajuste do projeto, entre em contato com o professor ou consulte a documentação oficial do NestJS.
