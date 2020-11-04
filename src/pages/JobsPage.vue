<template>
  <div class="jobs-page container-fluid">
    <h1>Jobs</h1>
    <!-- Button trigger modal -->
    <button type="button"
    class="btn btn-primary"
    data-toggle="modal"
    data-target="#jobModal">
      Post
    </button>
    <hr>
    <!-- Modal -->
    <div class="modal fade" id="jobModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Post A Job</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
                <form class="form-group" @submit.prevent="createJob">
                  <input type="text"
                        class="form-control"
                        aria-describedby="helpId"
                        placeholder="Job Title"
                        v-model="state.newJob.jobTitle"
                  >
                  <input type="text"
                        class="form-control"
                        aria-describedby="helpId"
                        placeholder="Company Name"
                        v-model="state.newJob.company"
                  >
                  <input type="text"
                        class="form-control"
                        aria-describedby="helpId"
                        placeholder="Description"
                        v-model="state.newJob.description"
                  >
                  <input type="text"
                        class="form-control"
                        aria-describedby="helpId"
                        placeholder="Rate"
                        v-model="state.newJob.rate"
                  >
                  <input type="number"
                        class="form-control"
                        aria-describedby="helpId"
                        placeholder="Hours"
                        v-model="state.newJob.hours"
                  >
                  <button type="submit" class="btn btn-info btn-block">
                    Create Job
                  </button>
                </form>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-around">
      <job-component v-for="job in jobs" :key="job._id" :job-prop="job" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { jobService } from '../services/JobService'
import JobComponent from '../components/JobComponent'
import { AppState } from '../AppState'

export default {
  name: 'JobsPage',
  setup() {
    const state = reactive({
      newJob: {}
    })
    onMounted(() => {
      jobService.getJobs()
    })
    return {
      state,
      jobs: computed(() => AppState.jobs),
      createJob() {
        jobService.createJob()
      }
    }
  },
  components: {
    JobComponent
  }
}
</script>

<style lang="scss" scoped>

  input, button {
    margin-top: .5em;
  }

  hr {
    margin-top: 1em;
    margin-bottom: 1em;
  }

</style>
