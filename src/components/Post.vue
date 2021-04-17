<template>
    <div>
        <div class="flex flex-col space-y-5">
            <div class="w-full border-b p-3" v-for="p in post" :key="p.id">
                <div class="flex space-x-5">
                    <img
                        :src="
                            'http://localhost:8000/profile/' +
                                p.user.profile_img
                        "
                        v-if="p.user.profile_img"
                        class="rounded-full object-cover h-12 w-12"
                    />
                    <div
                        v-else
                        class="h-12 w-12 bg-gray-500 rounded-full"
                    ></div>
                    <div>
                        <div
                            v-if="p.user.username"
                            class="flex space-x-2 group cursor-pointer"
                        >
                            <div
                                class="font-semibold group-hover:text-blue-500 duration-200"
                            >
                                {{ p.user.username.split(" ").pop() }}
                            </div>
                            <div>@{{ p.user.username }}</div>
                        </div>
                        <div class="mt-2">
                            <div>{{ p.desc }}</div>
                            <div v-if="p.picture != null" class="mt-5">
                                <div class="overflow-hidden rounded-lg">
                                    <img
                                        :src="
                                            'http://localhost:8000/post/' +
                                                p.picture
                                        "
                                        alt=""
                                        class="rounded-lg w-full  object-cover cursor-pointer transform duration-300 hover:scale-110"
                                    />
                                </div>
                            </div>
                            <div class="mt-5" v-if="p.status == 'job'">
                                <button class="btn-primary w-32 rounded-full ">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["post"],
};
</script>

<style></style>
