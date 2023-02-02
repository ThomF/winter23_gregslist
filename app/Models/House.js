import { generateId } from "../Utils/generateId.js"

export class House { 

    constructor(data) {
        this.id = data.generateId || generateId()
        this.year = data.year
        this.name = data.name
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
    }

    get houseCardTemplate(){
        return /*HTML */`
        <div class="col-md-4 my-3">
        <div class="card elevation-2 car" onclick="app.housesController.setActiveHouse('${this.id}')" data-bs-toggle="modal" data-bs-target="#listingModal">
            <img 
                src="${this.imgUrl}"
                class="rounded">
            <p><b>${this.name} ${this.bedrooms} ${this.price}</b></p>
        </div>
        </div>
        `
    }

    get houseDetailsTemplate(){
        return`
        <div>
            <button class="btn btn-danger" data-bs-dismiss="modal onclick="app.housesController.deleteHouse">DELETE</button>
        </div>
        
        `
    }

    static houseForm(){
        return /*html*/`
    <form onsubmit="app.housesController.handleFormSubmit()">
        <div class="form-floating mb-3">
            <input type="text" class="form-control" name="name" required minlength="3" maxlength="20">
            <label for="homeName">House Name</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" name="bedrooms" required>
            <label for="bedrooms">Bedrooms</label>
        </div>
        <div class="form-floating mb-3">
            <input type="number" class="form-control" name="sqft" required min="1" max="9999">
            <label for="SquareFeet">Square Footage</label>
        </div>
        <div class="form-floating mb-3">
            <input type="number" class="form-control" name="price" required min="0">
            <label for="price">Price</label>
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
