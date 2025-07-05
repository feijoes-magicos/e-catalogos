import { Props } from "./types";

import whiteCross from "@assets/cruz_branca.png";
import SeekForm from "./subcomponents/SeekForm";
import { Button, Header, Modal, Window } from "./SeekModal.styles";

const SeekModal = (props: Props) => {
  const { cursorState, list, setOpenStatus } = props;
  const enderecos = list.map((produto, index) => {
    return { id: index, ref: produto?.reference };
  });

  return (
    <Modal>
      <Window>
        <Header
          onBlur={() => {
            setOpenStatus();
          }}
        >
          <h2 style={{ color: "white" }}>Buscar referência</h2>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setOpenStatus();
            }}
          >
            <img src={whiteCross} />
          </Button>
        </Header>
        <SeekForm
          cursorState={cursorState}
          setOpenStatus={setOpenStatus}
          enderecos={enderecos}
        />
      </Window>
    </Modal>
  );
};

export default SeekModal;
