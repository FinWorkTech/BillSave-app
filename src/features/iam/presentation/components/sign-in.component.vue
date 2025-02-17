<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { SignInRequest } from '../../domain/model/sign-in.request.js'
import { useAuthenticationStore } from '../stores/authentication.store.js'; 

defineOptions({
  name: 'sign-in',
});

const router = useRouter();
const authenticationStore = useAuthenticationStore();

const username = ref('');
const password = ref('');

function handleSubmit() {
  const signInRequest = new SignInRequest(username.value, password.value);
  authenticationStore.signIn(signInRequest, router);
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="bg-white bg-opacity-80 px-10 py-13 rounded-sm shadow-lg flex flex-col gap-8">


    <div class="relative">
      <label for="username" class="absolute -top-4 left-0 text-gray-500 bg-white px-1 text-[14px]">Username</label>
      <input type="text" id="username" v-model="username" class="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-[#353e49]"/>
    </div>

    <div class="relative">
      <label for="password" class="absolute -top-4 left-0 text-gray-500 bg-white px-1 text-[14px]">Password</label>
      <input type="password" id="password" v-model="password" class="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-[#353e49]"/>
    </div>

    <div class="relative flex flex-row justify-between">
      <button type="submit" class="px-4 py-2 rounded-lg bg-[#051320] text-white hover:bg-[#2c333a] shadow-lg cursor-pointer">Sign In</button>
      <router-link to="/sign-up" class="px-4 py-2 rounded-lg  text-gray-500 hover:bg-[#b1b7bd] hover:text-white shadow-lg">Sign Up</router-link>
    </div>
  </form>
</template>
