<template>
    <div>
        <div class="p-3 border-b flex justify-between w-full">
            <div class="font-bold text-lg">Home</div>
        </div>

        <div class="p-3 w-full border-b">
            <div class="w-10"></div>
            <textarea
                name="post"
                class="w-full text-gray-500 focus:outline-none"
                cols="30"
                rows="3"
                placeholder="Apa yang sedang terjadi"
                v-model="newPost.desc"
            ></textarea>
            <div class="flex justify-between mt-4">
                <div class="flex space-x-10">
                    <div class="relative overflow-hidden">
                        <input
                            class="cursor-pointer absolute opacity-0"
                            type="file"
                            @change="fileHandler($event)"
                        />
                        <img
                            src="@/assets/image-outline.svg"
                            alt=""
                            class="h-6 w-6 cursor-pointer"
                        />
                    </div>
                    <div>
                        <select
                            class="focus:outline-none"
                            v-model="newPost.status"
                        >
                            <option value="tweet">Tweet</option>
                            <option value="job">Job</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button
                        class="btn-primary w-32 rounded-full"
                        @click="addPost()"
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>

        <div class="w-full">
            <tweetJobs-post :post="post"></tweetJobs-post>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        "tweetJobs-post": () => import("@/components/Post.vue"),
    },
    data() {
        return {
            post: "",
            newPost: {
                desc: "",
                status: "",
                img: "",
            },
        };
    },
    mounted() {
        this.getPost();
    },
    methods: {
        getPost() {
            fetch(this.$apiURL + "/post", {
                method: "get",
            })
                .then((res) => res.json())
                .then((data) => {
                    this.post = data;
                });
        },

        fileHandler(e) {
            this.newPost.img = e.target.files[0];
        },

        addPost() {
            const fd = new FormData();

            for (let key in this.newPost) {
                fd.append(key, this.newPost[key]);
            }

            console.log(this.newPost);
        },
    },
};
</script>

<style></style>
