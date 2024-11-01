<template>
  <section class="container mx-auto px-8 py-10">
    <div class="relative flex flex-col bg-clip-border rounded-xl bg-neutral-800 text-slate-400 border border-gray-300 rounded-2xl">
      <div class="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-white text-gray-700 -mt-6 h-60 !rounded-lg">
        <img src="../assets/imgs/wallpaper.jpg" alt="dark" width="1024" height="1024" decoding="async" data-nimg="1" class="w-full h-full object-center" loading="lazy" />
      </div>
      <div class="p-6">
        <div class="flex lg:gap-0 gap-6 flex-wrap justify-between items-center">
          <div class="flex items-center gap-3 pb-4">
            <img src="../assets/imgs/avatar.png" alt="avatar" class="inline-block relative object-cover object-center w-12 h-12 rounded-lg" />
            <div>
              <h6 class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-400">Not Found</h6>
              <p class="block antialiased font-sans text-sm font-light leading-normal text-inherit font-normal text-gray-700">mon.email@gmail.com</p>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-white text-white hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] border-gray-300 flex items-center gap-2" type="button" data-ripple-dark="true"><i class="fa fa-github text-base" aria-hidden="true"></i>Github</button><button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-white text-white hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] border-gray-300 flex items-center gap-2" type="button" data-ripple-dark="true"><i class="fa-brands fa-twitter" aria-hidden="true"></i>Twitter</button><button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-white text-white hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] border-gray-300 flex items-center gap-2" type="button" data-ripple-dark="true"><i class="fa-brands fa-medium" aria-hidden="true"></i>Medium</button>
          </div>
        </div>
        <p class="block antialiased font-sans text-sm font-light leading-normal text-inherit font-normal text-gray-400 mt-6">
          Développeur Front End en apprentissage. <br />
          Je souhaite en faire mon métier, passionner par le développement web, je serais toujours ravi de pouvoir apprendre de nouvelle choses.
        </p>
      </div>
    </div>
  </section>
</template>
