<script setup>

defineOptions({
name: 'toolbar',
});

</script>

<template>
    <header class="w-full lg:fixed top-0 left-0 right-0 z-50 bg-[#353E49]">
        <nav class="nav bg-[#353E49] p-4">
            <div class="nav__container w-[90%] mx-auto h-[70px] grid grid-cols-2 justify-between items-center px-0 overflow-hidden">
                <!-- Logo Section -->
                <span class="col-span-1">
                    <a href="#">
                        <span class="text-white text-3xl md:text-4xl lg:text-4xl">BillSave</span>
                    </a>
                </span>
                <!-- Desktop Menu -->
                <div class="hidden lg:flex lg:col-span-1">
                    <ul class="md:flex gap-14 items-center w-full lg:justify-end">
                        <li class="list-none">
                            <a href="#" class="nav__link-about-me flex text-[1.2rem] items-center py-4 no-underline text-white tracking-widest font-medium hover:underline">
                                Home
                            </a>
                        </li>
                        <li class="list-none">
                            <a href="#" class="nav__link-contact flex text-[1.2rem] items-center py-4 no-underline text-white tracking-widest font-medium hover:underline">
                                Portfolio
                            </a>
                        </li>
                        <li class="list-none">
                            <a href="#" class="nav__link-contact flex text-[1.2rem] items-center py-4 no-underline text-white tracking-widest font-medium hover:underline">
                                Reports
                            </a>
                        </li>
                        <li class="list-none ml-4">
                            <a href="#" class="nav__link-contact flex text-[1.2rem] items-center py-4 no-underline text-white tracking-widest font-medium hover:underline">
                                <img src="/src/assets/images/svg/user.svg" alt="User Logo" class="w-7"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- Mobile Menu Icons -->
                <div class="col-span-1 flex justify-end items-center -space-x-8 lg:hidden">
                    <a href="#menu" class="nav__menu z-10">
                        <img src="/src/assets/images/svg/menu.svg" class="w-8 block" alt="menu-icon"/>
                    </a>
                    <a href="#" class="nav__menu nav__menu--second z-10">
                        <img src="/src/assets/images/svg/close.svg" class="w-8 block" alt="close-icon"/>
                    </a>
                </div>
                <!-- Mobile Menu -->
                <ul class="dropdown bg-[#353E49] px-10 lg:hidden absolute right-0 top-0 bottom-0 w-[60%] max-w-[300px] p-4 flex flex-col gap-6 justify-center" id="menu">
                    <li class="list-none">
                        <a href="#" class="nav__link-about-me flex text-[1.2rem] items-center py-4 no-underline text-white tracking-widest font-medium hover:underline ml-3">
                            Home
                        </a>
                    </li>
                    <li class="list-none">
                        <a href="#" class="nav__link-contact flex text-[1.2rem] items-center py-4 no-underline text-white tracking-widest font-medium hover:underline ml-3">
                            Portfolio
                        </a>
                    </li>
                    <li class="list-none">
                        <a href="#" class="nav__link-contact flex text-[1.2rem] items-center py-4 no-underline text-white tracking-widest font-medium hover:underline ml-3">
                            Reports
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<style>
.nav {
    --img1: scale(1);
    --img2: scale(0);
}

.nav:has( .dropdown:target ) {
    --img1: scale(0);
    --img2: scale(1);
    --clip: inset(0 0 0 0);
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

</style>