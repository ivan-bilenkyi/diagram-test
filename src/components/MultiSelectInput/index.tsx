import Select from "react-select";
import { NodeData } from "../../types/NodeData";

type MultiSelectInputPropsType = {
  closeMenuOnSelect?: boolean;
  options: NodeData[];
  onChange: (selectedOpts: NodeData[]) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

function MultiSelectInput({
  closeMenuOnSelect = false,
  options,
  onChange,
  ...rest
}: MultiSelectInputPropsType) {
  const handleSelectChange = (selectedValues: readonly NodeData[]) => {
    const selectedOpts = selectedValues as NodeData[];
    onChange(selectedOpts);
  };

  return (
    <Select
      isMulti
      closeMenuOnSelect={closeMenuOnSelect}
      options={options}
      onChange={handleSelectChange}
      {...rest}
    />
  );
}

export default MultiSelectInput;
