<script setup lang="ts">
    const data = await fetch("https://dummyjson.com/users") // Consultamos la API de dummyjson
        .then(res => res.json())                            // la respuesta es un objeto json
        .then(data => data)                                 // data es el objeto con toda la informacion
        .catch(err => console.log(err))                     // Si hay error lo mostramos por consola

    const persons = data.users // Data trae 4 entradas (users, limit, count, nose) usaremos users

    console.log(persons)
</script>

<template>
    <h1>Persons</h1>

    <div class="grid grid-cols-4 gap-4">

        <!-- Creamos un PersonCard para cada persona de la data -->
        <PersonsCard v-for="person in persons" :key="person.id" :person="person" />
        
    </div>

</template>