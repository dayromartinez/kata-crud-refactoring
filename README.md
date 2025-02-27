# [Solución]

## KATA Full Stack

En el siguiente proyecto se presenta algunos conceptos de Full Stack, trabajando con Spring Boot + ReactJS.

### Requerimientos para desarrollo
- Maven > v3
- NodeJS > v6
- NPM > v3 
- Java > v11 

### Requerimientos para la solución
- Docker > v19
- Docker Compose > v1

### Caso de Uso

Se tiene presente un formulario donde se registra unas tareas basadas en una lista por hacer. Esta lista se crea para poder tener una grupos de items donde se pueda gestionar un CRUD. Se tiene un diseño muy básico pero totalmente funcional. 

#### Demo

![alt text]( ./todo-list-kata.gif "Demo funcional del ToDo List")
 
### Instalación

![alt text]( ./start.gif "Instalación y puesta en marcha")

### Perspectiva Front-end
Se tiene un archivo con toda la lógica, se presentan algunas malas prácticas en la codificación del mismo. Se debe refactorizar en donde se separe los componentes en archivos y se representen una mejor estructura. 

Aplicar las mejores prácticas y buscar el mejor diseño para presentar los datos.


### Perspectiva Back-end

Dentro del back-end no se tiene una base de datos basada en servidor. Se debe aplicar un buen diseño de modelo entidad relación y aplicar una base de datos como servidor, ejemplo MySQL. Representar un objeto de trasporte de datos (DTO) en vez de usar la misma entidad para responder. 

### Issues

- Resolver el diseño gráfico
- ~~Separar bien los elementos gráficos como componentes, store, reducer y providers.~~
- ~~La base de datos debe esta en un servidor como MySQL.~~
- ~~Aplicar reglas para no guardar elementos vácios.~~
- ~~Validar carácteres y demás para guardar las entidades de los TO-DO.~~
- ~~Trabajar con un objeto de trasporte de datos o un objeto plano para representa los datos ante la API.~~
- ~~[Opcional] Diseñar la solución con docker y docker-compose~~

### Reto a realizar

Hacer un fork en su propio namespace y presentar la solución más valida para ser discutida, argumentar los aspectos de mejora y aplicar algunas técnica de refactorización. Resolverlo de forma individual, aplicar los commit para cada paso que se realice en la refactorización. 



