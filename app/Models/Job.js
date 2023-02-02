import { generateId } from "../Utils/generateId.js";


export class Job {

    constructor (data){
        this.name = data.name,
        this.pay = data.pay,
        this.number = data.number,
        this.id = data.generateId || generateId()
        this.imgUrl = data.imgUrl
    }

    get jobCardTemplate(){
        return 
        `
        <div class="col-md-4 my-3">
        <div class="card elevation-2 car" onclick="app.housesController.setActiveHouse('${this.id}')" data-bs-toggle="modal" data-bs-target="#listingModal">
            <img 
                src="${this.imgUrl}"
                class="rounded">
            <p><b>${this.name} $${this.pay} ${this.number}</b></p>
        </div>
        </div>
        `
    }

    get jobDetailsTemplate(){
        return
        `
        <div>
            <button class="btn btn-danger" data-bs-dismiss="modal" onclick="app.housesController.deleteHouse('${this.id}')">DELETE</button>
        </div>
        `
    }

    static jobForm(){
        return /*HTML */
        `
        <form onsubmit="app.jobsController.handleFormSubmit()">
        <div class="form-floating mb-3">
            <input type="text" class="form-control" name="name" required minlength="3" maxlength="20">
            <label for="jobName">Job Name</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" name="bedrooms" required>
            <label for="pay">Pay</label>
        </div>
        <div class="form-floating mb-3">
            <input type="number" class="form-control" name="phone" required min="1">
            <label for="phone">Phone</label>
        </div>
        <div class="form-floating mb-3">
            <input type="url" class="form-control" name="imgUrl">
            <label for="imgUrl">Image Url <i>i dont get paid enough</i></label>
        </div>
        <div class="form-floating">
            <textarea class="form-control" placeholder="Describe your Listing" name="description"></textarea>
            <label for="description">Description</label>
        </div>
        <div class="d-flex my-4 gap-5 align-items-center">
            <button class="btn" type="reset">Cancel</button>
            <button class="btn btn-primary" type="submit" data-bs-dismiss="offcanvas">Submit</button>
        </div>
    </form>
        `

    }



}
