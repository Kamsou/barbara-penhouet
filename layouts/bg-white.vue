<template>
  <div class="page">
    <Navbar />
    <Nuxt class="content" />
    <div id="snipcart" data-api-key="MjMyMzQ5Y2EtNTA0Yi00YWQ0LTlkNGEtMTY5MGFhN2ExOTVhNjM3MzMxODY5ODY3OTIyMDk0" hidden></div>
    <script src="https://cdn.snipcart.com/themes/v3.0.19/default/snipcart.js"></script>
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar.vue';
  export default {
    components: {
      Navbar
    },
  }
</script>
<style lang="scss">
$breakpoint-tablet: 1025px;
html {
  font-family:
    'Rubik',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 400;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  display: block;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.content {
  padding-top: 10vh;
  @media (min-width: $breakpoint-tablet) {
    padding-top: 14vw
  }
}

.page {
  background-color: #ffffff;
  color: #EF0311;
  height: 100%;
  @media (max-width: $breakpoint-tablet) {
    width: 100%;
    margin: 0 auto;
  }
}

a {
  text-decoration: none;
  color: #EF0311;
}
#snipcart {
  .snipcart-modal__container {
    .snipcart-layout, .snipcart-layout--large {
      .snipcart-cart-header {
        .snipcart-modal__close svg path {
          fill: #EF0311;
        }
        .snipcart-cart-header__options {
          button svg path {
            fill: #EF0311;
          }
        }
        .snipcart-modal__header-summary {
          .snipcart-modal__header-summary-title {
            svg path {
              fill: #EF0311;
            }
          }
        }
      }
      .snipcart-layout__content {
        section {
          .snipcart-cart__footer {
            .snipcart-cart__footer-col {
              footer button {
                background-color: #EF0311;
                background-image: none;
              }
              .snipcart-cart__featured-payment-methods-container {
                .snipcart-featured-payment-methods {
                  h3 {
                    display: none;
                  }
                }
              }
            }
          }
        }
      }
      div {
        .snipcart-checkout__content {
          .snipcart-layout__cols {
            .snipcart-layout__col {
              div .snipcart-cart-summary footer .snipcart-featured-payment-methods {
                h3 {
                  display: none;
                }
              }
              div .snipcart-cart-summary section .snipcart-cart-summary__actions button {
                color: #EF0311;
              }
              #snipcart-checkout-step-billing {
                form .snipcart__box {
                  .snipcart__box--header .snipcart__box--title {
                    .snipcart__box--badge-highlight {
                      background: #EF0311;
                    }
                  }
                  .snipcart-form__footer {
                    button {
                      background-color: #EF0311;
                      background-image: none;
                    }
                  }
                }
                .snipcart__box {
                  .snipcart__box--header {
                    .snipcart__box--title {
                      .snipcart__box--badge {
                        svg path {
                          fill: #EF0311;
                        }
                      }
                    }
                    a {
                      color: #EF0311;
                    }
                  }
                  .snipcart-checkout-step__cols {
                    .snipcart-checkout-step__col {
                      div svg path {
                        fill: #EF0311;
                      }
                    }
                  }
                }
              }
              #snipcart-checkout-step-payment {
                form .snipcart__box--header .snipcart__box--title div {
                  background: #EF0311;
                }
                form .snipcart-loading-overlay .snipcart-loading-overlay__content .snipcart-payment__form-container {
                  .snipcart-payment-card-form__container .snipcart-loading-overlay .snipcart-loading-overlay__content {
                    .snipcart-form__footer button {
                      background-color: #EF0311;
                      background-image: none;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
