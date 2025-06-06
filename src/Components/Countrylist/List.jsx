import './List.css';

function List({img, alt, name, population, continent}) {


    return (
                    <li>
                        <article className="countryInfo">
                            <div className="flagIMG">
                                <img src={img} alt={alt}/>
                            </div>
                            <div className="countryText">
                                <h2 className={continent}>{name}</h2>
                                <p>Has a population of {population} people</p>
                            </div>
                        </article>
                    </li>
    )
}



export default List



