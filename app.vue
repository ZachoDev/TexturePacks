<template>

  <!-- Utilizamos la plantilla por defecto definido en la carpeta layouts -->
  <NuxtLayout>

    <!-- Componente de Nuxt permite que el componente principal en renderizarse sea el index.vue en pages -->
    <NuxtPage />
    
  </NuxtLayout>

  <!-- Mensaje desde app.vue -->
</template>

<style >
  body {
    @apply
    bg-slate-100
  }
</style>
