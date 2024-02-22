<template>
    <div class="row">
        <div class="container">
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
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <button type="submit" class="btn btn-primary px-5 mt-5">Send</button>
            </div>
        </div>
    </div>
    <Footer/>
</template>

<style>
    .isolate{
        color: #FFF;
    }
</style>

<script>
    import Footer from './Footer.vue';
    export default {
        name : "MainPage",
        components : {
            Footer
        }
    }

</script>