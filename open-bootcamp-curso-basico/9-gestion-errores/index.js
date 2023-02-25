const logger = require('./logger')

// logger.log("Hola estoy saliendo por pantalla")  // .log no se puede usar con winston librería
logger.info("Hola esto es un mensaje informativo")
logger.debug("Esto es un mensaje de debug")
logger.warn("Esto es un mensaje de advertencia")
logger.error("Esto es un error")
