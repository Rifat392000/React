export default function Button({ children, color, handler }) {

    // pater moddhe jinish ke children bole  eta auto props hisabe pai  --->
  
    
    const style =
      color === "danger"
        ? "bg-red-500 text-white px-3 py-2 rounded shadow"
        : "bg-blue-500 text-white px-3 py-2 rounded shadow";
   
    return (
      <button className={style} onClick={handler}>
        {children}
      </button>
    );
   }