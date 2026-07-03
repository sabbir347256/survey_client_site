import Goweb from "./goweb/Goweb";
import Lootwalls from "./lootwalls/Lootwalls";
import Zamplia from "./zamplia/Zamplia";

const Offerwalls = () => {

    return (
        <div>
            <Lootwalls></Lootwalls>
            <Zamplia></Zamplia>
            <Goweb></Goweb>
        </div>
    );
};

export default Offerwalls;