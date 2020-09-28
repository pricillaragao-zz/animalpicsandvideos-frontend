import React, {useState, useEffect} from "react";
import AnimalsService from "../../api/animals/AnimalsService";
import AnimalsList from "./AnimalsList";

const animalsService = new AnimalsService()

const HomePage = () => {
  const [animals, setAnimals] = useState([])

  useEffect(() => {
    const fetchAnimals = async () => {
      const result = await animalsService.getAnimals()
      setAnimals(result)
    }

    fetchAnimals()
  }, [])
  
  return (
    <div>
      <AnimalsList animals={animals} />
    </div>
  ) 
};

export default HomePage
