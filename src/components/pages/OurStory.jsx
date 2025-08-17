import {Link} from "react-router-dom"
import StoryMain from "../storycomponent/StoryMain";
import Magnet from '../storycomponent/MainPhoto'
import '../../styles/Pages/OurStory.css'
import OurStoryText from "../storycomponent/OurStoryText";
import About from "../storycomponent/About";



const OurstoryPage = () => {
    return (
        <div>
            <div className="image-part">
                <div className="main">
                    <div className="main-content">
                        <Magnet padding={50} disabled={false} magnetStrength={10}>
                            <img className="front-image" src="https://static.wixstatic.com/media/84770f_b530c0e182e24190adcfd7104df60d01~mv2.jpeg/v1/fill/w_977,h_569,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/asset%20MJ%201-topaz-enhance-1920w.jpeg"></img>
                        </Magnet>
                    </div>
                    <OurStoryText className='we-are' />
                </div>
                <StoryMain/>
            </div>
            <About/>
            
        </div>
    );
}
export default OurstoryPage