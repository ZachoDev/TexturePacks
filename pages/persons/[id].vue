<script lang="ts" setup>

    // useRoute es una funcion que nos devuelve la ruta actual y nos permite acceder a sus parametros, como id
    const route = useRoute()
    // console.log(route)
</script>

<template>
    View profile
    <div>
        {{ route.params.id }}
    </div>
</template>