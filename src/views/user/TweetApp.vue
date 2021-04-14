<template>
    <div class="w-full flex h-screen">
        <div class="w-3/12 border-r-2 pt-5 flex flex-col">
            <div
                class="text-3xl font-bold px-10 hover:text-blue-500 duration-200 cursor-pointer"
            >
                Tweet Jobs
            </div>

            <div class="flex flex-col justify-between h-full mt-10">
                <div
                    class="mt-10 text-lg font-semibold flex-row space-y-10 px-10"
                >
                    <router-link
                        class="sidebar-list text-blue-500"
                        to="/tweet/home"
                        >Home</router-link
                    >

                    <router-link class="sidebar-list" to="/tweet/jobs"
                        >Jobs</router-link
                    >

                    <router-link class="sidebar-list" to="/tweet/home"
                        >Save</router-link
                    >
                </div>

                <router-link to="/tweet/profile">
                    <div
                        class="hover:bg-gray-200 duration-200 cursor-pointer group px-10 py-5"
                    >
                        <div class="flex items-center space-x-2">
                            <div
                                class="rounded-full h-10 w-10 bg-blue-500"
                            ></div>
                            <div>
                                <div
                                    class="font-semibold group-hover:underline"
                                >
                                    {{ userData.username }}
                                </div>
                                <div
                                    class="text-gray-500 group-hover:underline"
                                >
                                    {{ userData.job }}
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        <div class="w-6/12 border-r-2 h-screen overflow-auto hide-scroll-bar">
            <router-view></router-view>
        </div>

        <div class="w-3/12"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userData: {
                username: "Username",
                job: "Your Dream Job",
            },
        };
    },
    mounted() {
        this.getUserData();
    },
    methods: {
        getUserData() {
            let userId = JSON.parse(localStorage.getItem("TweetJobs_UserId"));

            fetch(`${this.$apiURL}/user_information/${userId}`, {
                method: "get",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.username && data.job !== null) {
                        this.userData.username = data.username;
                        this.userData.job = data.job;
                    }
                });
        },
    },
};
</script>

<style></style>
