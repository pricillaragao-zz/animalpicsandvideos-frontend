class AnimalsService {
  constructor() {
    this.baseUrl = "http://www.animalpicsandvideos.com/api/v1/animals/"
  }

  async getAnimals() {
    try{
      const response = await fetch(this.baseUrl)
      const data = await response.json()
      return data.map(animal => {
        return {
          id: animal.id,
          imgUrl: animal.img_url,
          species: animal.species
        }
      })
    } catch(error) {
      console.error("getAnimals", error)
      throw error;
    }
  }
}

export default AnimalsService
