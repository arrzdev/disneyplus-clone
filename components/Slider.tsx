import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

interface IPopularMovies {	
	title: string;
	backdrop_path:string;
	release_date: string;
	vote_average: number;
}

interface IProps {
	popularMovies: IPopularMovies[];
}

const Slider:React.FC<IProps> = (props) => {
    //convert img -> Image
    return (
        <section className="relative shadow-2xl max-w-screen-2xl mx-auto">
            <Carousel
                autoPlay
                swipeable
                infiniteLoop
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                interval={5000}
            >
                {
                props.popularMovies.slice(0,6).map(movie => (
                    <div>  
                        <img loading="lazy" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt=""/>
                    </div>
                ))
                }   
            </Carousel>
        </section> 
    )  
};

export default Slider;
