## Aplicación Back-End

Representación de una API para gestionar una lista de TO-DOs, donde exponer 6 endpoinds para realizar estás operaciones. 

## Característica técnicas

### Requerimientos 

- Maven > v3
- Java > v11
- Docker (opcional)


### Dependencias

- Base de datos relacional (MySQL)

### Objetivo esperado

![alt text]( ./todo-list-kata.gif "Demo funcional del ToDo List")

## Comandos y configuraciones

Comando para compilar:

```mvn compile```

Para poner en marcha el proyecto :

```mvn spring-boot:run```

Construir el artefacto para el despliegue:

```mvn package```
```mvn package -DskipTests```

Construir la imagen en Docker:

```docker build -t todo-list-back .```

Correr una base de datos relacional:

```docker run -d -p 33060:3306 --name mysql-db  -e MYSQL_ROOT_PASSWORD=secret --mount src=mysql-db-data,dst=/var/lib/mysql mysql```


## Notas

- La aplicación esta diseñada para exponer una API de consumo Rest
- Depende de una base de datos relacional como lo es MySQL
- Parte de la gestión se hace con una relacipon OneToMany donde se centra en el ToDoList
- Debende de una propiedad para permitir los dominios cruzados.
