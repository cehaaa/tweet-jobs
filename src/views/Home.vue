<template>
    <div
        class="w-full h-screen flex justify-center items-center bg-blue-500 select-none"
    >
        <div class="text-white text-center group cursor-pointer">
            <div
                class="text-9xl font-bold group-hover:text-gray-900  duration-200"
            >
                Tweet Jobs
            </div>
            <div class="mt-2 group-hover:text-gray-900 duration-200">
                Find your dream jobs now!
            </div>

            <router-link class="underline mt-5 block" to="/login"
                >click here to sign in</router-link
            >
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
