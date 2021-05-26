import Gallery from "react-photo-gallery";
import { photos, photoList } from "../photos";
const PhotoGallery = () => {
  return <Gallery photos={photos} direction={"column"} />;
};

export default PhotoGallery;
