import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

interface IPopularMovies {	
	title: string;
    id: number;
	backdrop_path: string;
    poster_path: string;
	release_date: string;
	vote_average: number;
}

interface IProps {
	popularMovies: IPopularMovies[];
}

const Slider:React.FC<IProps> = ({ popularMovies }) => {
    //convert img -> Image
    return (
        <section className="relative shadow-2xl max-w-screen-2xl mx-auto">
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                interval={5000}
            >
                {
                popularMovies.slice(0,6).map(movie => (
                    <img loading="lazy" key={movie.title} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt=""/>
                ))
                }   
            </Carousel>
        </section> 
    )  
};

export default Slider;
