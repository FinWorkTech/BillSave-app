<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { AuthService } from '@shared/services/auth.service.js';

const router = useRouter();

defineOptions({
    name: 'toolbar',
});

const isMenuOpen = ref(false);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
    isMenuOpen.value = false;
}

function handleSignOut() {
    AuthService.signOut(router);
    closeMenu();
}
</script>

<template>
    <header class="w-full lg:fixed top-0 left-0 right-0 z-50 bg-[#353E49]">
        <nav class="nav bg-[#353E49] p-4">
            <div class="nav__container w-[90%] mx-auto h-[70px] grid grid-cols-2 justify-between items-center px-0 overflow-hidden">
                
                <!-- Logo Section -->
                <span class="col-span-1">
                    <router-link to="/">
                        <span class="text-white text-3xl md:text-4xl lg:text-4xl">BillSave</span>
                    </router-link>
                </span>

                <!-- Desktop Menu -->
                <div class="hidden lg:flex lg:col-span-1">
                    <ul class="md:flex gap-14 items-center w-full lg:justify-end">
                        <li class="list-none">
                            <router-link to="/" class="nav__link-about-me flex text-[1.2rem] items-center py-4 no-underline text-white tracking-widest font-medium hover:underline">
                                Home
                            </router-link>
                        </li>
                        <li class="list-none">
                            <router-link to="/portfolios" class="nav__link-contact flex text-[1.2rem] items-center py-4 no-underline text-white tracking-widest font-medium hover:underline">
                                Portfolio
                            </router-link>
                        </li>
                        <li class="list-none">
                            <a href="#" class="nav__link-contact flex text-[1.2rem] items-center py-4 no-underline text-white tracking-widest font-medium hover:underline">
                                Reports
                            </a>
                        </li>
                        <li class="list-none">
                                <button class="nav__link-contact rounded-full flex items-center p-4 px-8 no-underline bg-gray-600 text-white tracking-widest hover:bg-[#6d7b8d] cursor-pointer font-semibold" @click="handleSignOut">
                                    Sign Out
                                </button>
                        </li>
                    </ul>
                </div>

                <!-- Mobile Menu Icons -->
                <div class="col-span-1 flex justify-end items-center -space-x-8 lg:hidden">
                    <a href="#menu" class="nav__menu z-10" @click.prevent="toggleMenu">
                        <img src="/src/assets/images/svg/menu.svg" class="w-8 block" alt="menu-icon"/>
                    </a>
                    <a href="#" class="nav__menu nav__menu--second z-10" @click.prevent="toggleMenu">
                        <img src="/src/assets/images/svg/close.svg" class="w-8 block" alt="close-icon"/>
                    </a>
                </div>

                <!-- Mobile Menu -->
                <div :class="{'dropdown': true, 'open': isMenuOpen}" class="bg-[#353E49] px-10 lg:hidden absolute right-0 top-0 bottom-0 w-[60%] max-w-[300px] p-4 flex flex-col gap-6 justify-center" id="menu">

                    <div class="h-[50%] mt-23 flex flex-col justify-between text-2xl">
                        
                        <div>
                            <ul>
                                <li class="list-none">
                                    <router-link to="/" class="nav__link-about-me flex items-center py-4 no-underline text-white tracking-widest hover:underline ml-3" @click="closeMenu">
                                        Home
                                    </router-link>
                                    <div class="w-[80%] h-px bg-gray-300 my-2 lg:hidden"></div>
                                </li>
                                
                                <li class="list-none">
                                    <router-link to="/portfolios" class="nav__link-contact flex items-center py-4 no-underline text-white tracking-widest hover:underline ml-3" @click="closeMenu">
                                        Portfolio
                                    </router-link>
                                    <div class="w-[80%] h-px bg-gray-300 my-2 lg:hidden"></div>
                                </li>
                                <li class="list-none">
                                    <a href="#" class="nav__link-contact flex items-center py-4 no-underline text-white tracking-widest hover:underline ml-3" @click="closeMenu">
                                        Reports
                                    </a>
                                    
                                </li>
                            </ul>
                        </div>
                    
                        <ul class="dropdown__btn mx-auto rounded-4xl">
                            <li class="list-none rounded-4xl flex justify-center">
                                <button class="nav__link-contact flex items-center py-4 px-4 no-underline text-white tracking-widest hover:underline " @click="handleSignOut">
                                    Sign Out
                                </button>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.nav {
    --img1: scale(1);
    --img2: scale(0);
}

.nav__container {
    grid-template-areas: "logo img";
}

.nav__logo {
    grid-area: logo;
}

.nav__menu {
    grid-area: img;
    z-index: 10;
    transition: all .6s;
    transform: var(--img1);
}

.nav__menu--second {
    transform: var(--img2);
}

.dropdown {
    clip-path: var(--clip, inset(0 0 0 100%));
    transition: clip-path .6s;
}

.dropdown.open {
    clip-path: inset(0 0 0 0);
}

.dropdown__btn {
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
}

</style>