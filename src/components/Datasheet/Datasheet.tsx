import { Modal } from "@mui/material";
import { DatasheetImage, DatasheetImageContainer } from "./styles";

interface Props {
  close: () => void;
}

const Datasheet = (props: Props) => {
  const { close } = props;

  return <Modal 
    open={true} 
    onClose={close}        
    closeAfterTransition
    slotProps={{
      backdrop: {
        // You can tweak opacity/color here
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
      },
    }}
  >
    <DatasheetImageContainer onClick={close}>
      <DatasheetImage
        src={"/datasheet.jpg"}
      />
    </DatasheetImageContainer>
  </Modal>;
};

export default Datasheet;