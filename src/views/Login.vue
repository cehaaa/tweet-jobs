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
                        v-model="login.email"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="password"
                        class="form-control"
                        v-model="login.password"
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
                <router-link to="/login">Forgot Password ?</router-link>
            </div>
            <div class="flex space-x-5">
                <button class="btn-outline-primary w-1/2">Register</button>
                <button class="btn-primary w-1/2">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            login: {
                email: "",
                password: "",
            },
        };
    },
};
</script>

<style></style>
