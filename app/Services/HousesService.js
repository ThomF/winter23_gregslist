import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { saveState } from "../Utils/Store.js"

class HousesService {
    deleteCar(houseId){
        let houseIndex = appState.houses.findIndex(c => c.id == houseId)

        if (houseIndex == -1){
            throw new Error('stop cheating')
        }

        appState.houses.splice(houseIndex, 1)
        saveState('houses', appState.houses)
        appState.emit('houses')
    }

    setActiveHouse(houseId) {
        const house = appState.houses.find(c => c.id == houseId)
        if(!house){
            throw new Error("erm what the spruce there be ye no ye house ye");
        }
        appState.house = house
    }

    createHouse(formData){
        let house = new House(formData)

        appState.houses.push(house)
        appState.emit('houses')
        saveState('houses', appState.houses)
    }



}

// singleton pattern more on this later
export const housesService = new HousesService()