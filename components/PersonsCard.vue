<script lang="ts" setup>

    // Tipamos los tipos de datos que contiene el objeto Person y se lo asignamos al prop "person"
    interface Person {
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        image: string;
    }

    const props = defineProps<{person: Person }>() 

    console.log("-----------" + props.person)

</script>

<template>
    <div>
        <Card class="">
            <CardHeader>
                <div>
                    <img :src="props.person.image" class="circle w-16 h-16">
                </div>
                <CardTitle>
                    {{ props.person.firstName }} {{ props.person.lastName }}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div>
                    Email: {{ props.person.email }}
                </div>
                <div>
                    Phone: {{ props.person.phone }}
                </div>
                <div>
                    <NuxtLink :to="{name: 'persons-id', params: {id: props.person.id}}" >
                        <Button class="mt-5">
                            View Profile
                        </Button>
                    </NuxtLink>
                </div>
            </CardContent>
        </Card>
    </div>
</template>