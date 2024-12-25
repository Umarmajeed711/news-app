


import './leftbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/earth.png'


const LeftBar = () => {
    return(
        <div  className='leftBar'>
            

            <div>
             <img src={logo} alt="" width={200} className='logo' />
            </div>


            {/* option cards */}

            <div className="d-flex justify-content-center flex-column gap-4">

            <div className="d-flex column-gap-2">
                <div className="box" >
                    <h4>🚀</h4>
                    <h6>Sports</h6>
                </div>
                <div className="box">
                    <h4>🚀</h4>
                    <h6>Technology</h6>
                </div>
            </div>    
            <div className="d-flex column-gap-2">
                <div className="box" >
                    <h4>🚀</h4>
                    <h6>Polictics</h6>
                </div>
                <div className="box">
                    <h4>🚀</h4>
                    <h6>Corruption</h6>
                </div>
            </div>   
            <div className="d-flex column-gap-2">
                <div className="box" >
                    <h4>🚀</h4>
                    <h6>Marketplace</h6>
                </div>
                <div className="box">
                    <h4>🚀</h4>
                    <h6>Industries</h6>
                </div>
            </div>   
            <div className="d-flex column-gap-2">
                <div className="box" >
                    <h4>🚀</h4>
                    <h6>Education</h6>
                </div>
                <div className="box" >
                    <h4>🚀</h4>
                    <h6>Events</h6>
                </div>
            </div>   

            </div>

        </div>
    )
}

export default LeftBar;