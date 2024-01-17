const ShoeCard = ({
  imgShoeURL,
  imgThumbnailURL,
  changeBigShoeImage,
  bigShoeImg,
}: {
  imgShoeURL: string;
  imgThumbnailURL: string;
  changeBigShoeImage: (imgShoeURL : any)=>any;
  bigShoeImg: string;
}) => {

    const handleClick = () => {
        if(bigShoeImg!==imgShoeURL){
            changeBigShoeImage(imgShoeURL)
        }
    }

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgShoeURL ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img src={imgThumbnailURL} alt="Shoe Collection" width={127} height={103} className="object-contain" />
        </div>
    </div>
  );
};

export default ShoeCard;
