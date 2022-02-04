import Image from "next/image";
import { HomeIcon, SearchIcon, PlusIcon, StarIcon } from "@heroicons/react/solid";

import styles from "Header.module.css"

const Header = () => {
    return(
        <div className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 h-[72px] md:px-12">
            <Image 
                src="/images/logo.svg" 
                width={80} 
                height={80} 
                className="cursor-pointer"
            />
            <div className="ml-10 md:flex items-center space-x-6">
                <a className="header-link group">
                    <HomeIcon className="h-4" />
                    <span className="span">Home</span>
                </a>
                <a className="header-link group">
                    <SearchIcon className="h-4" />
                    <span className="span">Search</span>
                </a>
                <a className="header-link group">
                    <PlusIcon className="h-4" />
                    <span className="span">Watchlist</span>
                </a>
                <a className="header-link group">
                    <StarIcon className="h-4" />
                    <span className="span">Originals</span>
                </a>
                <a className="header-link group">
                    <img src="/images/movie-icon.svg" alt="" className="h-5" />
                    <span className="span">Movies</span>
                </a>
                <a className="header-link group">
                    <img src="/images/series-icon.svg" alt="" className="h-5" />
                    <span className="span">Series</span>
                </a>
            </div>
        </div>
    );
  };
  

  export default Header;
  
