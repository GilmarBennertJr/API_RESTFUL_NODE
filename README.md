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
            <td>[body-parser](https://www.npmjs.com/package/body-parser)</td>
            <td>Necessário para receber dados no corpo da requisição</td>
        </tr>
        <tr>
            <td>[consign](https://www.npmjs.com/package/consign)</td>
            <td>Autoload de arquivos</td>
        </tr>
        <tr>
            <td>[cors](https://www.npmjs.com/package/cors)</td>
            <td>Utilizado para criar o middleware</td>
        </tr>
        <tr>
            <td>[crypto-js](https://www.npmjs.com/package/crypto-js)</td>
            <td>Biblioteca de criptografias</td>
        </tr>
        <tr>
            <td>[express](https://www.npmjs.com/package/express)</td>
            <td>Framework web</td>
        </tr>
        <tr>
            <td>[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)</td>
            <td>Utilizado para criar o JSON Web Token</td>
        </tr>
        <tr>
            <td>[mongoose](https://www.npmjs.com/package/mongoose)</td>
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