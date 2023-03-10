import './Dashboard.css';
import SidebarData from './SidebarData';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import FaceIcon from '@mui/icons-material/Face';
import Widget from './Widget';
import pic from '../images/pic.png'
import image from '../images/image.jpg'


function Dashboard(){
    return(
            <div className="dash">
              <aside className="sidemenu">
               <div className='sidemenu-button'>
                <h1>FITNESS</h1>
                <SidebarData/>
               </div>
              </aside>
              <section className="chatbox">
                <div className='heading'>
                <h1>Dashboard</h1> 
                <p>Welcome back,Syedia!</p>
                </div>
                <div className='icons'>
                <NotificationAddIcon/>
                <FaceIcon/>
                </div>
                <Widget/>
                <div class ="row">
                    <div class = "column">
                     <img className='pic' src = {pic} alt ="picture"/>
                    </div>
                    <div class = "column">
                    <img className='image2' src = {image} alt ="image"/>
                    </div>

                </div>
               

                
              </section>
            </div>
    )
}
export default Dashboard;