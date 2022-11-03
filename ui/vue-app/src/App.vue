<script setup lang="ts">
import {useGetUsers} from "@/features/users/useGetUsers";
const users = useGetUsers()

</script>

<template>
  <div v-for="user in users">
    <h1>{{ user.name }}</h1>
  </div>
</template>

<style scoped>
</style>
