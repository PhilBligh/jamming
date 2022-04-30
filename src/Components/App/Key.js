
import img from "./key.jpeg"
export const Key = (props) => {

  const handleClick = () => {
    props.updateKey(true)
  }

  return (
    <div className="Key" onClick={handleClick}>
        <img src={img} style={{height: "60px"}}/>
    </div>
  );
}

