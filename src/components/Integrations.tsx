import { useState } from "react";
import { Wrapper } from "./Atoms";
import Pill from "./Pill";
import Modal from "./Modal";
import { ListItemInterface } from "../data/IntegrationsList";

interface Props {
  members: Array<any>;
}

function Integrations({ members }: Props) {
  const [integrations, setIntegrations] = useState(members);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalDialog, setActiveModalDialog] = useState<ListItemInterface | null>(null);

  const numRows = 5;
  const numSets = 2;
  const rows = [];
  const sets = [];

  const onModalCloseRequest = (): void => {
    setIsModalOpen(false);
    setActiveModalDialog(null);
  };  

  for (let i = 0; i < numSets; i++) {
    sets.push(
      <div className="row" key={i}>
        {integrations.map((item, index) => {
          return (
            <Pill key={index} name={item.name} text={item.text} 
                onClick={
                  (e:any) => {
                    const target = e.target.closest('div');
                    const activeItem = item;
                    setIsModalOpen(true); 
                    setActiveModalDialog(activeItem); 
                  }
                }
            />
          );
        })}
      </div>
    );
  }

  for (let i = 0; i < numRows; i++) {
    rows.push(
      <div key={i} className="marquee-inner" style={{top: `${i*52}px`}}>
        {sets}
      </div>
    );
  }  

  return (
    <Wrapper>
      <div className="marquee-outer">
        {rows}
      </div>

      <Modal isOpen={isModalOpen} onCloseRequest={onModalCloseRequest} data={activeModalDialog} />
    </Wrapper>
  );
}

export default Integrations;
