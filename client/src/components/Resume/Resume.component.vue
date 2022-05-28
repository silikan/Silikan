<template>
<button @click="printDocument">download</button>
  <div id="divToPrint" class="mx-20">
<div class=" min-h-screen">
      <div class="bg-white shadow-xl rounded grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-3">
        <!-- Left section -->
        <div class="row-span-1 col-span-1 space-y-4 pt-20 bg-gradient-to-b from-prgreen-600 to-prgreen-600 dark:from-gray-200 dark:to-gray-400">

          <!-- Image and name -->
          <div class="flex flex-col justify-start items-center pb-8">
            <div>
              <img  class="inline-block w-52 h-52 xl:h-72 xl:w-72 rounded-full ring-2 ring-white object-cover mb-4"  src="https://i.pravatar.cc/300?img=68" alt="me">
            </div>
            <div>
              <h1 class="text-white text-3xl font-semibold mb-2">Amzil Houdaifa</h1>
            </div>
            <div>
              <h2 class="text-white">Junior full stack developer</h2>
            </div>
          </div>


          <!-- Contact -->
          <div class="flex flex-col text-white justify-center items-center lg:items-start lg:justify-start  pl-8 md:pl-2 xl:pl-12 space-y-4">
            <div><h1 class="text-2xl font-semibold">Contact</h1></div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fas fa-envelope text-lg"></i></div>
              <div><h4 class="sm:text-base 2xl:text-xl text-white lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">houdaifaamzil@gmail.com</h4></div>
            </div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fas fa-phone-alt text-lg"></i></div>
              <div><h4 class="sm:text-base 2xl:text-xl text-white lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">+212 634 69 98 99</h4></div>
            </div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fas fa-home text-lg"></i></div>
              <div><h4 class="sm:text-base 2xl:text-xl text-white lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">Khawa dini n Bni makada NR 53</h4></div>
            </div>
          </div>


          <!-- Personal -->
          <div class="flex flex-col text-white justify-center items-center lg:items-start lg:justify-start pl-8 md:pl-2 xl:pl-12 pt-8 space-y-4">
            <div><h1 class="text-2xl font-semibold">Personal</h1></div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fas fa-baby text-lg"></i></div>
              <div><h4 class="sm:text-base 2xl:text-xl text-white lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">Born on 20th of June 1998</h4></div>
            </div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fas fa-male text-lg"></i></div>
              <div><h4 class="sm:text-base 2xl:text-xl text-white lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">Single</h4></div>
            </div>
          </div>

          <!-- Web -->
          <div class="flex flex-col text-white justify-center items-center pl-8 md:pl-2 lg:items-start lg:justify-start xl:pl-12 pt-8 space-y-4">
            <div><h1 class="text-2xl font-semibold">Web</h1></div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fab fa-twitter text-lg"></i></div>
              <div><a href="https://twitter.com/H_amzil14" target="_blank" class="sm:text-base 2xl:text-xl hover:text-turquoise text-white lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">Twitter</a></div>
            </div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fab fa-linkedin text-lg"></i></div>
              <div><a href="https://www.linkedin.com/in/houdaifa-amzil-a4b275158/" target="_blank" class="sm:text-base 2xl:text-xl hover:text-turquoise text-white lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">LinkedIn</a></div>
            </div>
            <div class="flex justify-around items-center space-x-4">
              <div><i class="fab fa-github text-lg"></i></div>
              <div><a href="https://github.com/Houdaifi" target="_blank" class="sm:text-base 2xl:text-xl hover:text-turquoise text-white lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">Github</a></div>
            </div>
          </div>

          <!-- Languages -->
          <div class="flex flex-col text-white justify-center items-center pl-8 lg:items-start lg:justify-start md:pl-2 xl:pl-12 py-4">
            <div><h1 class="text-2xl font-semibold mb-4">Languages</h1></div>
            <div class="flex mb-3">
              <div><h2 class="sm:text-base 2xl:text-xl font-semibold lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">Arabic :</h2></div>
              <div class="text-white lg:text-lg ml-2">Native</div>
            </div>
            <div class="flex mb-3">
              <div><h2 class="sm:text-base 2xl:text-xl font-semibold lg:leading-loose sm:leading-relaxed sm:tracking-relaxed">English :</h2></div>
              <div class="text-white lg:text-lg ml-2">C1</div>
            </div>
          </div>

        </div>

        <!-- Right section -->
        <div class="row-span-1 lg:col-span-2 bg-white dark:bg-gray-700 dark:text-gray-300 flex flex-col p-4 sm:p-12 border-r">

          <!-- Profile -->
          <div class="space-y-4">
            <h1 class="text-3xl border-l-8 mb-8 border-prgreen-200">Profile</h1>
            <p class="sm:text-base 2xl:text-xl text-gray-500 dark:text-gray-300 leading-loose sm:tracking-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus est sed eaque distinctio saepe, commodi, nisi enim aliquam quae labore quidem vitae tempore! Fuga.</p>
            <hr class="border-gray-200">
          </div>

          <!-- Experience -->
          <div class="space-y-4 mt-8">
            <h1 class="text-3xl border-l-8 border-prgreen-200">Experience</h1>

            <div class="flex space-x-8 md:space-x-14 pt-8 sm:pl-4 lg:pl-8 text-gray-500 dark:text-gray-300 text-base lg:text-xl">
              <div>
                <h2 style="max-width:50px;" class="text-sm sm:text-base md:text-xl">2020-</h2>
              </div>
              <div class="border border-gray-400"></div>
              <div>
                <h2 class="text-gray-800 dark:text-gray-300">Junior Full Stack Developer</h2>
                <h2 class="text-gray-600 dark:text-gray-400">Company name</h2>
              </div>
            </div>
            <div class="flex space-x-8 md:space-x-14 pt-8 sm:pl-4 lg:pl-8 text-gray-500 dark:text-gray-300 text-base lg:text-xl">
              <div>
                <h2 style="max-width:50px;" class="text-sm sm:text-base md:text-xl">2018-2020
</h2>
              </div>
              <div class="border border-gray-400"></div>
              <div>
                <h2 class="text-gray-800 dark:text-gray-300">Job</h2>
                <h2 class="text-gray-600 dark:text-gray-400">Company name</h2>
              </div>
            </div>
            <hr class="border-gray-200">
          </div>

          <!-- Formation -->
          <div class="space-y-4 mt-8">
            <h1 class="text-3xl border-l-8 border-prgreen-200">Formation</h1>

            <div class="flex space-x-8 md:space-x-14 pt-8 sm:pl-4 lg:pl-8 text-gray-500 dark:text-gray-300 text-base lg:text-xl">
              <div class="flex space-x-4">
                <h2 style="max-width:50px;" class="text-sm sm:text-base md:text-xl dark:text-gray-300">2020-2021</h2>
              </div>
              <div class="border border-gray-400"></div>
              <div>
                <h2 class="text-gray-800 dark:text-gray-300">Formation name</h2>
                <h2 class="text-gray-600 dark:text-gray-400">University</h2>
              </div>
            </div>

            <div class="flex space-x-8 md:space-x-14 pt-8 sm:pl-4 lg:pl-8 text-gray-500 dark:text-gray-300 text-base lg:text-xl">
              <div class="flex space-x-4">
                <h2 style="max-width:50px;" class="text-sm sm:text-base md:text-xl dark:text-gray-300">2020-2021</h2>
              </div>
              <div class="border border-gray-400"></div>
              <div>
                <h2 class="text-gray-800 dark:text-gray-300">Formation name</h2>
                <h2 class="text-gray-600 dark:text-gray-400">University</h2>
              </div>
            </div>
            <hr class="border-gray-200">
          </div>

          <!-- Projects -->
          <div class="space-y-4 mt-8">
            <h1 class="text-3xl border-l-8 border-prgreen-200">Skills</h1>

            <div class="relative pt-8">
              <div class="flex justify-start space-x-12 mb-4 items-center">
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-gray-300">Javascript</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:70%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-prgreen-200"></div>
                  </div>
                </div>
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-gray-300">Vue JS</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:80%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-prgreen-200"></div>
                  </div>
                </div>
              </div>

              <div class="flex justify-start space-x-12 mb-4 items-center">
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-gray-300">Tailwind CSS</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:90%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-prgreen-200"></div>
                  </div>
                </div>
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-gray-300">Bootstrap</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:80%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-prgreen-200"></div>
                  </div>
                </div>
              </div>

              <div class="flex justify-start space-x-12 mb-4 items-center">
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-gray-300">Laravel</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:65%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-prgreen-200"></div>
                  </div>
                </div>
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-gray-300">MySQL</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:85%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-prgreen-200"></div>
                  </div>
                </div>
              </div>

              <div class="flex justify-start space-x-12 mb-4 items-center">
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-gray-300">Android Developement</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:60%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-prgreen-200"></div>
                  </div>
                </div>
                <div class="flex-1">
                  <h2 class="text-gray-800 text-sm sm:text-base md:text-xl mb-2 dark:text-gray-300">Flutter</h2>
                  <div class="overflow-hidden h-2 mb-4 text-xs  flex space-x-44 rounded bg-gray-200">
                    <div style="width:50%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-prgreen-200"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
  </div>
  </div>
</template>

<script>
//importing bootstrap 5 and pdf maker Modules
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf";

export default {
  methods: {

  },

  setup() {
const     printDocument = () => {
    var w = document.getElementById("divToPrint").offsetWidth;
  var h = document.getElementById("divToPrint").offsetHeight;
      html2canvas(document.querySelector("#divToPrint") , {useCORS: true ,dpi: 300,    scale: 3 }).then(canvas => {
        var imgData = canvas.toDataURL("image/png")
        var pdf = new jsPDF("p", "mm", [w, h]);
        pdf.addImage(imgData, "PNG", 0, 0, w, h);
        pdf.save("resume.pdf");




      });
    }
    return {
      printDocument
    };
  },
};
</script>


<style lang="scss" scoped>



</style>
