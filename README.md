## Tarea de Tecnologias web: Backend para Tabla "Actor" de Sakila - MySQL

## REQUERIMIENTOS

Para correr este proyecto debe tener instalado:

    - Docker
    -

# Instalación de la Base de Datos

1. Hacer correr una instancia MySQL en docker

```
docker run --name mysql -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 -d mysql:8
```

2. Me conecto a la BBDD (Le pedira password es 123456)

```
docker exec -it mysql mysql -u root -p
```

3. Creamos la Base de Datos del ATM.

```
CREATE DATABASE sakila;
```

4. Creamos la Base de Datos del ATM.

```
use sakila;
```
5. Acceder a la carpeta db. 

6. Ejecutar el script database.sql para crear la tabla actor.

7. Ejecutar el script data.sql para insertar los datos a dicha tabla.
