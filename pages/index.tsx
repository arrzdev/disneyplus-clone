import {GetStaticProps, NextPage} from "next"
import Head from 'next/head'
import Navbar from '@components/Navbar'
import Slider from "@components/Slider"
import Brands from "@components/Brands"
import MediaHolder from "@components/MediaHolder"

interface MovieInterface {	
	title: string;
	backdrop_path: string;
	poster_path: string;
	release_date: string;
	vote_average: number;
}

interface ShowInterface {	
	name: string;
	backdrop_path: string;
	poster_path: string;
	fisrt_air_date: string;
	vote_average: number;
}

interface PropsInterface {
	popularMovies: MovieInterface[],
	popularShows: ShowInterface[],
	topRatedMovies: MovieInterface[],
	topRatedShows: ShowInterface[],
}

const Home:NextPage<PropsInterface> = (props) => {
  return (
    <div className="">
		<Head>
			<title>Disney+</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Navbar/>
		<main>
			<Slider popularMovies={props.popularMovies}/> 
			<Brands />
		</main>
	</div>
  )
}

//server side rendering

export const getStaticProps = async () => {
	//Fetch tmdb popular movies
	const popularMoviesRes = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.API_KEY}&language=pt-PT&external_source=imdb_id`)
	const popularShowsRes = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
	const topRatedMoviesRes = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`)
	const topRatedShowsRes = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`)

	//parse
	const popularMovies = await popularMoviesRes.json()
	const popularShows = await popularShowsRes.json()
	const topRatedMovies = await topRatedMoviesRes.json()
	const topRatedShows = await topRatedShowsRes.json()
	
	// Returned as props to page
	return {
		props: {
			popularMovies: popularMovies.results,
			popularShows: popularMovies.results,
			topRatedMovies: popularMovies.results,
			topRatedShows: popularMovies.results,
		}
	}
}

export default Home