import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, reset } from "../features/ItemSlice";

const AddItem = () => {
  const [item, setItem] = useState("");
  const onChange = (e) => {
    setItem(e.target.value);
  };

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    if (item) {
      e.preventDefault();
      dispatch(addItem({ item }));
      setItem("");
    }
  };

  const onReset = () => dispatch(reset());
  return (
    <div className="addItem">
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={item} />
        <button type="submit" className="actionBtn">
          Add
        </button>
        <button type="button" className="actionBtn" onClick={onReset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default AddItem;
