<script setup>
const config = useRuntimeConfig()
</script>
<template>
    <p>
        {{ config.public.someValue }}
    </p>
</template>
