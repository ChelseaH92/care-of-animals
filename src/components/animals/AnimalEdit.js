import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getAnimalById, updateAnimal } from "./api/database.json"

export const EditAnimalForm = () => {
    const [animals, setAnimal] = useState({ name: "" })
    const [isLoading, setIsLoading] = useState(false);

    const { animalId } = useParams();
    const navigate = useNavigate();

    const handleFieldChange = e => {
        const stateToChange = { ...animals };
        stateToChange[e.target.id] = e.target.value;
        setAnimal(stateToChange);
    };

    const updateExistingAnimal = e => {
        e.preventDefault()
        setIsLoading(true);

        const editedanimal = {
            id: animalId,
            name: animals.name
        };

        updateAnimal(editedanimal)
            .then(() => navigate("/animals")
            )
    }

    useEffect(() => {
        getAnimalById(animalId)
            .then(animal => {
                setanimal(animal);
                setIsLoading(false);
            });
    }, [animalId]);


    return (
        <>
          <form>
            <fieldset>
              <div className="formgrid">
              <label htmlFor="name">Animal:</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="name"
                  value={animals.name}
                />
                
              </div>

              <div className="alignRight">
                <button
                  type="button" disabled={isLoading}
                  onClick={updateExistingAnimal}
                  className="btn btn-primary"
                >Submit</button>
              </div>
            </fieldset>
          </form>
        </>
      );

}