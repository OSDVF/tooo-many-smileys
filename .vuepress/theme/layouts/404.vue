<template>
  <section class="theme-container">
    <article class="content">
      <h1 class="glitch" title="Nenalezeleno">Nenale<span class="text-success">zeleno</span></h1>
      <p>Tuto stránku vám smajlíky (PrAvDěpOdOBnĚ) neposkytnou 🙄. Pokud chcete prozkoumat, co jiného umí, podívejte se na <router-link to='/'>🏠 hlavní stránku</router-link>
        V některých vesmírech 🌠 mají tyto chyby různé zajímavé stavové kódy. Naštěstí zde máme zařízení 😺⌨ které vám pomůže zjsitit, co znamenají.
      </p>
      <div class="inputBox">
        <input type="text" class="inputBox" v-model='code' /><button class="btn" @click='submitedCode=code'>Co to znamená?</button>
      </div>
      <img :src='"https://http.cat/"+submitedCode' class='w-100 rounded' />
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      code: "404",
      submitedCode: "404",
    };
  },
};
</script>

<style lang="stylus">
@require '../styles/theme'
@require '../../styles/glitch.css'
</style>
<style lang="stylus">
.content
  margin 4rem auto 0
  max-width 800px
  padding 0 2rem
.mod_404
  .desc
    .desc_link
      display: inline-block
      // margin: 20px 0
      background: #424242!important
      color: #ffffff
      padding: 6px 20px!important
      text-decoration: none!important
      border-radius: 4px

@media screen and (max-width: 720px)
  .mod_404
    .desc
      margin: 50px 0
    .wrapper
      margin 0!important
      padding-top 20px
</style>
<style>
.text-success
{
  color: green
}
input[type="text"].inputBox, button.btn {
  width: 10rem;
  color: #4e6e8e;
  display: inline-block;
  border: 1px solid;
  border-radius: 0.25rem;
  font-size: 0.9rem;
  line-height: 2rem;
  padding: 0 0.5rem 0 0.5rem;
  outline: none;
  transition: all 0.2s ease;
  background-size: 1rem;
  margin-bottom: 1rem;
}
</style>

