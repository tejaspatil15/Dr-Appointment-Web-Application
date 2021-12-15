import logo from './logo.svg';
import './App.css';
import homelogo2 from './Assets/homelogo2.png'


function FirstPage() {
    return (

        <div className="App">

            {/* <h1 className='mainheading'> Medi + Appoint</h1> */}
            <br />
            <br />

            <a href='./doclist'>  <img className='poster' src="https://images.template.net/34228/Free-Hospital-Facebook-Cover-Page-Template.jpeg" alt="..." border="8px" /> </a> <br />
            <div className="About"> <a href="#" > Know More  </a> </div>

            <br />
            {/* <form action="/" method="get">
                <label htmlFor="header-search">

                </label>
                <input className='searchBar'
                    type="text"
                    id="header-search"
                    placeholder="Search your city"
                    name="s" /> */}
            {/* &nbsp; <a href='./doclist'> <i class="fa fa-search"></i> </a> */}
            {/* <button type="submit" onClick={()=>window.open("/Doclist")} >Search</button> */}
            {/* <a className='seachBtn' href="./doclist" class="btn btn-primary">
                    Search{""}
                </a> */}
            {/* </form> */}
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
            <br />
            {/* <p> please select your city in above search bar to book a appointment with your doctor in your city.</p> */}
            <p> please select your city in above search bar to find good clinics and hospitals in your area.</p>

            <br />
        </div>
    );
}


export default FirstPage;
