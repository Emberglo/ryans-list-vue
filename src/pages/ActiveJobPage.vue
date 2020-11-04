<template>
  <div class="active-job col-6 offset-3 mt-5 card text-center">
    <h2> {{job.title}} </h2>
    <h4> {{job.company}} </h4>
    <p> {{job.rate}} {{job.hours}} </p>
    <p> {{job.description}} </p>
    <button class="btn btn-danger mb-3" @click="removeJob">
      Delete
    </button>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { jobService } from '../services/JobService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'

export default {
  name: 'ActiveCar',
  setup() {
    const route = useRoute()
    onMounted(() => {
      jobService.getActiveJob(route.params.jobId)
    })
    return {
      job: computed(() => AppState.activeJob),
      removeJob() {
        jobService.removeJob(route.params.jobId)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
  // .active-job{
  //   min-height: 50vh;
  // }
</style>
