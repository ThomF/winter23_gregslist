import { appState } from "../AppState.js"
import { Job } from "../Models/Job.js"
import { saveState } from "../Utils/Store.js"


class JobsService {

    deleteJob(jobId){
        let jobIndex = appState.jobs.findIndex(c => c.id == jobId)

        if(jobIndex == -1){
            throw new Error ('How did we get here?')
        }

        appState.jobs.splice(jobIndex, 1)
        saveState('jobs', appState.jobs)
        appState.emit('emit')

    }

    setActiveJob(jobId){
        const job = appState.jobs.find(c => c.id == jobId)
        if(!job){
            throw new Error("gosh be jolly")
        }
        appState.job = job
    }

    createJob(formData){
        let job = new Job(formData)
        appState.emit('jobs')
        saveState('jobs', appState.jobs)

    }

}
export const jobsService = new JobsService()