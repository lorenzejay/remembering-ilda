import Gallery from "react-photo-gallery";
import { photos, photoList } from "../photos";
const PhotoGallery = () => {
  return <Gallery photos={photoList} direction={"column"} />;
};

export default PhotoGallery;
