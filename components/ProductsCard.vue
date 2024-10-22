<script lang="ts" setup>

    // Tipamos los tipos de datos que contiene el objeto Product y se lo asignamos al prop "product"
    interface Product {
        id: number;
        title: string;
        description: string;
        price: number;
        images: Array<string>;
        thumbnail: string;
        category: string;
    }

    const props = defineProps<{product: Product }>() 

    console.log("-----------" + props.product)

</script>

<template>
    <div>
        <Card>
            <CardHeader>
                <div>
                    <img :src="props.product.thumbnail" class="circle" />
                </div>
                <CardTitle>
                    {{ props.product.title }}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div>
                    Price: {{ props.product.price }}
                </div>
                <div>
                    {{ props.product.description }}
                </div>
                <div>
                    <NuxtLink :to="{name: 'products-category-id', params: {id: props.product.id, category: props.product.category}}" >
                        <Button class="mt-5">View more</Button>
                    </NuxtLink>
                </div>
            </CardContent>
        </Card>
    </div>
</template>