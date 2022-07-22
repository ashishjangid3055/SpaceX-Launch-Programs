import './Sidebar.css';
import axios from './axios'
import Sidebar from './Sidebar';
import { useState, useEffect } from 'react' 
import { useParams, useLocation } from 'react-router-dom'


function App(props) {

  const [launchData, setLaunchData] = useState([]);
  let params = useParams();
  let location = useLocation();

  useEffect(() => {
    async function fetchData(){
      let url = '';      
      
      if(location.search){
        let param = location.search.split('?');
        url = 'launches?limit=100&launch_year=' + params.y + '&' + param[1];
      }
      else{
        url = (params.y) ? 'launches?limit=100&launch_year=' + params.y : 'launches?limit=100';
      }
      
      const request = await axios.get(url);
      setLaunchData(request.data);
    }
    fetchData()
  }, [params]);
   
    
  return (
    <div id="wrapper" className="home">
      <header>
        <h2>SpaceX Launch Programs</h2>
      </header>

      <section>
        <Sidebar />

        <main>
          {
            launchData.map((current, index) => {
              return(
                  <div className='mission_card' key={index}>
                    <div className='mission_img'>
                      <img src={current.links.mission_patch_small} alt="{current.mission_name}" />
                    </div>
                    <div className='mission_launch_data'>
                      <h4>{current.mission_name+" "}#{index+1}</h4>
                      <h4>Launch Year : {current.launch_year}</h4>
                      <h4>Successful Launch : {current.launch_success ? 'true' : 'false'}</h4>
                      <h4>Rocket Name : {current.rocket.rocket_name}</h4>
                    </div>
                  </div>
                )
            })
          }
        </main>
        
      </section>  
    </div> 
  );
}

export default App;
