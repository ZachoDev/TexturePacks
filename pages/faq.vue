<script setup lang="ts">
    import {
        Card,
        CardContent,
        CardDescription,
        CardHeader,
        CardTitle,
    } from '@/components/ui/card'

    const { data } = await useFetch('/api/faq')

    const faqs = data.value?.faqs || []

    console.log(faqs)

    // const data = await fetch('https://dummyjson.com/products')
    //     .then(response => response.json())

    // const products = data.value?.products || []

    // console.log(data)

</script>

<template>
    <h1>Esta es la pagina de FAQ</h1>

    <Accordion  type="single" collapsible >
        <AccordionItem v-for="faq in faqs" :key="faq.id" :value="faq.id.toString()">
            <AccordionTrigger>{{ faq.question }}</AccordionTrigger>
            <AccordionContent>{{ faq.answer }}</AccordionContent>
        </AccordionItem>
    </Accordion>



</template>