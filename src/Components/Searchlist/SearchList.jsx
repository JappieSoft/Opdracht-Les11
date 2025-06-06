import './SearchList.css';
import colorChecker from "../../helpers/countryColor.js";

function SearchList({img, alt, name, subarea, captital, population, neighbours, domain, continent}) {

    return (
                    <li className="searchLi">
                        <article className="searchInfo">
                            <div className="searchFlagIMG">
                                <img src={img} alt={alt}/>
                                <h2 className="searchCountry">{name}</h2>
                            </div>
                            <div className="searchText">
                                <p>
                                    {name} is situated in {subarea} and the capital is {captital}.
                                    It has a population of {population} million people and it borders with {neighbours} neighboring countries.
                                    Websites can be found on {domain} domain's.
                                </p>
                            </div>
                        </article>
                    </li>
    )
}


export default SearchList


