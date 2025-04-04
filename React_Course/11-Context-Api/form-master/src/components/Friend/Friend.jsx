import { useContext } from "react";
import { AssetContext, FlagContext } from "../Grandpa/Grandpa";


const Friend = () => {
    const gift = useContext(AssetContext);
    const flag = useContext(FlagContext)
    return (
        <div>
            <h2>Friend</h2>
            <p>has: {gift}</p>
            <p>Flag: {flag}</p>
        </div>
    );
};

export default Friend;