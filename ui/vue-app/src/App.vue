<script setup lang="ts">
import {useGetUsers} from "@/features/users/useGetUsers";
import {useAddUser} from "@/features/users/useAddUser";
import {useRemoveUser} from "@/features/users/useRemoveUser";

let users = useGetUsers()


const addUser = () => {
  useAddUser('Tobias')
}

const removeUser = (id) => {
  useRemoveUser(id)
}

</script>

<template>
  <div v-if="users.length > 0" v-for="user in users">
    <div :key="user.id" style="display: flex; gap: 15px; align-items: center">
      <h1>{{ user.name }}</h1>
      <button style="padding: 5px" @click="removeUser(user.id)">Remove</button>
    </div>
  </div>
  <button @click="addUser">Add</button>
</template>

<style scoped>
</style>
