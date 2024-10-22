<script setup lang="ts">
import { transform } from 'typescript';

    // Realizamos una consulta a la API de dummyjson.com, y desestructuramos la respuesta, en data manejamos la informacion, en error los errores

    const {data, status, error, refresh, clear} = await useFetch("/api/products", {
        transform: (data) => data,
    })

    const products = toRaw(data.value.products)
         
    console.log(products)

    // Otra forma de hacer las consultas
    // const {data, error, pending} = await fetch("https://dummyjson.com/products") // Consultamos la API de dummyjson
    //     .then(res => res.json())                                                // la respuesta es un objeto json
    //     .then(data => data)                                                     // data es el objeto con toda la informacion
    //     .catch(err => console.log(err))                                         // Si hay error lo mostramos por consola

    // console.log(data.products)

</script>

<template>
    <h1>Products</h1>

    <div class="grid grid-cols-4 gap-4">

        <!-- Creamos un PersonCard para cada persona de la data -->
        <ProductsCard v-for="product in products" :key="product.id" :product="product" />
        
    </div>

</template>