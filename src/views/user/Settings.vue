<template>
    <div>
        <div class="p-3 border-b flex justify-between w-full">
            <div class="font-bold text-2xl text-blue-500">Settings</div>
        </div>
        <div class="p-3">
            <div class="flex flex-col space-y-5 text-gray-500">
                <div class="">
                    <div>Username</div>
                    <input
                        type="text"
                        class="form-control"
                        v-model="userData.username"
                    />
                </div>
                <div class="flex space-x-3">
                    <div class="w-6/12">
                        <div>Entry year</div>
                        <input
                            type="number"
                            class="form-control"
                            v-model="userData.entry_year"
                        />
                    </div>
                    <div class="w-6/12">
                        <div>Graduation year</div>
                        <input
                            type="number"
                            class="form-control"
                            v-model="userData.graduation_year"
                        />
                    </div>
                </div>
                <div class="flex space-x-3">
                    <div class="w-6/12">
                        <div>Major</div>
                        <input
                            type="text"
                            class="form-control"
                            v-model="userData.major"
                        />
                    </div>
                    <div class="w-6/12">
                        <div class="text-gray-500">Date of birth</div>
                        <input
                            type="date"
                            class="form-control"
                            v-model="userData.date_of_birth"
                        />
                    </div>
                </div>
                <div class="flex space-x-3">
                    <div class="w-6/12">
                        <div>Job</div>
                        <input
                            type="text"
                            class="form-control"
                            v-model="userData.job"
                        />
                    </div>

                    <div class="w-6/12">
                        <div>Phone number</div>
                        <input
                            type="number"
                            class="form-control"
                            v-model="userData.phone_number"
                        />
                    </div>
                </div>
                <div class="">
                    <div>Address</div>
                    <textarea
                        cols="50"
                        rows="5"
                        class="form-control"
                        v-model="userData.address"
                    ></textarea>
                </div>
            </div>

            <div class="mt-5 flex">
                <button
                    class="btn-primary ml-auto w-32 rounded-full"
                    @click="updateUserData()"
                >
                    Save
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userData: {
                username: "",
                entry_year: "",
                graduation_year: "",
                major: "",
                date_of_birth: "",
                address: "",
                phone_number: "",
                job: "",
            },
        };
    },
    mounted() {
        this.getUserData();
    },
    methods: {
        getUserData() {
            fetch(`${this.$apiURL}/user_information/${this.$userId}`, {
                method: "get",
            })
                .then((res) => res.json())
                .then((data) => {
                    for (let key in this.userData) {
                        this.userData[key] = data[key];
                    }
                });
        },

        updateUserData() {
            const fd = new FormData();

            for (let key in this.userData) {
                if (this.userData[key] != null) {
                    fd.append(key, this.userData[key]);
                }
            }

            fd.append("_method", "put");

            fetch(`${this.$apiURL}/user/${this.$userId}`, {
                method: "post",
                body: fd,
            })
                .then((res) => res.json())
                .then((data) => console.log(data));
        },
    },
};
</script>

<style></style>
