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
| pacote | descrição |
| [body-parser](https://www.npmjs.com/package/body-parser) | Necessário para receber dados no corpo da requisição |
| [consign](https://www.npmjs.com/package/consign) | Autoload de arquivos |
| [cors](https://www.npmjs.com/package/cors) | Utilizado para criar o middleware |
| [crypto-js](https://www.npmjs.com/package/crypto-js) | Biblioteca de criptografias |
| [express](https://www.npmjs.com/package/express) | Framework web |
| [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) | Utilizado para criar o JSON Web Token |
| [mongoose](https://www.npmjs.com/package/mongoose) | Utilizado para criar conexão e querys no mongodb |

### Rotas Implementadas:
| Rota | method |
|'/login'| POST |
|'/hello-world'| GET |
|'/my-name'| GET |