<template>
  <div class="row my-5">
        
    <div class="">

        <div class="row">
            <h1 class="text-white display-1 fw-bold">Creative Team projects and Personal Projects</h1><br>
            <p class="text-light mb-lg-5">This is my team project working with Senior students and my personal creative projects. <br> There will be upcoming projects in the future and I will update every of them so stay TUNED !</p>
        </div>
        
        <div class="project d-lg-flex align-items-lg-center justify-content-lg-between align-items-md-start row mt-lg-5">
            <div class="profile-pic col-md-7 col-lg-6">
                <img class="w-100 col-sm-8 mt-sm-5 mb-sm-5 rounded" src="../assets/imgs/4.jpg" alt="">
            </div>
            <div class="profile-text col-lg-5 col-md-5">
                <div class="profile-text-group w-75">

                    <span class="text-white-50">#projects</span>
                    <h2 class="text-white display-6 text-lg fw-bold">Hapi Kitchen</h2>
                    <p class="text-white my-4 lh-lg">
                        This is a recipe website which are mainly targeted for who can't cook in Japan. <br>
                        This project is personal project which was exhitbited at a school exhibition.
                    </p>
                    <div class="profile-footer d-flex align-items-center">
                        <!-- <a href="#" target="_blank" class="btn border border-primary text-white px-4 py-2 more-infos-btn">More infos</a> -->
                        <router-link to="/notfound" class="btn border border-primary text-white px-4 py-2 more-infos-btn">More infos</router-link>

                        <i class="fa-brands fa-js text-warning ms-4 fs-4"></i>
                        <i class="fa-brands fa-vuejs text-success ms-4 fs-4"></i>
                        <i class="fa-brands fa-bootstrap text-info ms-4 fs-4"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-5">

        <div class="project d-lg-flex align-items-lg-center justify-content-lg-evenly align-items-md-start row">
            <div class="profile-text col-lg-6 col-md-5">
                <div class="profile-text-group w-75">

                    <span class="text-white-50">#projects</span>
                    <h2 class="text-white display-6 text-lg fw-bold">AIMA</h2>
                    <p class="text-white my-4 lh-lg">
                        This is a dating app which are mainly targeted for who are finding thier lovers. <br>
                        This project is team project which was exhitbited at a school exhibition.
                    </p>
                    <div class="profile-footer d-flex align-items-center">
                       <a href="https://demonic29.github.io/AIMA/" target="_blank" class="btn border border-primary text-white px-4 py-2 more-infos-btn">More infos</a>

                        <!-- <router-link to="/work" class="btn border border-primary text-white px-4 py-2 more-infos-btn">More infos</router-link> -->
                        <i class="fa-brands fa-js text-warning ms-4 fs-4"></i>
                    </div>
                </div>
            </div>
            <div class="profile-pic col-md-6 col-lg-5">
                <img class="w-100 col-sm-8 mt-sm-5 mb-sm-5 rounded" src="../assets/imgs/3.png" alt="">
            </div>
        </div>
    </div>

    <div class="project d-lg-flex align-items-lg-center justify-content-lg-between align-items-md-start row mt-lg-5">
      <div class="profile-pic col-md-7 col-lg-6">
          <img class="w-100 col-sm-8 mt-sm-5 mb-sm-5 rounded" src="../assets/imgs/work3.png" alt="">
      </div>
      <div class="profile-text col-lg-5 col-md-5">
          <div class="profile-text-group w-75">

              <span class="text-white-50">#projects</span>
              <h2 class="text-white display-6 text-lg fw-bold">Royal Myanmar Tea</h2>
              <p class="text-white my-4 lh-lg">
                  This is a Burmese Tea website which are mainly targeted for who love to drink Tea. <br>
                  This project is personal project.
              </p>
              <div class="profile-footer d-flex align-items-center">
                  <!-- <router-link to="/work" class="btn border border-primary text-white px-4 py-2 more-infos-btn">More infos</router-link> -->
                  <a href="https://demonic29.github.io/royalmm/" target="_blank" class="btn border border-primary text-white px-4 py-2 more-infos-btn">More infos</a>

                  <i class="fa-brands fa-js text-warning ms-4 fs-4"></i>
                  <!-- <i class="fa-brands fa-vuejs text-success ms-4 fs-4"></i> -->
                  <i class="fa-brands fa-bootstrap text-info ms-4 fs-4"></i>
              </div>
          </div>
      </div>
    </div>

    <div class="container mt-5">

      <div class="project d-lg-flex align-items-lg-center justify-content-lg-evenly align-items-md-start row">
          <div class="profile-text col-lg-6 col-md-5">
              <div class="profile-text-group w-75">

                  <span class="text-white-50">#projects</span>
                  <h2 class="text-white display-6 text-lg fw-bold">Florita App</h2>
                  <p class="text-white my-4 lh-lg">
                      This is a fashion app which are mainly targeted for who are interested in Fashion.
                      This project is team project. 
                  </p>
                  <div class="profile-footer d-flex align-items-center">
                      <!-- <router-link to="/work" class="btn border border-primary text-white px-4 py-2 more-infos-btn">More infos</router-link> -->
                      <a href="https://demonic29.github.io/Floria/" target="_blank" class="btn border border-primary text-white px-4 py-2 more-infos-btn">More infos</a>

                      <i class="fa-brands fa-js text-warning ms-4 fs-4"></i>
                      <i class="fa-brands fa-sass text-info ms-4 fs-4"></i>
                  </div>
              </div>
          </div>
          <div class="profile-pic col-md-6 col-lg-5">
              <img class="w-100 col-sm-8 mt-sm-5 mb-sm-5 rounded" src="../assets/imgs/florita_thumbnail2.png" alt="">
          </div>
      </div>
  </div>
    

</div>
<Footer />
</template>

<script>
    import Footer from './Footer.vue';
    export default {
        name : "MainPage",
        components : {
            Footer
        }
    }

</script>