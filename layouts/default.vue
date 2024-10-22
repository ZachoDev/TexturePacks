<!-- Esta plantilla permite colocar todos los componentes comunes (menu, footer etc) en todas las paginas de la app -->
<template>

    <Menu />
    
    <div class="mt-5 mb-5 container mx-auto">

        <!-- Este componente permite renderizar las paginas de la app junto a la plantilla de layout -->
        <slot />

    </div>
</template>