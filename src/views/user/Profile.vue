<template>
    <div class="p-3">
        <div class="flex flex-col space-y-5 text-gray-500">
            <div class="flex space-x-3">
                <div class="w-6/12">
                    <div>Username</div>
                    <input
                        type="text"
                        class="form-control"
                        v-model="userData.userename"
                    />
                </div>
                <div class="w-6/12">
                    <div>Email</div>
                    <input
                        type="email"
                        class="form-control"
                        v-model="userData.email"
                    />
                </div>
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
                <div>Password</div>
                <input
                    type="password"
                    class="form-control"
                    v-model="userData.password"
                />
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
            <button class="btn-primary ml-auto w-32 rounded-full">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userData: {
                username: "",
                email: "",
                password: "",
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
            let userId = JSON.parse(localStorage.getItem("TweetJobs_UserId"));

            fetch(`${this.$apiURL}/user_information/${userId}`, {
                method: "get",
            })
                .then((res) => res.json())
                .then((data) => {
                    for (let key in this.userData) {
                        this.userData[key] = data[key];
                    }
                });
        },
    },
};
</script>

<style></style>
