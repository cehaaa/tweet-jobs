<template>
  <div>
    <div class="px-5 py-3 border-b flex space-x-5 items-center w-full">
      <router-link to="home">
        <img src="@/assets/left-arrow.png" alt="" class="w-8" />
      </router-link>
      <div>
        <div class="font-semibold text-base" v-if="userProfile.username">
          {{ userProfile.username }}
        </div>
        <div v-else>
          Username
        </div>
        <div class="text-gray-500 text-xs">{{ sumOfPost || 0 }} Tweets</div>
      </div>
    </div>
    <div>
      <div class="bg-blue-500 h-40"></div>
      <div class="-mt-14 px-5">
        <img
          v-if="userProfile.profile_img"
          :src="'http://localhost:8000/profile/' + userProfile.profile_img"
          class="h-32 w-32 border-2 rounded-full object-cover"
        />
        <div v-else class="h-32 w-32 border-2 rounded-full bg-gray-500"></div>
        <div class="flex justify-between">
          <div v-if="userProfile.username">
            <div class="text-2xl font-semibold mt-1">
              {{ userProfile.username }}
            </div>
            <div class="text-gray-500 lowercase">
              @{{ userProfile.username }}
            </div>
          </div>
          <div v-else>
            <div class="text-2xl font-semibold mt-1">
              Username
            </div>
            <div class="text-gray-500 lowercase">
              @Username
            </div>
          </div>
          <div>
            <router-link
              to="/tweet/settings"
              class="btn-outline-primary rounded-full"
            >
              Edit profile
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="px-5 py-2 border-b pb-10">
      <div v-if="userProfile.job">Work as {{ userProfile.job }} 💖</div>
      <div v-else>update your profile</div>
    </div>
    <div class="px-5 pt-5">
      <div class="flex flex-col space-y-3">
        <div v-for="post in userProfile.post" :key="post.id" class="border-b">
          <div class="flex space-x-5 pb-1">
            <img
              :src="'http://localhost:8000/profile/' + userProfile.profile_img"
              class="h-12 w-12 rounded-full object-cover"
              alt=""
            />
            <div>
              <div class="flex space-x-2 items-center">
                <div class="font-semibold">
                  {{ userProfile.username }}
                </div>
                <div class="text-gray-500 text-sm">
                  @{{ userProfile.username }}
                </div>
              </div>
              <div class="mt-2 mb-5">{{ post.desc }}</div>
              <div class="overflow-hidden rounded-lg">
                <img
                  :src="'http://localhost:8000/post/' + post.picture"
                  alt=""
                  class="rounded-lg w-full  object-cover cursor-pointer transform duration-300 hover:scale-110"
                />
              </div>
              <div v-if="post.status == 'job'" class="mt-5">
                <button class="btn-primary rounded-full w-32">
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div class="mb-3 flex flex-row-reverse">
            <button class="btn-danger-sm" @click="deletePost(post)">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  data() {
    return {
      userProfile: "",
      sumOfPost: "",
      isAdd: false,
      userDesc: "",
    };
  },
  mounted() {
    this.getUserProfile();
  },
  methods: {
    getUserProfile() {
      fetch(`${this.$apiURL}/user/post/${this.$userId}`, {
        method: "get",
      })
        .then((res) => res.json())
        .then((data) => {
          this.userProfile = data;

          this.sumOfPost = data.post.length;
        });
    },
    storeAboutMe() {
      localStorage.setItem(
        "TweetJobs_User_AboutMe",
        JSON.stringify(this.userDesc)
      );

      this.isAdd = !this.isAdd;
    },
    deletePost(props) {
      fetch(`${this.$apiURL}/post/${props.id}`, {
        method: "delete",
      }).then((res) => {
        Vue.$toast.open({
          message: "Post deleted ✨",
          type: "success",
          position: "top-right",
        });
        this.getUserProfile();
      });
    },
  },
};
</script>

<style></style>
