import fetchImgurAlbum from "@/app/lib/fetchImgurAlbum";
import { ImgurImage } from "@/models/Imgur-image";

interface PhotoDetailProps {
  params: {
    id: string;
  };
}

const PhotoDetail = async ({ id }) => {
  return <div>PhotoDetail</div>;
};

export default PhotoDetail;
