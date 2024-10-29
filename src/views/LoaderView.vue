<template>

    <div class="mx-auto w-[500px] bg-gray-950 rounded-xl overflow-hidden drop-shadow-xl">
        <div class="bg-[rgb(41,41,41)] flex items-center p-[5px] text-whitec relative">
            <div class="flex absolute left-3">
                <span class="h-3.5 w-3.5 bg-[#f32d2a] rounded-xl mr-2"></span>
                <span class="h-3.5 w-3.5 bg-[#f5e72b] rounded-xl mr-2"></span>
                <span class="h-3.5 w-3.5 bg-[#00b144] rounded-xl"></span>
            </div>
            <div class="flex-1 text-center text-white">Error 404 Not Found</div>
        </div>
        <div class="p-2.5 text-[#c1c2c1]">
            <div>
                <span class="mr-2">Loading</span>
                <span class="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">.</span>
                <span class="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">.</span>
                <span class="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">.</span>
            </div>
        </div>
    </div>

</template>