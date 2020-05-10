<template>
    <div>
        <div v-if="restaurantInfo">
            <header class="header">
                <img class="logo" :src="restaurantInfo.logo" :alt="restaurantInfo.name">
            </header>
            <div class="nav-buttons">
                <button
                    v-if="currentCategory > 0"
                    class="nav-buttons-prev"
                    @click="navigateToPreviousCategory()"
                >
                    {{ restaurantInfo.categories[currentCategory - 1].name }}
                </button>
                <button
                    v-if="currentCategory < restaurantInfo.categories.length - 1 || currentCategory === 0"
                    class="nav-buttons-next"
                    @click="navigateToNextCategory()"
                >
                    {{ restaurantInfo.categories[currentCategory + 1].name }}
                </button>
            </div>
            <div v-for="(category, index) in restaurantInfo.categories" :key="category.name + index" class="category">
                <div :id="category.name.trim().toLowerCase()" class="category-title">
                    {{ category.name }}
                </div>
                <div v-for="(dish, dishIndex) in category.dishes" :key="dish.name + dishIndex" class="dish" :class="{'dish--img': dish.image}">
                    <div v-if="dish.image" class="dish-image">
                        <img :src="dish.image" :alt="dish.name">
                    </div>
                    <div class="dish-title">
                        {{ dish.name }}
                    </div>
                    <div class="dish-ingredients">
                        <template v-for="ingredient in dish.ingredients">
                            <span :key="ingredient" class="dish-ingredient">{{ ingredient }}</span>
                        </template>
                    </div>
                    <div v-if="Array.isArray(dish.price)" class="dish-sizes">
                        <div v-for="size in dish.price" :key="size.label" class="dish-size">
                            <div class="dish-size-title">
                                {{ size.label }}
                            </div>
                            <div class="dish-size-price">
                                {{ size.amount }}{{ restaurantInfo.currency }}
                            </div>
                        </div>
                    </div>
                    <div v-else class="dish-price">
                        {{ dish.price }}{{ restaurantInfo.currency }}
                    </div>
                    <div class="dish-allergens">
                        <template v-for="(value, allergen) in dish.allergens">
                            <img
                                v-if="value"
                                :key="allergen"
                                class="dish-allergen"
                                :src="require(`~/static/${allergen}.png`)"
                                :alt="allergen"
                            >
                        </template>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            Nada
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                currentCategory: 0
            }
        },
        computed: {
            restaurantInfo () {
                return this.mapEntry(this.$store.state[this.$route.params.id])
            }
        },
        methods: {
            mapEntry (restaurant) {
                const groupBy = function (xs, key) {
                    const transform = xs.reduce(function (rv, x) {
                        (rv[x[key]] = rv[x[key]] || []).push(x)
                        return rv
                    }, {})
                    const categories = []
                    for (const cat in transform) {
                        categories.push({
                            name: cat,
                            dishes: transform[cat]
                        })
                    }
                    return categories
                }
                return {
                    name: restaurant.name,
                    logo: restaurant.logo,
                    currency: restaurant.currency,
                    categories: groupBy(restaurant.dishes, 'type')
                }
            },
            navigateToPreviousCategory () {
                this.currentCategory = this.currentCategory - 1
                location.hash = `#${this.restaurantInfo.categories[this.currentCategory].name.trim().toLowerCase()}`
            },
            navigateToNextCategory () {
                this.currentCategory = this.currentCategory + 1
                location.hash = `#${this.restaurantInfo.categories[this.currentCategory].name.trim().toLowerCase()}`
            }
        }
    }
</script>

<style lang="scss">
  .header {
    display: flex;
    justify-content: center;
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .logo {
    max-width: 120px;
  }

  .category {
    padding: 16px;

    &:last-of-type {
      padding-bottom: 66px;
    }
  }

  .category-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  .dish {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;
    grid-template-areas: "title price" "ingredients ingredients" "sizes sizes" "allergens allergens";
    align-items: start;
    grid-gap: 12px 16px;

    &--img {
      grid-template-columns: 56px 1fr auto;
      grid-template-areas: "image title price" "image ingredients ingredients" "image sizes sizes" "allergens allergens allergens";
    }

    & + & {
      border-top: 1px solid #eee;
      margin-top: 16px;
      padding-top: 16px;
    }
  }

  .dish-image {
    grid-area: image;
    position: relative;
    overflow: hidden;
    border-radius: 4px;

    &::before {
      content: "";
      display: block;
      padding-top: 100%;
    }

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .dish-title {
    font-weight: 700;
  }

  .dish-ingredients {
    font-size: 14px;
    font-style: italic;
    grid-area: ingredients;
  }

  .dish-ingredient {
    &:not(:last-child) {
      &::after {
        content: ", ";
      }
    }
  }

  .dish-sizes {
    grid-area: sizes;
  }

  .dish-size {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 16px;
    font-size: 14px;

    & + & {
      margin-top: 4px;
    }

    &-title {
      font-weight: 600;
      font-style: italic;
    }

    &-price {
      font-weight: 700;
    }
  }

  .dish-price {
    font-size: 14px;
    font-weight: 700;
    grid-area: price;
  }

  .dish-allergens {
    display: flex;
    flex-wrap: wrap;
    grid-area: allergens;
    padding-top: 8px;
  }

  .dish-allergen {
    max-width: 24px;
    margin-right: 4px;
  }

  .nav-buttons {
    position: fixed;
    width: 100%;
    z-index: 1;
    background-color: #fff;
    border-top: 2px solid #eee;
    height: 50px;
    bottom: 0;
    user-select: none;
  }

  .nav-buttons-prev {
    display: inline-block;
    width: 50%;
    height: 100%;
    padding-left: 16px;
  }

  .nav-buttons-next {
    display: inline-block;
    height: 100%;
    width: 50%;
    text-align: right;
    padding-right: 16px;
    float: right;
  }

</style>
