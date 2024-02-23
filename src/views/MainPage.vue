<template>
    <div class="main-page row mt-5">
        <div class="main-text mt-5 col-lg-5 col-sm-12">
            <h1>Hello... <br>
                I am <span class="text-warning fw-bold">AUNG KO HTET</span> 
                and website designer based in Osaka, Japan
            </h1>
            <router-link to="/contact" class="btn border border-primary text-white mt-5 px-4 py-2">Contact Me</router-link>
        </div>
        <div class="main-code col-lg-6">  
            <img class="w-100" src="../assets/imgs/maincode1.png" alt="">
        </div>
    </div>
    <div class="row video">
        <video controls>
            <source src="../assets/imgs/main.mp4" type="video/mp4">
        </video>
    </div>

    <div class="row my-5">
        
        <div class="mt-5">

            <div class="row">
                <h1 class="text-white display-1 fw-bold">Creative Team projects and Personal Projects</h1><br>
                <p class="text-light">This is my team project working with Senior students and my personal creative projects. <br> There will be upcoming projects in the future and I will update every of them so stay TUNED !</p>
            </div>
            
            <div class="project d-lg-flex align-items-lg-center justify-content-lg-between align-items-md-start row mt-lg-5">
                <div class="profile-pic col-md-7 col-lg-6">
                    <img class="w-100 col-sm-8 mt-sm-5 mb-sm-5 rounded" src="../assets/imgs/4.jpg" alt="">
                </div>
                <div class="profile-text col-lg-5 col-md-5">
                    <div class="profile-text-group w-75">
    
                        <span class="text-white-50">#projects</span>
                        <h2 class="text-white display-6 text-lg fw-bold">Recipe Website</h2>
                        <p class="text-white my-4 lh-lg">
                            This is a recipe website which are mainly targeted for who can't cook in Japan. <br>
                            This project is personal project which was exhitbited at a school exhibition.
                        </p>
                        <div class="profile-footer d-flex align-items-center">
                            <router-link to="/work" class="btn border border-primary text-white px-4 py-2 more-infos-btn">More infos</router-link>
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
                        <h2 class="text-white display-6 text-lg fw-bold">Dating App</h2>
                        <p class="text-white my-4 lh-lg">
                            This is a dating app which are mainly targeted for who are finding thier lovers. <br>
                            This project is team project which was exhitbited at a school exhibition.
                        </p>
                        <div class="profile-footer d-flex align-items-center">
                            <router-link to="/work" class="btn border border-primary text-white px-4 py-2 more-infos-btn">More infos</router-link>
                            <i class="fa-brands fa-js text-warning ms-4 fs-4"></i>
                        </div>
                    </div>
                </div>
                <div class="profile-pic col-md-6 col-lg-5">
                    <img class="w-100 col-sm-8 mt-sm-5 mb-sm-5 rounded" src="../assets/imgs/3.png" alt="">
                </div>
            </div>
        </div>

        <div class="more-info d-flex justify-content-center my-5">
            <router-link to="/work" class="btn border border-info text-white px-4 py-2 more-infos-btn">More works</router-link>
        </div>
    </div>

    <div class="container bg-warning rounded mt-5" style="--bs-bg-opacity: .9;">

        <div class="profile  row d-lg-flex justify-content-lg-evenly align-items-lg-center">
            <div class="profile-pic col-md-6 col-lg-5">
                <img class="w-100 col-sm-8 mt-sm-5 mb-sm-5 rounded" src="../assets/imgs/7.jpg" alt="">
            </div>
            <div class="profile-text col-lg-5 col-md-5">
                <div class="profile-text-group w-75">

                    <span class="text-white-50">#aboutMe</span>
                    <h2 class="text-white display-4 text-lg fw-bold">Mingalapar!</h2>
                    <p class="text-dark my-5 lh-lg">
                        I am from Myanmar. I went to Japanese Language school for one year and apply to ECC computer college to achieve my dream which is Full Stack Developer. I can able to speak Burmese , English , Japanese.
                       <!-- <span class="d-sm-none d-md-none d-lg-block"> 私はフルスタックデベロッパーという夢を実現するために、日本語学校に1年間通い、ECCコンピュータカレッジに入学しました。 私はビルマ語、英語、日本語を話すことができます。</span> -->
                    </p>
                    <div class="profile-footer d-flex align-items-center">
                        <router-link to="/about" class="btn text-white px-4 py-2 profile-btn">More me</router-link>
                        <a href="" class="ms-4 fs-4"><i class="fa-brands fa-github text-white"></i></a>
                        <a href="" class="ms-4 fs-4"><i class="fa-brands fa-instagram text-white"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row mt-5">
        <div class="">
            <h1 class="mt-5 display-4 text-white fw-bold">Let's Build Together!</h1>
            <p class="mb-5 text-white-50">ぜひ一緒に仕事をして、素晴らしいアプリを一緒に構築していきたいと思っています。 </p>
            <div class="border border-primary rounded p-5">

                <p class="mb-5 text-white">
                    Ask meanything about me and Im always here !
                </p>

                <div class="mb-5">
                    <label for="exampleFormControlInput1" class="form-label text-white">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label text-white">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="anything about me..." rows="3"></textarea>
                </div>

                <button type="submit" class="btn btn-primary px-5 mt-5">Send</button>
            </div>
        </div>
    </div>

    <Footer/>
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

<style scoped>

    .more-infos-btn{
        transition: all 0.3s ease-in-out;
    }
    .more-infos-btn:hover{
        transform: scale(1.1);
        background-image: linear-gradient(
            to left,
            #00fff7,
            #0051ff 50%,
            #000000 50%
            );
        background-size: 200% 100%;
        background-position: -100%;
        display: inline-block;
        padding: 5px 0;
        position: relative;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.3s ease-in-out;
        
    }

    .profile-btn{
        transition: all 0.3s ease-in-out;
        border: 1px solid white;
    }
    .profile-btn:hover{
        transform: scale(1.1);
        background-image: linear-gradient(
            to left,
            #ff0000,
            #ff00e1 50%,
            #000000 50%
            );
        background-size: 200% 100%;
        background-position: -100%;
        display: inline-block;
        padding: 5px 0;
        position: relative;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.3s ease-in-out;
    }
    .profile i:hover{

        background-image: linear-gradient(
            to left,
            #ff0000,
            #ff00e1 50%,
            #000000 50%
            );
        background-size: 200% 100%;
        background-position: -100%;
        display: inline-block;
        padding: 5px 0;
        position: relative;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: all 0.3s ease-in-out;
    }
    .main-page {
        display: flex;
        justify-content: space-around;
    }
    .main-text{
        color: #FFF;
    }
    .main-text h1{
        line-height: 1.5em;
    }
    .video , .projects{
        margin-top: 100px;
    }
    video {
        border-radius: 10px;
    }
    .profile{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

</style>