<template>
    <div
        class="w-full select-none h-screen bg-gray-100 flex items-center justify-center"
    >
        <div class="p-10 bg-white w-full md:w-8/12 lg:w-4/12 ">
            <div class="font-semibold text-3xl">
                Login to <span class="font-bold text-blue-500">Tweet Jobs</span>
            </div>
            <div class="text-sm text-gray-500 mt-2">
                Find your dream job easy and smartly now!
            </div>
            <div class="flex flex-col space-y-2 mt-10">
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        class="form-control"
                        v-model="data.email"
                    />
                </div>
                <div class="text-sm text-red-500" :class="{ hidden: isValid }">
                    Email must be a valid input!
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="password"
                        class="form-control"
                        v-model="data.password"
                    />
                </div>
                <div class="text-sm text-red-500" :class="{ hidden: isValid }">
                    Password must be a valid input!
                </div>
            </div>
            <div class="flex justify-between mb-5 mt-4 text-gray-500 text-sm">
                <div class="flex items-center space-x-2">
                    <input type="checkbox" id="remember" />
                    <label for="remember" class="cursor-pointer"
                        >Remember</label
                    >
                </div>
                <router-link to="/data">Forgot Password ?</router-link>
            </div>
            <div class="mb-5">
                <div class="text-red-500">{{ warn }}</div>
            </div>
            <div class="flex space-x-5">
                <button
                    class="btn-outline-primary w-1/2"
                    :disabled="isDisabled"
                    @click="signUp()"
                >
                    Register
                </button>
                <button
                    class="btn-primary w-1/2"
                    :disabled="isDisabled"
                    @click="signIn()"
                >
                    Login
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isValid: true,
            isDisabled: false,
            data: {
                email: "",
                password: "",
            },
            warn: "",
        };
    },
    methods: {
        signIn() {
            if (this.inputValidate()) {
                this.isDisabled = true;

                const fd = new FormData();

                for (let key in this.data) {
                    fd.append(key, this.data[key]);
                }

                fetch(this.$apiURL + "/login", {
                    method: "post",
                    body: fd,
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.status === "Login success") {
                            localStorage.setItem(
                                "TweetJobs_UserId",
                                data.user_id
                            );

                            this.$router.push("/tweet/home");
                        } else if (
                            data.status === "Your password or email is invalid!"
                        ) {
                            this.warn = data.status;
                        }
                    });
            } else {
                this.isValid = false;
                this.isDisabled = false;
            }
        },

        signUp() {
            if (this.inputValidate()) {
                this.isDisabled = true;
                const fd = new FormData();

                for (let key in this.data) {
                    fd.append(key, this.data[key]);
                }

                fetch(this.$apiURL + "/user", {
                    method: "post",
                    body: fd,
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.status === "1 Data recorded") {
                            this.$router.push("/tweet/home");
                        }
                    });
            } else {
                this.isValid = false;
                this.isDisabled = false;
            }
        },
        inputValidate() {
            if (this.data.email === "" || this.data.password === "") {
                return false;
            } else return true;
        },
    },
};
</script>

<style></style>
