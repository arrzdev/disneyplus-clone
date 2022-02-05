import MovieThumbnail from "@components/MovieThumbnail"

interface MovieInterface {	
	title: string;
	backdrop_path: string;
	poster_path: string;
	release_date: string;
	vote_average: number;
}

interface IProps {
    title: string;
    results: MovieInterface[];   
}

const MoviesCollection:React.FC<IProps> = (props) => {
    return (
        <div className="relative flex flex-col md: space-y-2 my-10 px-8 max-w-[1400px] mx-auto">
            <h2 className="font-semibold select-none">{props.title}</h2>
            <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
                {
                props.results.map((result) => (
                <MovieThumbnail poster_path={result.poster_path}/>
                ))
                }
            </div>
        </div>
    );
};

export default MoviesCollection;
