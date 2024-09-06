**Bienvenido a la prueba técnica de Tisal**

## Prueba 1: Optimización del Menú de la Aplicación

### Descripción:
El objetivo de esta prueba es optimizar el menú de la aplicación para que se genere dinámicamente a partir de los datos proporcionados en un archivo JSON local. Asegúrate de que el menú funcione correctamente y que los enlaces de navegación dentro de la aplicación sean totalmente operativos.

- Archivo JSON: `data_menu.json` (ubicado en la carpeta `public`).

### Requisitos:
- Los datos del menú deben ser cargados desde el archivo JSON local que se encuentra en la carpeta `public`.
- La navegación a través de los enlaces del menú debe funcionar correctamente y sin errores.

## Prueba 2: Selects Dependientes

### Descripción:
Crea un formulario con tres selectores (`<select>`): **Edificio**, **Piso** y **Zona**. Estos deben ser dependientes entre sí, es decir, las opciones de "Piso" deben actualizarse según la selección de "Edificio", y las opciones de "Zona" deben actualizarse según la selección de "Piso" y "Edificio".

**Ejemplo de flujo de selección:**
- Si el usuario selecciona el **Edificio 1**, el segundo selector debe mostrar los pisos disponibles para ese edificio.
- Luego, al seleccionar el **Piso 2** del **Edificio 1**, el tercer selector debe mostrar las zonas correspondientes a ese piso.

**Ejemplo de resultado esperado**:
```json
{
  "edificio": "1",
  "piso": "2",
  "zona": "Norte"
}
```

- Archivo JSON: `data_edificio_piso_zona.json` (ubicado en la carpeta `public`).

### Requisitos:
- Los datos de **Edificio**, **Piso** y **Zona** deben ser obtenidos a partir de una petición al archivo JSON local ubicado en la carpeta `public`.
- La interfaz debe actualizar correctamente los selectores de forma dependiente.


## Prueba 3 Depurar los servicios CounterService

### Descripción:
En esta prueba, debes solucionar un problema relacionado con el servicio CounterService, el cual se utiliza para incrementar y decrementar un contador. El contador funciona correctamente en el componente Prueba2, pero no se refleja adecuadamente en los componentes Child1 y Child2. Aunque ambos hijos comparten el mismo servicio de CounterService, los cambios en el contador no se actualizan entre ellos.

### Detalles del Problema:
Actualmente, cada componente hijo (Child1 y Child2) tiene su propia instancia del servicio CounterService, lo que significa que los cambios realizados en uno de ellos no se ven reflejados en el otro. Tu tarea es identificar la causa de este comportamiento y corregirlo para que los componentes hijos compartan una única instancia del servicio, de modo que las actualizaciones del contador se sincronicen entre ellos.


### Requisitos:

- Identifica y soluciona el problema de modo que las actualizaciones en el contador se reflejen en todos los componentes en tiempo real.

- Explica el problema: Debes explicar por qué sucede este comportamiento y cómo lo has resuelto.

