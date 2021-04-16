<template>
    <div>
        <div class="p-3 border-b flex justify-between w-full">
            <div class="font-bold text-2xl text-blue-500">Jobs</div>
        </div>
        <div class="w-full">
            <tweetJobs-post :post="post"></tweetJobs-post>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: "",
        };
    },
    components: {
        "tweetJobs-post": () => import("@/components/Post"),
    },
    mounted() {
        this.getPost();
    },
    methods: {
        getPost() {
            fetch(this.$apiURL + "/jobs", {
                method: "get",
            })
                .then((res) => res.json())
                .then((data) => {
                    this.post = data;
                });
        },
    },
};
</script>

<style></style>
