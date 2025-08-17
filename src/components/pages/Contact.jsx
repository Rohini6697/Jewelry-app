import Customer from "../contactcomponent/Customer";
import Faq from "../contactcomponent/Faq";
import GetIn from "../contactcomponent/GetIn";
import Location from "../contactcomponent/Location";





const ContactPage = () => {
    return (
        <div>
            <GetIn/>
            <Customer/>
            <h1>Come Say Hi</h1>
            <Location/>
            <Faq/>

        </div>
    );
}
export default ContactPage