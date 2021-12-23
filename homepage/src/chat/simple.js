const App = (props) => {
    let [showChat, setShowChat] = useState(false);
  
    const startChat = () => {setShowChat(true);}
    const hideChat = () => {setShowChat(false);}
      return(
        <>
         <div className='bot'>
           <div style = {{display: showChat ? "" : "none"}}>
           {/* <Simpleform /> */}
           <Form />
           </div>
           <div>
             {!showChat
             ? <button class = "btn rounded-pill " onClick = {() => startChat()}><img src={bot} alt='' height={50}/></button>
             : <button class='btn rounded-pill' onClick={() => hideChat()}>click to hide...</button>
             }
           </div>
        </div>
        </>
       
      );
    
  }



  function App() {
    return (
      
        <div >
            <Header />
            <Router >
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path="/doclist" component={Doclist} />

                    <Route exact path='/login' component={LoginPage} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/RegisterP' component={RegisterP} />
                    <Route exact path='/RegisterD' component={RegisterD} />
                </Switch>
            </Router>
            <Mainfooter/>
            <Footer />

        </div>
    )

}