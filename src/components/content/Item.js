import ItemTitle from "./ItemTitle";
import ItemSubtitle from "./ItemSubtitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const Item = ({ itemTitle, itemSubtitle, itemPicture, itemDescription }) => {
  return (
    <div className="item">
      <ItemTitle text={itemTitle} />
      <ItemSubtitle text={itemSubtitle} />
      <ItemPicture url={itemPicture} />
      <ItemDescription text={itemDescription} />
    </div>
  );
};

export default Item;
