<template>
  <div class="job-component col-3 bg-light border-rounded shadow m-2 d-flex flex-column">
    <router-link :to="{name: 'ActiveJob' , params: {jobId: jobProp._id}}">
      <h3>
        {{ jobProp.jobTitle }}
      </h3>
      <p>
        {{ jobProp.company }}
      </p>
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
  name: 'JobComponent',
  // why is this in an array?
  props: ['jobProp'],
  setup(props) {
    return {
      setActiveJob() {}
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

  .job-component {
    min-height: 150px;
    text-align: center;

  }
    a{
      margin-top: 30px;
    }

</style>
