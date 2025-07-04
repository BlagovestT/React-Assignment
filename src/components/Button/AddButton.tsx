import { useModalParams } from "../../hooks/useModalParams";
import type { AppData } from "../../types/appDataType";
import { StyledAddButton } from "./AddButton.styles";

type AddButtonProps = {
  section: keyof AppData;
  label: string;
};

export const AddButton: React.FC<AddButtonProps> = ({ section, label }) => {
  const { openModalWithParams } = useModalParams();

  const handleClick = () => {
    openModalWithParams(undefined, section);
  };

  return <StyledAddButton onClick={handleClick}>{label}</StyledAddButton>;
};
