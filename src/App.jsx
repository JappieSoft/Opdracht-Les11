import "./App.css";
import axios from "axios";
import {useState} from "react";
import colorChecker from "./helpers/countryColor.js";
import Button from "./Components/Button/Button";
import List from "./Components/Countrylist/List";
import worldIMG from "./assets/world_map.png";

function App() {
    const [apiPull, setApiPull] = useState();
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState(false);

    /* temp api link for testing:
        const apiLink = "https://restcountries.com/v3.1/all?fields=name,flag,population"*/
    const apiLink = "https://restcountries.com/v3.1/all"
    const apiProps = "name,flags,population,region,cca3"

    async function fetchCountries() {
        setError("");
        toggleLoading(true);

        try {
            const response = await axios.get(`${apiLink}`,
                {
                    params: {
                    fields: `${apiProps}`,
                },
            }
            );
            console.log(response);
            setApiPull(response.data);
        } catch (error) {
            console.error(error);
            setError("Er is een ERROR!");
        } finally {
            toggleLoading(false);
        }
    }

    function apiSort(pulledData) {
        return [...pulledData].sort((a, b) => a.population - b.population);
    }

    return (
        <>
            <header>

                <img src={worldIMG} alt="Image of the World"/>
                <h1>World Regions</h1>
                <Button
                    buttonType={"submit"}
                    name={"Get Api"}
                    isDisabled={loading === true}
                    action={fetchCountries}
                />
            </header>
            <main>
                {error && <p className="error-message">{error}</p>}
                {loading && <p>Api pull in progress!</p>}
                {apiPull &&
                <div>
                    <ul className="countryFiles">
                        {apiSort(apiPull).map((country) => (
                            <List
                                key={country.cca3}
                                img={country.flags.svg}
                                alt={country.flags.alt}
                                name={country.name.official}
                                population={country.population}
                                continent={colorChecker(country.region)}
                            />
                        ))}
                    </ul>
                </div>}


            </main>
        </>
    )
}

export default App
