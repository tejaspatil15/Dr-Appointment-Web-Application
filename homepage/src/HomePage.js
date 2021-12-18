// import logo from './logo.svg';
import './App.css';
import Poster from './Assets/Poster.png'


function FirstPage() {
    return (

        <div className="App">

            {/* <h1 className='mainheading'> Medi + Appoint</h1> */}
            <br />
            <br />

            <a href='./Aboutus'>  <img className='poster' src={Poster} alt="..." border="1.5px" /> </a>
            <br />
            <div className="About">
                <br />
            </div>

            <br />

            <div class="wrapper">
                <div class="searchBar">
                    <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search your city.." />
                    <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">Q
                        {/* <a className='seachBtn' href="./doclist" class="btn btn-primary"> Search{""} </a> */}
                        {/* <svg width="100" height="100">
                            <circle cx="24" cy="22" r="20" stroke="green" stroke-width="4" fill="blue" />
                        </svg> */}
                    </button>
                </div>
            </div>
            <br />

            <p> please select your city in above search bar to find good clinics and hospitals in your area.</p>

            <br />

        </div>
    );
}


export default FirstPage;
