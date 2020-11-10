# API_RESTFUL_NODE

### Descrição
Projeto criado com funções básicas já iniciada para serviço API RESTFul em nodeJs. Nesse projeto contém:

* Inicialização de servidor via express.
* Inicialização de conexão mongo com mongoose.
* Autoload de arquivos, rotas, inicialização de funções automáticas com consign.
* Configurações padrões para recebimento de dados no corpo da requisição com body-parser.
* Criptografia AES com cryptojs.
* Autenticação, middleware e utilização de JSON Web Token com cors e jsonwebtoken.
* Exemplo de rotas GET e POST.

### Pacotes utilizados:
<table>
    <thead>
        <th>Pacote</th>
        <th>Descrição</th>
    </thead>
    <tbody>
        <tr>
            <td><a href="https://www.npmjs.com/package/body-parser">body-parser</a></td>
            <td>Necessário para receber dados no corpo da requisição</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/consign">consign</a></td>
            <td>Autoload de arquivos</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/cors">cors</a></td>
            <td>Utilizado para criar o middleware</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/crypto-js">crypto-js</a></td>
            <td>Biblioteca de criptografias</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/express">express</a></td>
            <td>Framework web</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/jsonwebtoken">jsonwebtoken</a></td>
            <td>Utilizado para criar o JSON Web Token</td>
        </tr>
        <tr>
            <td><a href="https://www.npmjs.com/package/mongoose">mongoose</a></td>
            <td>Utilizado para criar conexão e querys no mongodb</td>
        </tr>
    </tbody>
</table>

### Rotas Implementadas:
<table>
    <thead>
        <th>Rota</th>
        <th>Method</th>
    </thead>
    <tbody>
        <tr>
            <td>/login</td>
            <td>POST</td>
        </tr>
        <tr>
            <td>/hello-world</td>
            <td>GET</td>
        </tr>
        <tr>
            <td>/my-name</td>
            <td>GET</td>
        </tr>
    </tbody>
</table>