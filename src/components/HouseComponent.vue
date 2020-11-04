<template>
  <div class="house-component col-3 bg-light border-rounded shadow m-2 d-flex flex-column">
    <router-link :to="{name: 'ActiveHouse' , params: {houseId: houseProp._id}}">
      <img :src="
            houseProp.imgUrl"
           alt="house Img"
           class="img-fluid"
      >
    </router-link>

    <!-- <img :src="carProp.imgUrl"
         alt="car Img"
         class="img-fluid"
         @click="setActiveCar"
    > -->
  </div>
</template>

<script>
export default {
  name: 'HouseComponent',
  // why is this in an array?
  props: ['houseProp'],
  setup(props) {
    return {
      setActiveHouse() {}
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
