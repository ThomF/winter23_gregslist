import { appState } from "../AppState"
import { saveState } from "../Utils/Store"


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



}
export const jobsService = new JobsService()