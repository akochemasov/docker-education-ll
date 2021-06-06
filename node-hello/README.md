# Node Hello World

## Запуск

```shell
make start 
```

## Docker

### Сборка образа

```shell
docker build -t node-hello .
```

### Запуск образа

```shell
docker run -p 3000:3000 -t node-hello
```

Смотреть  
http://localhost:3000/
