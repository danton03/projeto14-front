import { SizeBtn } from "./styles/ProductPageStyles";

export default function SizeButton(props){
  const {children, clicked, setClicked} = props;

  function toggleSelect() {
    setClicked(children);
  }

  return(
    <SizeBtn 
      type="button" 
      color={clicked === children ? "#55B4DC" : "#C8C8C8"}
      onClick={toggleSelect} 
    >
      {children}
    </SizeBtn>
  );
}