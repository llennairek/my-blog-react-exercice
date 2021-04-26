import Item from "./Item";

const MainContent = () => {
  return (
    <div>
      <Item
        itemTitle="Title 1"
        itemSubtitle="Title description 1"
        itemPicture="https://bhf-cdn.azureedge.net/bhf-blob-prod/0036174_zack-uni-dark-grey-faux-linen-wallpaper_600.jpeg"
        itemDescription="Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque."
      />
      <Item
        itemTitle="Title 2"
        itemSubtitle="Title description 2"
        itemPicture="https://bhf-cdn.azureedge.net/bhf-blob-prod/0036174_zack-uni-dark-grey-faux-linen-wallpaper_600.jpeg"
        itemDescription="Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque."
      />
    </div>
  );
};

export default MainContent;
