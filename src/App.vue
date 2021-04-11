<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>

<style>
.hide-scroll-bar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
    display: none;
}
</style>
