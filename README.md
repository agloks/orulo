# Desafio Orulo

## Depedencias

- Docker 

- Docker-Compose

## Como rodar a aplicação


### 1) É necessário primeiro cria um arquivo env.js em frontend/src para colocar as credencias de acesso da API da orulo, cria o arquivo com o seguinte conteudo

```
// frontend/src/env.js

const ENV = {
  ORULO_TOKEN: 'TOKEN DE ACESSO'
}

export default ENV;
```

### 2) Agora na raiz desse projeto onde se encontra o arquivo docker-compose, execute o seguinte comando ( talvez você possa precisa rodar com sudo depedendo como estar configurado o docker-compose na sua maquina )

``` 
docker-compose up -d --build
```

### 3) Quando o docker-compose finalizar a montagem dos containers, certifique-se de que tudo subiu ( são 3 container, db_orulo, orulo_backend, orulo_frontend )

```
docker ps -a
```

## O que eu gostaria de arruma na aplicação se tivesse mais tempo?

```
- Arquiteta o controle de estado no front
- Desacopla os componentes no front
- Prepara o ambiente do backend para teste - desenvolvimento - produção
- Melhorar a UI da aplicação
- Eliminar os boilerplates
- Códigos para tratamento de erros com finalidade de uma maior resiliência no backend
- Entre outros...
```
