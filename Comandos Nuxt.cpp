// Levantar servidor desarrollo
> npx nuxi dev

// Obtener informacion de la plataforma y de la aplicacion
> npx nuxi info

// Actualizar la version de Nuxt
> npx nuxi upgrade

// Crear una nueva aplicacion
> npx nuxi init $NOMBRE

// Crear un componente
> npx nuxi add component $NOMBRE_COMPONENTE

// Crear un composable (Crea un componente y crea un archivo en la carpeta 'composables')
> npx nuxi add composable useFetch

// Instala dependencias
> npx install

// Crear un nuevo archivo
> npx nuxi add composable|middleware|component|layout|page $NOMBRE

// Crea un bundle de analisis el rendimiento (testear como si nuestra pagina estuviera en produccion)
> npx nuxi analyze

// Construir la aplicacion para ponerlo en produccion
> npx nuxi build

// Limpiar archivos en cache y carpeta output
> npx nuxi cleanup