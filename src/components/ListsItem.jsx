import { useDispatch } from "react-redux";
import { delItem } from "../features/ItemSlice";

const ListsItem = ({ item, id }) => {
  const dispatch = useDispatch();
  const onDel = () => {
    dispatch(delItem({ id }));
  };
  return (
    <div className="listItem">
      <span>
        {id + 1}. {item.item}
      </span>
      <button type="button" className="actionBtn" onClick={onDel}>
        Del
      </button>
    </div>
  );
};

export default ListsItem;
