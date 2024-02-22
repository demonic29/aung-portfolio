<template>
    <div class="about-me">
        <div class="container mt-5">

            <div class="row">
                <h1 class="text-white display-1 fw-bold">Simple things make me happy and motivate.</h1><br>
                <p class="text-light mb-lg-5">I love looking simple and clean website design. <br> That's why I make my own portfolio being simple and clean.</p>
            </div>

            <div class="profile row">
                <div class="profile-pic col-md-6 col-lg-5">
                    <img class="w-100 col-sm-8 mt-sm-5 mb-sm-5 rounded" src="../assets/imgs/me.jpg" alt="">
                </div>
                <div class="profile-text col-lg-6 col-md-5">
                    <span class="text-white-50">#aboutMe</span>
                    <h2 class="text-white display-4 text-lg fw-bold">Mingalapar!</h2>
                    <p class="text-white my-5 lh-lg">
                        私はミャンマー出身です。 私はフルスタックデベロッパーという夢を実現するために、日本語学校に1年間通い、ECCコンピュータカレッジに入学しました。 私はビルマ語、英語、日本語を話すことができます。
                    </p>
                </div>
            </div>
        </div>
    
        <div class="container mt-5">
    
            <div class="profile row">
                <div class="profile-text col-lg-6 col-md-5">
                    <!-- <span class="text-white-50">#aboutMe</span> -->
                    <h2 class="text-white display-4 text-lg fw-bold">BACKGROUND</h2>
                    <p class="text-white my-5 lh-lg">
                        私はミャンマーにいたときに地質学を3年間、日本語を2年間勉強しました。 コロナウイルスの流行中、オンラインでWeb UIデザインを学びました。
                    </p>
                </div>
                <div class="profile-pic col-md-6 col-lg-5">
                    <img class="w-100 col-sm-8 mt-sm-5 mb-sm-5 rounded" src="../assets/imgs/1.jpg" alt="">
                </div>
            </div>
        </div>
    
        <div class="container mt-5">
    
            <div class="profile row">
                <div class="profile-pic col-md-6 col-lg-5">
                    <img class="w-100 col-sm-8 mt-sm-5 mb-sm-5 rounded" src="../assets/imgs/2.jpg" alt="">
                </div>
                <div class="profile-text col-lg-6 col-md-5">
                    <!-- <span class="text-white-50">#aboutMe</span> -->
                    <h2 class="text-white display-4 text-lg fw-bold">WHY JAPAN?</h2>
                    <p class="text-white my-5 lh-lg">
                        その過程から、自分のウェブサイトを作りたいと思いました。 日本は美しい国でもあり、高い技術を持っています。 だから、小さい頃からずっと日本に行きたいと思っていました。 コロナ後、私は夢を実現するために日本に行くことにしました。
                    </p>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</template>


<style>
.profile{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.about-me {
    letter-spacing: 2px;
}
</style>

<script>
import Footer from './Footer.vue';
export default {
    name : "AboutMe",
    components : {
        Footer
    }
}

</script>