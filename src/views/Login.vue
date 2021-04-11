<template>
    <div
        class="w-full select-none h-screen bg-gray-100 flex items-center justify-center"
    >
        <div class="p-10 bg-white w-5/12">
            <div class="font-semibold text-3xl">
                Login to <span class="font-bold text-blue-500">mars</span>
            </div>
            <div class="text-sm text-gray-500 mt-2">
                Manage your jobs management smartly
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
                <div>
                    <input
                        type="password"
                        placeholder="password"
                        class="form-control"
                        v-model="data.password"
                    />
                </div>
            </div>
            <div class="flex justify-between mb-10 mt-4 text-gray-500 text-sm">
                <div class="flex items-center space-x-2">
                    <input type="checkbox" id="remember" />
                    <label for="remember" class="cursor-pointer"
                        >Remember</label
                    >
                </div>
                <router-link to="/data">Forgot Password ?</router-link>
            </div>
            <div class="flex space-x-5">
                <button class="btn-outline-primary w-1/2">Register</button>
                <button class="btn-primary w-1/2" @click="signIn()">
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
            data: {
                email: "",
                password: "",
            },
        };
    },
    methods: {
        signIn() {
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
                        this.$router.push("/tweet/home");
                    }
                });
        },
    },
};
</script>

<style></style>
