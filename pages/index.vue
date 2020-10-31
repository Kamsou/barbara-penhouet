<template>
  <div class="page-index">
    <!-- PRELOADER -->
    <!-- <div class="loading-page"></div> -->
    <!-- -->
    <section class="first-bloc-index">
      <div class="image-first-bloc">
        <img src="/images/index/femme-qui-danse.png" alt="femme qui danse"/>
      </div>
      <div class="title-first-bloc">
        <div class="title-placement">
          <div class="index-lign-flex">
            <span>BARBARA</span>
            <span>P.</span>
            <span>STUDIO</span>
          </div>
          <div class="index-lign-flex">
            <span>BIENVENUE</span>
          </div>
        </div>
      </div>
    </section>
    <section class="second-bloc-index">
      <div class="text">Barbara P. est une architecte, artiste-peintre et illustratrice vivant à Paris. Elle est diplômée de l’école supérieure d'architecture de Bretagne et a vécu 6 ans à Berlin avant de revenir en France en 2019. Sa sensibilité multi-supports lui permet d'être porteuse de projets singuliers et ambitieux.
        <br><br>
        Barbara accompagne ses clients dans la construction de leurs identités avec un positionnement esthétique fort, car elle se sert de l'art comme outil de communication.
        <br><br>
        Elle a présenté son travail de peintre lors de son exposition «  Peau de silence » (Berlin, Novembre 2018) qui a lieu à la suite d'une résidence de deux mois à la SIM residency, à Reykjavik, Islande (été 2018).
      </div>
      <div class="img">
        <img src="/images/index/barbara-sur-chaise.png" alt="barbara-sur-chaise" />
      </div>
    </section>
    <section class="three-bloc-index">
      <div class="images">
        <img class="img-01" src="/images/index/peintre.png" alt="peintre">
        <img class="img-02" src="/images/index/corps-nus.png" alt="corps nus">
      </div>
      <div class="titles-three-bloc">
        <div class="titles-placement">
          <div class="index-lign-flex">
            <span>
              <span>2</span>
              <span>0</span>
              <span>1</span>
              <span>8</span>
            </span>
            <span>PEINTURES</span>
          </div>
          <div class="index-lign-flex">
            <span>
              <span>2</span>
              <span>0</span>
              <span>2</span>
              <span>0</span>
            </span>
            <span>PEINTURES</span>
          </div>
          <div class="index-lign-flex">
            <span>
              <span>2</span>
              <span>0</span>
              <span>1</span>
              <span>8</span>
            </span>
            <span>FUSAINS</span>
          </div>
        </div>
      </div>
    </section>
    <!-- <div style="margin-top: 150px; text-align: center">
      <p>Produit 1</p>
      <nuxt-link :to="`/teeshirt/produit1`" style="border: 1px solid #000; width: 20%; margin: 0 auto">
        Acheter
      </nuxt-link>
    </div> -->
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.page-index {
  height: 90vh;
  position: relative;
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: url("/images/preloader.png");
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    transition: all 2s;
    background-color: #fff;
    animation: disappear 2s cubic-bezier(0.895,0.03,0.685,0.22) 1.5s forwards;
  }
  @keyframes disappear{
    0%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
  .first-bloc-index {
    width: 100vw;
    height: 100vh;
    display: flex;
    padding: 0 17vw 0 2.5vw;
    .image-first-bloc {
      width: 30vw;
      position: absolute;
      bottom: 0;
      img {
        width: 60vw;
        position: relative;
        right: 20%;
        top: 2%;
      }
    }
    .title-first-bloc {
      width: 100%;
      font-size: 2.714vw;
      font-weight: bold;
      margin: 7vw auto;
      position: relative;
      .title-placement {
        width: 30vw;
        position: absolute;
        right: 0;
        top: 20%;
        .index-lign-flex {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
  .second-bloc-index {
    display: grid;
    grid-template-areas:
      'text img';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    padding: 10vw 5vw 0 42vw;
    .text {
      grid-area: text;
      width: 23vw;
      margin: 0 auto;
      font-size: 0.972vw;
      text-align: justify;
    }
    .img {
      grid-area: img;
      img {
        width: 22vw;
      }
    }
  }
  .three-bloc-index {
    display: flex;
    padding: 0 17vw 0 2.5vw;
    height: 100vh;
    .images {
      width: 50%;
      position: relative;
      .img-01 {
        width: 36.6vw;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
      }
      .img-02 {
        width: 33.4vw;
        position: absolute;
        top: 12vw;
        left: 8vw;
        z-index: 1;
      }
    }
    .titles-three-bloc {
      width: 50%;
      font-size: 2.639vw;
      font-weight: bold;
      position: relative;
      top: 25vw;
      .titles-placement {
        width: 28.056vw;
        margin: 0 0 0 auto;
        .index-lign-flex {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>