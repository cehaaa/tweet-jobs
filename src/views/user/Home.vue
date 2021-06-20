<template>
  <div>
    <div class="p-3 border-b flex justify-between w-full">
      <div class="font-bold text-2xl text-blue-500">Home</div>
    </div>

    <div class="p-3 w-full border-b">
      <div class="w-10"></div>
      <textarea
        name="post"
        class="w-full text-gray-500 focus:outline-none resize-none"
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
            <select v-model="newPost.status" class="focus:outline-none">
              <option value="tweet">Tweet post</option>
              <option value="job">Job post</option>
            </select>
          </div>
        </div>
        <div>
          <button
            class="btn-primary w-32 rounded-full"
            :class="{ 'cursor-wait': isPost }"
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
import Vue from "vue";

export default {
  components: {
    "tweetJobs-post": () => import("@/components/Post.vue"),
  },
  data() {
    return {
      post: "",
      newPost: {
        desc: "",
        status: "tweet",
        picture: "",
      },
      isPost: false,
    };
  },
  mounted() {
    this.getPost();
  },
  methods: {
    getPost() {
      fetch(this.$apiURL + "/post/all", {
        method: "get",
      })
        .then((res) => res.json())
        .then((data) => {
          this.post = data;
        });
    },

    fileHandler(e) {
      this.newPost.picture = e.target.files[0];
    },

    addPost() {
      this.isPost = !this.isPost;

      const fd = new FormData();

      for (let key in this.newPost) {
        fd.append(key, this.newPost[key]);
      }

      fd.append("user_id", this.$userId);

      fetch(this.$apiURL + "/post", {
        method: "post",
        body: fd,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status == "post uploaded") {
            this.getPost();
            this.isPost = !this.isPost;
          }

          for (let key in this.newPost) {
            this.newPost[key] = "";
          }

          this.newPost.status = "tweet";
        });

      Vue.$toast.open({
        message: "You have added new post ✨",
        type: "success",
        position: "top-right",
      });
    },
  },
};
</script>

<style></style>
