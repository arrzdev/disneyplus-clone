import Image from "next/image"

interface MovieInterface {	
	poster_path: string;
}

const MovieThumbnail:React.FC<MovieInterface> = (props) => {
    return( 
        <div
          className="flex min-w-[130px] min-h-[50px] md:min-w-[260px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
        >
          <Image
            src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
            width={260}
            height={380}
            className="rounded-lg "
          />
        </div>
      );
};

export default MovieThumbnail;

