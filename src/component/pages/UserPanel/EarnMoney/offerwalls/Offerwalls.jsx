import Goweb from "./goweb/Goweb";
import Lootwalls from "./lootwalls/Lootwalls";
import OpinionGold from "./Opinion/OpinionGold";
import Zamplia from "./zamplia/Zamplia";

const Offerwalls = () => {

    return (
        <div>
            <Lootwalls></Lootwalls>
            <Zamplia></Zamplia>
            <Goweb></Goweb>
            <OpinionGold></OpinionGold>
        </div>
    );
};

export default Offerwalls;