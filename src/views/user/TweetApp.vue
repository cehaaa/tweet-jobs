<template>
    <div class="w-full flex h-screen">
        <div class="w-3/12 border-r pt-5 flex flex-col">
            <div
                class="text-3xl font-bold px-10 hover:text-blue-500 duration-200 cursor-pointer"
            >
                Tweet Jobs
            </div>

            <div class="flex flex-col justify-between h-full mt-10">
                <div
                    class="mt-10 text-lg font-semibold flex-row space-y-10 px-10"
                >
                    <router-link class="sidebar-list" to="/tweet/home"
                        >Home</router-link
                    >

                    <router-link class="sidebar-list" to="/tweet/jobs"
                        >Jobs</router-link
                    >

                    <router-link class="sidebar-list" to="/tweet/settings"
                        >Settings</router-link
                    >
                </div>

                <router-link to="/tweet/profile">
                    <div
                        class="hover:bg-gray-200 duration-200 cursor-pointer group px-10 py-5"
                    >
                        <div class="flex items-center space-x-2">
                            <img
                                :src="
                                    'http://localhost:8000/profile/' +
                                        userData.profile
                                "
                                v-if="userData.profile"
                                class="rounded-full h-10 w-10 object-cover"
                            />
                            <div
                                v-else
                                class="rounded-full h-10 w-10 bg-gray-500 "
                            ></div>
                            <div v-if="userData.username && userData.job">
                                <div
                                    class="font-semibold group-hover:underline"
                                >
                                    {{ userData.username }}
                                </div>
                                <div
                                    class="text-gray-500 group-hover:underline text-sm"
                                >
                                    {{ userData.job }}
                                </div>
                            </div>
                            <div v-else>
                                <div
                                    class="text-gray-500 group-hover:underline text-sm"
                                >
                                    Update profile.
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        <div class="w-8/12 border-r h-screen overflow-auto hide-scroll-bar">
            <router-view></router-view>
        </div>

        <div class="w-5/12">
            <div class="border-b p-3 w-full">
                <div class="font-bold text-2xl">You might like</div>

                <div class="flex flex-col space-y-3"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userData: {
                username: "",
                job: "",
                profile: "",
            },
        };
    },
    mounted() {
        this.getUserData();
    },
    methods: {
        getUserData() {
            fetch(`${this.$apiURL}/user/detail/${this.$userId}`, {
                method: "get",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.username && data.job !== null) {
                        this.userData.username = data.username;
                        this.userData.job = data.job;
                        this.userData.profile = data.profile_img;
                    }
                });
        },
    },
};
</script>

<style></style>
