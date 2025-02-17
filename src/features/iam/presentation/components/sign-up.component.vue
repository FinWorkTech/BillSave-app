<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { SignUpRequest } from '../../domain/model/sign-up.request.js'
import { useAuthenticationStore } from '../stores/authentication.store.js';

defineOptions({
  name: 'sign-up',
});

const router = useRouter();
const authenticationStore = useAuthenticationStore();

const fullname = ref('');
const username = ref('');
const password = ref('');

function handleSubmit() {
  const signUpRequest = new SignUpRequest(fullname.value, username.value, password.value);
  authenticationStore.signUp(signUpRequest, router);
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="bg-white bg-opacity-80 px-10 py-13 rounded-sm shadow-lg flex flex-col gap-8">

    <div class="relative">
      <label for="fullname" class="absolute -top-4 left-0 text-gray-500 bg-white px-1 text-[14px]">Full Name</label>
      <input type="text" id="fullname" v-model="fullname" class="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-[#353e49]"/>
    </div>

    <div class="relative">
      <label for="username" class="absolute -top-4 left-0 text-gray-500 bg-white px-1 text-[14px]">Username</label>
      <input type="text" id="username" v-model="username" class="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-[#353e49]"/>
    </div>

    <div class="relative">
      <label for="password" class="absolute -top-4 left-0 text-gray-500 bg-white px-1 text-[14px]">Password</label>
      <input type="password" id="password" v-model="password" class="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-[#353e49]"/>
    </div>

    <button type="submit" class="px-4 py-2 rounded-lg bg-[#353e49] text-white hover:bg-[#2c333a] shadow-lg cursor-pointer">Sign Up</button>

    <div class="text-center -mt-2 text-[#353e49] flex flex-row gap-2 px-4">
      <span>Do you have an account?</span>
      <router-link to="/sign-in" class="hover:underline">Sign in</router-link>
    </div>
  </form>
</template>