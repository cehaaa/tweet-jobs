<template>
    <div class="w-full flex h-screen">
        <div class="w-3/12 border-r-2 py-5 px-10 flex flex-col fie">
            <div class="text-3xl font-bold">Mars</div>

            <div class="flex flex-col justify-between h-full mt-10">
                <div class="mt-10 text-lg font-semibold flex-row space-y-10">
                    <div>
                        <router-link to="/mars/home" class="sidebar-list"
                            >Beranda</router-link
                        >
                    </div>
                    <div>
                        <router-link to="/mars/home" class="sidebar-list"
                            >Lowongan</router-link
                        >
                    </div>
                    <div>
                        <router-link to="/mars/home" class="sidebar-list"
                            >Daftar</router-link
                        >
                    </div>
                    <div>
                        <router-link to="/mars/home" class="sidebar-list"
                            >Simpan</router-link
                        >
                    </div>
                </div>

                <div class="">
                    <div class="flex items-center space-x-2">
                        <div class="rounded-full h-10 w-10 bg-blue-500"></div>
                        <div>
                            <div class="font-semibold">Christian</div>
                            <div class="text-gray-500 -mt-1">
                                Frontend Engineer
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-6/12 border-r-2 h-screen overflow-auto hide-scroll-bar">
            <router-view></router-view>
        </div>

        <div class="w-3/12"></div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
