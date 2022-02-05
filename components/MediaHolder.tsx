import MediaThumbnail from "./MediaThumbnail"

interface MovieInterface {	
	title: string;
	backdrop_path: string;
	poster_path: string;
	release_date: string;
	vote_average: number;
}

const MediaHolder = ({movies, title}) => {
    return (
        <div className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto">
            <h2 className="font-semibold">{title}</h2>
            <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
                {
                    movies.map((movie) => (
                        <div className="flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300">
                            <Image
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                width={330}
                                height={210}
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MediaHolder;
