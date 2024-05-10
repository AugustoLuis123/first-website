import { digital, shirt, vinyl } from "../assets/images"

const Marketplace = () => {
  return (
    <section id="marketplace" className="relative bg-black py-20 px-10 lg:px-8 lg:pt-24 lg:pb-28">
    <div>
    <h2 className="lg:px-20 text-4xl font-nunito font-bold bg-gradient-to-b from-hero1 to-hero3 bg-clip-text text-transparent">Shop</h2>
    </div>

  <div class="absolute inset-0">
    <div class="h-1/3  sm:h-2/3"></div>
  </div>
  <div class="relative mx-auto max-w-7xl">
    <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">

      <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div class="flex-shrink-0 relative">
          <img class="h-80 w-full object-cover" src={shirt} alt="shirt"/>
        <a class="absolute inset-0  flex items-center justify-center bg-black opacity-0 hover:opacity-50 cursor-pointer">
            <p class="text-hero2 text-2xl font-poppins font-bold">Explore</p>
        </a>
        </div>
        <div class="flex flex-1 flex-col justify-between bg-dark-gray p-6">
          <div class="flex-1">
            <p class="text-xl font-nunito font-bold bg-gradient-to-b from-purple-600 to-fuchsia-800 bg-clip-text text-transparent">
              Buy Clothing
            </p>
            <a class="mt-2 block">
              <p class="mt-3 text-base font-poppins text-justify text-white">
                Get an exclusive merch collection
              </p>
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div class="flex-shrink-0 relative">
            <img class="h-80 w-full object-cover" src={digital} alt="digital"/>
        <a class="absolute inset-0  flex items-center justify-center bg-black opacity-0 hover:opacity-50 cursor-pointer">
            <p class="text-hero2 text-2xl font-poppins font-bold">Explore</p>
        </a>
        </div>
        <div class="flex flex-1 flex-col justify-between bg-dark-gray p-6">
            <div class="flex-1">
                <p class="text-xl font-nunito font-bold bg-gradient-to-b from-purple-600 to-fuchsia-800 bg-clip-text text-transparent">
                    Digital Albums
                </p>
                <a class="mt-2 block">
                    <p class="mt-3 text-base font-poppins text-justify text-white">
                        Purchase digital albums now
                    </p>
                </a>
            </div>
        </div>
    </div>


      <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div class="flex-shrink-0 relative">
          <img class="h-80 w-full object-cover" src={vinyl} alt="vinyl"/>
        <a class="absolute inset-0  flex items-center justify-center bg-black opacity-0 hover:opacity-50 cursor-pointer">
            <p class="text-hero2 text-2xl font-poppins font-bold">Explore</p>
        </a>
        </div>
        <div class="flex flex-1 flex-col justify-between bg-dark-gray p-6">
          <div class="flex-1">
            <p class="text-xl font-nunito font-bold bg-gradient-to-b from-purple-600 to-fuchsia-800 bg-clip-text text-transparent">
              Vinyl / CD
            </p>
            <a class="mt-2 block">
              <p class="mt-3 text-base font-poppins text-justify text-white">
                Grab a copy of his music in its purest form
              </p>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>

    </section>
  )
}

export default Marketplace