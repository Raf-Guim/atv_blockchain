# Certificado Blockchain

Este projeto é um sistema de registro e verificação de certificados acadêmicos usando a tecnologia blockchain. Ele permite que uma instituição registre certificados, consulte detalhes e revogue certificados usando um contrato inteligente. O frontend foi desenvolvido em React com TypeScript, e o contrato inteligente foi implementado em Solidity.

## Funcionalidades

- Registrar Certificado: Permite o registro de certificados com um ID, nome do aluno, curso e data de emissão.
- Consultar Certificado: Permite a consulta de certificados pelo ID, exibindo o nome do aluno, curso, data de emissão e status.
- Revogar Certificado: Permite que a instituição revogue um certificado, invalidando-o.

## Tecnologias Utilizadas

### Backend (Blockchain)

- Solidity para desenvolvimento do contrato inteligente.
- Truffle para gerenciar o ciclo de vida do contrato inteligente.
- Ganache para executar uma blockchain local para desenvolvimento e testes.
- Web3.js para interação com o contrato inteligente a partir do frontend.

### Frontend

- React e TypeScript para o desenvolvimento da interface.
- Web3.js para conectar e interagir com o contrato inteligente na blockchain.

## Pré-requisitos

Certifique-se de ter os seguintes requisitos instalados:

- Node.js (versão 18) e npm
- Truffle e Ganache

```bash
npm install -g truffle ganache
```

- MetaMask para conectar o frontend à blockchain local.

## Instalação

### Clone o repositório:

```bash
git clone https://github.com/raf-guim/catv_bloackchain.git
cd atv_bloackchain
```

Instale as dependências do projeto (tanto para o contrato quanto para o frontend):

```bash
# No diretório do frontend

cd frontend
npm install
```

### Inicie o Ganache:

Execute ganache no terminal para iniciar a blockchain local.

```bash
ganache
```

Anote as contas e chaves privadas exibidas.

### Compile e faça o deploy do contrato:

```bash
truffle compile
truffle migrate --network development
```

Anote o _endereço do contrato_ exibido no terminal após o deploy.

###Atualize o endereço do contrato no frontend:

No arquivo certificate-frontend/src/CertificateContract.ts, substitua "ENDERECO_DO_CONTRATO" pelo endereço do contrato obtido após o deploy.

## Inicie o frontend:

```bash
cd certificate-frontend
npm start
```

### Conecte-se ao MetaMask:

Abra o MetaMask, conecte-o à blockchain local (http://127.0.0.1:8545) e importe uma das contas do Ganache usando a chave privada.
Uso
No frontend, você verá três seções principais:

#### Registrar Certificado:

Preencha os campos com o ID, nome do aluno e curso.
Clique em "Registrar" para adicionar um novo certificado na blockchain.

#### Consultar Certificado:

Insira o ID do certificado e clique em "Consultar".
Os detalhes do certificado, incluindo a validade, serão exibidos se o ID for válido.

#### Revogar Certificado:

Insira o ID do certificado a ser revogado.
Clique em "Revogar" para invalidar o certificado.

## Estrutura do Projeto

```plaintext
Copy code
certificado-blockchain/
├── contracts/ # Contratos inteligentes em Solidity
│ └── Certificate.sol # Contrato de Certificado
├── migrations/ # Scripts de migração para deploy do contrato
├── test/ # Testes para o contrato inteligente
├── truffle-config.js # Configurações do Truffle e redes de blockchain
├── certificate-frontend/ # Diretório do frontend em React
│ ├── src/
│ │ ├── components/ # Componentes React para interações com o contrato
│ │ ├── contracts/ # ABI do contrato
│ │ ├── CertificateContract.ts # Instância do contrato no frontend
│ │ └── web3.ts # Configuração de conexão Web3
│ └── package.json
└── README.md
```

## Testes

### Testes do contrato inteligente:

Execute truffle test para rodar os testes automatizados definidos no contrato. Esses testes incluem o registro, consulta e revogação de certificados.
Testes manuais no frontend:

Use a interface React para registrar, consultar e revogar certificados e verifique o status e mensagens de erro.

## Observações

O projeto atualmente usa o Ganache para simular uma blockchain local. Para deploy em uma rede de teste como Rinkeby ou Ropsten, será necessário modificar as configurações de rede no truffle-config.js e ter Ether de teste disponível.
MetaMask deve estar configurado para interagir com a blockchain local, e uma conta do Ganache deve estar importada para testes.

## Licença

Este projeto é licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
