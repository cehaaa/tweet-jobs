<template>
    <div>
        <div class="p-3 border-b flex justify-between w-full">
            <div class="font-bold text-2xl text-blue-500">Settings</div>
        </div>
        <div class="p-3 flex flex-col space-y-5">
            <div class="">
                <div>Username</div>
                <input
                    type="text"
                    class="form-control mt-2"
                    v-model="userData.username"
                    :readonly="isEdit"
                />
            </div>
            <div class="flex space-x-3">
                <div class="w-6/12">
                    <div>Entry year</div>
                    <input
                        type="number"
                        class="form-control mt-2"
                        v-model="userData.entry_year"
                        :readonly="isEdit"
                    />
                </div>
                <div class="w-6/12">
                    <div>Graduation year</div>
                    <input
                        type="number"
                        class="form-control mt-2"
                        v-model="userData.graduation_year"
                        :readonly="isEdit"
                    />
                </div>
            </div>
            <div class="flex space-x-3">
                <div class="w-6/12">
                    <div>Major</div>
                    <input
                        type="text"
                        class="form-control mt-2"
                        v-model="userData.major"
                        :readonly="isEdit"
                    />
                </div>
                <div class="w-6/12">
                    <div>Date of birth</div>
                    <input
                        type="date"
                        class="form-control mt-2"
                        v-model="userData.date_of_birth"
                        :readonly="isEdit"
                    />
                </div>
            </div>
            <div class="flex space-x-3">
                <div class="w-6/12">
                    <div>Job</div>
                    <input
                        type="text"
                        class="form-control mt-2"
                        v-model="userData.job"
                        :readonly="isEdit"
                    />
                </div>

                <div class="w-6/12">
                    <div>Phone number</div>
                    <input
                        type="number"
                        class="form-control mt-2"
                        v-model="userData.phone_number"
                        :readonly="isEdit"
                    />
                </div>
            </div>
            <div class="">
                <div>Address</div>
                <textarea
                    cols="50"
                    rows="5"
                    class="form-control mt-2"
                    v-model="userData.address"
                    :readonly="isEdit"
                ></textarea>
            </div>
            <div class="mt-5 flex space-x-5">
                <button
                    class="btn-outline-primary  w-32 rounded-full"
                    @click="edit()"
                    :class="{ hidden: !isEdit }"
                >
                    Edit
                </button>

                <button
                    class="btn-primary  w-32 rounded-full"
                    @click="updateUserData()"
                    :class="{ hidden: isEdit }"
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
            isEdit: true,
        };
    },
    mounted() {
        this.getUserData();
    },
    methods: {
        edit() {
            this.isEdit = !this.isEdit;
        },

        getUserData() {
            fetch(`${this.$apiURL}/user/detail/${this.$userId}`, {
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
                .then((data) => {
                    if (data.status == "1 Data updated") {
                        this.edit();
                    }
                });
        },
    },
};
</script>

<style></style>
