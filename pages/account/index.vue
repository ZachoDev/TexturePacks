<script lang="ts" setup>
    definePageMeta({
        layout: 'authentication'
    })
</script>

<template>

    <h1>Account</h1>

    <!-- #11 Rutas anidadas -->
    <!-- La ruta "/account" permite ir a la ruta "/account/register" o "/account/login" -->

    <NuxtLink to="/account/login">
        <Button>Login</Button>
    </NuxtLink>

    <NuxtLink to="/account/register">
        <Button>Register</Button>
    </NuxtLink>

</template>