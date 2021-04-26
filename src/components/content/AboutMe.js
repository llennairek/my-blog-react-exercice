import ItemTitle from "./ItemTitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const AboutMe = ({ itemTitle, itemPicture, itemDescription }) => {
  return (
    <div>
      <ItemTitle text={itemTitle} />
      <ItemPicture url={itemPicture} />
      <ItemDescription text={itemDescription} />
    </div>
  );
};

export default AboutMe;
