import AboutMe from "./AboutMe";

const SideContent = ({ text }) => {
  return (
    <aside>
      <AboutMe
        itemTitle="About me"
        itemPicture="https://bhf-cdn.azureedge.net/bhf-blob-prod/0036174_zack-uni-dark-grey-faux-linen-wallpaper_600.jpeg"
        itemDescription="Cras interdum pharetra felis eu faucibus."
      />
    </aside>
  );
};

export default SideContent;
