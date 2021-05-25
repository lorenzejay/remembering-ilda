import Gallery from "react-photo-gallery";
import { photos } from "../photos";
const PhotoGallery = () => {
  return <Gallery photos={photos} direction={"row"} />;
};

export default PhotoGallery;
