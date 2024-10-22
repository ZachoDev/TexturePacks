<script lang="ts" setup>

    // # ?
    // definePageMeta es una funcion que permite definir los metadatos de la pagina, en este caso definimos el layout que tomará el componente de login
    definePageMeta({
        layout: 'authentication'
    })

</script>

<template>

    <h1>Login</h1>

    <LoginForm />
    
</template>