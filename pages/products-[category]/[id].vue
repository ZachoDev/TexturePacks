<script lang="ts" setup>

    // useRoute es una funcion que nos devuelve la ruta actual y nos permite acceder a sus parametros, como id
    const route = useRoute()

    // definePageMeta es una funcion de nuxt que permite definir los metadatos de la pagina, en este caso validaremos que el parametro id en la ruta sea un numero
    definePageMeta({
        validate: route => {
            const regex = /[0-9]+/i;
            const expresion = new RegExp(regex)
            const id = route.params.id as string

            return expresion.test(id)
        }
    })

    // console.log(route)

</script>

<template>
    View product
    <div>
        Parametro Id: {{ route.params.id }}
    </div>
    <div>
        Parametro Categorya: {{ route.params.category }}
    </div>
</template>