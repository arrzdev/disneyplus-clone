import ShowThumbnail from "./ShowThumbnail";

interface ShowInterface {	
	name: string;
	backdrop_path: string;
	poster_path: string;
	fisrt_air_date: string;
	vote_average: number;
}

interface IProps {
    title: string;
    results: ShowInterface[];   
}


const ShowsCollection:React.FC<IProps> = (props) => {
    return (
        <div className="flex flex-col space-y-2 my-8 px-8 max-w-[1400px] mx-auto">
            <h2 className="font-semibold">{props.title}</h2>
            <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll p-2 -m-2">
                {props.results.map((result) => (
                <ShowThumbnail poster_path={result.poster_path} />
            ))}
            </div>
        </div>
        );
};

export default ShowsCollection;
