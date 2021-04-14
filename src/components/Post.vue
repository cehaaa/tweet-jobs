<template>
    <div>
        <div class="flex flex-col space-y-5">
            <div class="w-full border-b p-3" v-for="p in post" :key="p.id">
                <div class="flex items-center space-x-5">
                    <div
                        class="h-10 w-10 rounded-full bg-blue-500 cursor-pointer"
                    ></div>
                    <div class="group cursor-pointer">
                        <div v-if="p.user.username" class="flex space-x-5">
                            <div
                                class="font-semibold group-hover:text-blue-500 duration-200"
                            >
                                {{ p.user.username.split(" ").pop() }}
                            </div>
                            <div>@{{ p.user.username }}</div>
                        </div>
                        <div v-else class="flex space-x-5">
                            <div
                                class="font-semibold group-hover:text-blue-500 duration-200"
                            >
                                Unkown Username
                            </div>
                            <div>@username</div>
                        </div>
                    </div>
                </div>
                <div class="my-3 text-justify">
                    <div class="mb-5" v-if="p.picture != null">
                        <div class="overflow-hidden rounded-lg">
                            <img
                                :src="'http://localhost:8000/post/' + p.picture"
                                alt=""
                                class="rounded-lg w-full object-contain cursor-pointer transform duration-300 hover:scale-110 "
                            />
                        </div>
                    </div>
                    <div>
                        {{ p.desc }}
                    </div>
                </div>
                <div class="mt-2" v-if="p.status == 'job'">
                    <button class="btn-primary w-32 rounded-full ">
                        Apply
                    </button>
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
