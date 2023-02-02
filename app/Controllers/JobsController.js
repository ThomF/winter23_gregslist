import { setHTML, setText } from "../Utils/Writer.js"
import { appState } from "../AppState.js"
import { Job } from "../Models/Job.js"
import { jobsService } from "../Services/JobsService.js";
import { Pop } from "../Utils/Pop.js";
import { getFormData } from "../Utils/FormHandler.js"


function _drawJobs(){
  let template = ''
  appState.jobs.forEach(c => template += c.jobCardTemplate);
  setHTML('listings', template)
}

function _drawJob(){
  setText('listingModalLabel', `${appState.job.pay} ${appState.job.number}`)
  setHTML('listingModalLabel', appState.job.jobDetailsTemplate)
}

export class JobsController {

  constructor() {
    console.log('Hello this is the jobs Controller')

    this.show()
    appState.on('jobs', _drawJobs)
    appState.on('job', _drawJob)
  }

  show() {
    
    setText('add-listing-button', 'Bounties Available')
    setText('listingFormLabel', '🪦 Dig up a new Job')
    

    setHTML('the-actual-form', Job.jobForm())
    _drawJobs()
    console.log('ahoy')
  }

    setActiveJob(jobId){
      try{
        jobsService.setActiveJob(jobId)
      }catch(error){
        Pop.error('erm?')
      }
    }


    handleFormSubmit(){
      try{
        event.preventDefault()
        const form = event.target
        const formData = getFormData(form)
  
        jobsService.createJob(formData)
  
        console.log(formData)
        form.reset()
      }catch(error){
        Pop.error(error)
      }
    }


    async deleteJob(jobId){
      try {
        const yes = await Pop.confirm(":(")

        if(!yes){return}

        jobsService.deleteJob(jobId)
      } catch (error) {
        Pop.error(error)
      }
    }




}
