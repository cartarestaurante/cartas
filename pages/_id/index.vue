<template>
    <div>
        <div v-if="restaurantInfo">
            <header class="header">
                <img class="logo" :src="restaurantInfo.logo" :alt="restaurantInfo.name">
            </header>
            <div v-for="category in restaurantInfo.categories" :key="category.name" class="category">
                <div :id="category.name" class="category-title">
                    {{ category.name }}
                </div>
                <div v-for="dish in category.dishes" :key="dish.name" class="dish" :class="{'dish--img': dish.image}">
                    <div v-if="dish.image" class="dish-image">
                        <img :src="dish.image" :alt="dish.name">
                    </div>
                    <div class="dish-title">
                        {{ dish.name }}
                    </div>
                    <div class="dish-ingredients">
                        <template v-for="ingredient in dish.ingredients">
                            <span :key="ingredient.name" class="dish-ingredient">{{ ingredient.name }}</span>
                        </template>
                    </div>
                    <div v-if="Array.isArray(dish.price)" class="dish-sizes">
                        <div v-for="size in dish.price" :key="size.label" class="dish-size">
                            <div class="dish-size-title">
                                {{ size.label }}
                            </div>
                            <div class="dish-size-price">
                                {{ size.value }}{{ restaurantInfo.currency }}
                            </div>
                        </div>
                    </div>
                    <div v-else class="dish-price">
                        {{ dish.price }}{{ restaurantInfo.currency }}
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
        computed: {
            restaurantInfo () {
                return this.$store.state[this.$route.params.id]
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
    grid-template-areas: "title price" "ingredients ingredients" "sizes sizes";
    align-items: start;
    grid-gap: 12px 16px;

    &--img {
      grid-template-columns: 56px 1fr auto;
      grid-template-areas: "image title price" "image ingredients ingredients" "image sizes sizes";
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

</style>
