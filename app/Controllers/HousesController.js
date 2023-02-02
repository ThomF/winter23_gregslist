import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { housesService } from "../Services/HousesService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function _drawHouses(){
  let template = ''
  appState.houses.forEach(c => template += c.houseCardTemplate);
  setHTML('listings', template)


}
function _drawHouse(){
  setText('listingModalLabel', `${appState.house.sqft} ${appState.house.price}`)
  setHTML('listingModalLabel', appState.house.houseDetailsTemplate)
}

export class HousesController {


  constructor() {
    console.log('Hello this is the houses Controller')
    this.show()
    appState.on('houses', _drawHouses)
    appState.on('house', _drawHouse)
  }

  show(){
    console.log('')
    setText('add-listing-button', 'New House')
    setHTML('listingFormLabel', 'cheapest foundations here!')

    setHTML('the-actual-form', House.HouseForm)

    _drawHouses()
  }

  setActiveHouse(houseId){
    try {
      housesService.setActiveHouse(houseId)
    } catch (error) {
      Pop.error('error')
    }
  }

  handleFormSubmit(){
    try{
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)

      housesService.createHouse(formData)

      console.log(formData)
      form.reset()
    }catch(error){
      Pop.error(error)
    }
  }

  async deleteHouse(houseId){
    try {
      const yes = await Pop.confirm(" fosho bro? ")
      if (!yes){return}

      housesService.deleteHouse(houseId)
    } catch(error){
      Pop.error(error)
    }
  }

}
