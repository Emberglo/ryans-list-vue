import { api } from './AxiosService'
import { AppState } from '../AppState'
import router from '../router'

class JobService {
  async getJobs() {
    try {
      const res = await api.get('/jobs')
      AppState.jobs = res.data.data
    } catch (error) {
      console.error(error)
    }
  }

  async getActiveJob(jobId) {
    try {
      const res = await api.get('/jobs/' + jobId)
      AppState.activeJob = res.data.data
    } catch (error) {
      console.error(error)
    }
  }

  async removeJob(jobId) {
    try {
      if (window.confirm('Are you sure?')) {
        await api.delete('/jobs/' + jobId)
        router.push({ name: 'Jobs' })
      }
    } catch (error) {
      console.error(error)
    }
  }

  async createJob(jobData) {
    try {
      const res = await api.post('/jobs', jobData)
      router.push({ name: 'ActiveJob', params: { jobId: res.data.data._id } })
    } catch (error) {
      console.error()
    }
  }

  setActiveJob(jobData) {
    try {
      AppState.activeJob = jobData
    } catch (error) {
      console.error(error)
    }
  }
}

export const jobService = new JobService()
