import "./App.css";
import axios from "axios";
import {useState} from "react";
import colorChecker from "./helpers/countryColor.js";
import Button from "./Components/Button/Button";
import List from "./Components/Countrylist/List";
import InputForm from "./Components/InputForms/InputForm";
import SearchList from "./Components/Searchlist/SearchList";
import worldIMG from "./assets/world_map.png";

function App() {
    const [apiPull, setApiPull] = useState();
    const [apiSearch, setApiSearch] = useState();
    const [searchTerm, setSearchTerm] = useState();
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState(false);

    async function fetchCountries(apiLink, apiProps) {
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
            apiLink.includes("all") ? setApiPull(response.data) : setApiSearch(response.data);
        } catch (error) {
            console.error(error);
            setError("Er is een ERROR!");
        } finally {
            toggleLoading(false);
            apiLink.includes("all") ? setApiSearch("") : setApiPull("");
        }
    }

    function apiSort(pulledData) {
        return [...pulledData].sort((a, b) => a.population - b.population);
    }

    return (
        <>
            <header className="inner-container">

                <img src={worldIMG} alt="Image of the World"/>
                <h1>World Regions</h1>
            </header>
            <nav>
                <Button
                    buttonType={"submit"}
                    name={"Laat alle landen zien!"}
                    isDisabled={loading === true}
                    action={() => fetchCountries("https://restcountries.com/v3.1/all", "name,flags,population,region,cca3")}
                />

                <label htmlFor="form-search" className="formText">Search Country-name:
                    <input type="text" id="countryInput" name="countryName" onChange={(event) => setSearchTerm(event.target.value)}/>
                </label>


                <Button
                    buttonType={"submit"}
                    name={"Zoek"}
                    isDisabled={loading === true}
                    action={() => fetchCountries(`https://restcountries.com/v3.1/name/${searchTerm}`, "flags,name,subregion,capital,population,borders,tld,cca3")}
                />
            </nav>
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

                {apiSearch &&
                    <div>
                        <ul className="countryFiles">
                            {apiSort(apiSearch).map((country) => (
                                <SearchList
                                    key={country.cca3}
                                    img={country.flags.svg}
                                    alt={country.flags.alt}
                                    name={country.name.official}
                                    subarea={country.subregion}
                                    captital={country.capital}
                                    population={country.population}
                                    neighbours={country.borders}
                                    domain={country.tld}
                                    continent={colorChecker(country.region)}
                                />
                            ))}
                        </ul>
                    </div>}


            </main>
            <footer>
                <p>Temp designs by: JappieSoft</p>
            </footer>
        </>
    )
}

export default App
