# Desafio Orulo

## Depedencias

- Docker 

- Docker-Compose

- Node

## Como rodar a aplicação

### 1) Na raiz desse projeto, onde se encontra o arquivo docker-compose, execute o seguinte comando ( talvez você possa precisa rodar com sudo depedendo como estar configurado o docker-compose na sua maquina )

``` 
docker-compose up -d --build
```

### 2) Quando o docker-compose finalizar a montagem dos containers, certifique-se de que tudo subiu ( são 2 container, db_orulo e orulo_backend )

```
docker ps -a
```

### 3) Agora só entrar na pasta do frontend, e roda os seguintes comandos

```
npm i && npm start
```
## O que eu gostaria de arruma na aplicação se tivesse mais tempo?

```
- Arquiteta o controle de estado no front
- Desacopla os componentes no front
- Prepara o ambiente do backend para teste - desenvolvimento - produção
- Melhorar a UI da aplicação
- Eliminar os boilerplates
```
