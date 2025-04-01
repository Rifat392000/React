import { useContext } from "react";
import { AssetContext, FlagContext } from "../Grandpa/Grandpa";


const Special = ({asset}) => {
    const gift = useContext(AssetContext);
    const flag = useContext(FlagContext)
    return (
        <div>
            <h2>Special</h2>
            <p>has: {asset}</p>
            <p>Also has: {gift}</p>
            <p>Flag: {flag}</p>
        </div>
    );
};

export default Special;