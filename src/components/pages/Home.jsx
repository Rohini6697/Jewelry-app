// import Header from "../essential/Header";
// import Magnet from "../homecomponents/Heading";
import Magnet from '../homecomponents/Heading'
import '../../styles/Pages/Home.css'
import HeadLine from '../homecomponents/HeadLine';
import ShopAll from '../homecomponents/ShopAll';
import BestSeller from '../homecomponents/BestSeller';



const HomePage = () => {
    return (
        // <Header/>
        <>
            {/* <Magnet/> */}
            <div className="main">
                <Magnet padding={50} disabled={false} magnetStrength={10}>
                    <img className="front-image" src="https://static.wixstatic.com/media/c837a6_424ef453cdd0450785ca5cceee609629~mv2.jpg/v1/fill/w_896,h_923,fp_0.44_0.43,q_85,enc_avif,quality_auto/A_close_up_of_an_earring_a_model_wearing_gold_rings.jpg"></img>
                </Magnet>
                <HeadLine/>
                <ShopAll/>
            </div>
            <div className='bestseller'>
                <BestSeller/>
            </div>
        </>
    );
}

export default HomePage