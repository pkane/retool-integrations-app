import { PillDiv, Icon } from "./Atoms";

interface Props {
  name: string;
  text: string;
  onClick(arg0: object): void;
}

function Pill({ name, text, onClick }: Props) {
  return (
    <PillDiv className={name} onClick={onClick} data-name={name}>
      <Icon className={`icon ${name}`}></Icon>
      {text}
    </PillDiv>
  );
}

export default Pill;
