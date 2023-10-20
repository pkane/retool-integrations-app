import { ModalBackgroundStyled, ModalStyled, Icon } from "./Atoms";

interface IModalProps {
  isOpen: boolean;
  data: any;
  onCloseRequest(data: object): void;
}

function Modal({ isOpen = false, data = {}, onCloseRequest} : IModalProps) {

  // if isOpen is false, dont render anything
  if (!isOpen) {
    return null;
  }

  // if isOpen is true, render the modal
    return (
        <>
        <ModalBackgroundStyled />
        <ModalStyled>
            <button className="close-btn" type="button" onClick={onCloseRequest}>Close</button>
            <Icon className={`icon ${data.name}`}></Icon>
            <div className="integration-content">
                <h2>{data.details.headline}</h2>
                <p>{data.details.copy}</p>
            </div>
        </ModalStyled>
        </>
    )    
};

export default Modal;