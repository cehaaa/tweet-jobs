<template>

    <div>

        <div class="p-3 border-b flex justify-between w-full">  
            <div class="font-bold text-lg">Beranda</div>
            <div></div>
        </div>

        <div class="p-3 w-full border-b">  
            <div class="w-10">

            </div>
            <textarea name="post" id="post" class="w-full text-gray-500 focus:outline-none" cols="30" rows="3" placeholder="Apa yang sedang terjadi"></textarea>
            <div class="flex justify-between mt-4">
                <div class="flex space-x-10">
                    <div class="relative overflow-hidden">                                    
                        <input class="cursor-pointer absolute opacity-0" type="file">
                        <img src="@/assets/image-outline.svg" alt="" class="h-6 w-6 cursor-pointer">
                    </div>    
                    <div>
                        <select name="" id="" class="focus:outline-none">
                            <option value="Aktifitas">Aktifitas</option>
                            <option value="Lowongan Kerja">Lowongan Kerja</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button class="btn-primary w-32 rounded-full">Post</button>
                </div>
            </div>
        </div>


        <div class="w-full">
            <mars-post></mars-post>
        </div>

    </div>

</template>

<script>
export default {
    components : {
        'mars-post' : ()=> import('@/components/Post.vue')
    }
}
</script>

<style>

</style>