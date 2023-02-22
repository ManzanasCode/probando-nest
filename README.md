## NestJS Tutorial



# How it works

  1) http request   =>  controller  =>  Service 




  Controllers
    Las funciones de un controlador son:

      Procesar la peticion HTTP
      Obtener los datos de entrada desde las distinta fuentes (body, params, query)
      Validar los datos de entrada
      Llamar al servicio correspondiente
      Responder con una petición HTTP con la información solicitada o con la información del error que se produjo
      Services
      Son el corazón de nuestra api. No solo se encarga de conectar el controlador con las librerías sino que además, llama a otros servicios.

  La lógica de negocio se centra en esta parte

  Libraries
  Es la parte que se encarga de conectarse con las librerías externas. Librerias como bases de datos u otros apis.



  /tareas
  /usuarios
  /libros
  /plurales


  #Comandos
    nest g controller users --no-spec

  
  docker-compose up --build



# Schemma First