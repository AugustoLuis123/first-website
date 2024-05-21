import React, { useState } from 'react';
import { albums } from '../constants';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Albums = () => {
  const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0);

  const albumNameColors = ['#f4f4f4', '#d74c39', '#a61e22', '#40df90', '#f4e12f', '#d8052c', '#b0451b', '#c3290b', '#4a8397'];

  const nextAlbum = () => {
    setCurrentAlbumIndex((prevIndex) => (prevIndex === albums.length - 1 ? 0 : prevIndex + 1));
  };

  const prevAlbum = () => {
    setCurrentAlbumIndex((prevIndex) => (prevIndex === 0 ? albums.length - 1 : prevIndex - 1));
  };

  return (
    <section id="albums" className="bg-black py-20 px-10 max-container-no-margin">
      <div data-aos="fade-up">
        <h2 className="lg:px-20 text-4xl font-nunito font-bold bg-gradient-to-b from-hero1 to-hero3 bg-clip-text text-transparent">Albums</h2>
        <p className="pb-10 lg:px-20 text-lg text-white-400 font-poppins text-justify leading-relaxed">
          Explore The Weeknd's musical journey through a curated collection of his iconic albums. Dive into his discography and experience the sounds that have captivated audiences worldwide.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-5">
        <div className="flex-1 w-full">
          <div className="flex justify-center relative" data-aos="zoom-in">
            <button onClick={prevAlbum} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-1 rounded-full shadow bg-white/60 text-gray-800 hover:bg-white">
              <ChevronLeft size={30} />
            </button>
            <img src={albums[currentAlbumIndex].imgURL} alt={albums[currentAlbumIndex].name} className="rounded-md lg:max-w-lg h-auto" />
            <button onClick={nextAlbum} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-1 rounded-full shadow bg-white/60 text-gray-800 hover:bg-white">
              <ChevronRight size={30} />
            </button>
          </div>
        </div>

        <div className="flex-1 w-full text-center md:text-left md:pl-20" data-aos="fade-up">
          <h2 className="text-3xl font-poppins font-bold" style={{ color: albumNameColors[currentAlbumIndex] }}>{albums[currentAlbumIndex].name}</h2>
          <p className="text-lg text-white font-poppins">{albums[currentAlbumIndex].date}</p>
          <h3 className="mt-4 mb-2 text-lg font-montserrat font-bold bg-gradient-to-b from-hero1 to-hero3 bg-clip-text text-transparent">Tracklist:</h3>
          <ul>
            {albums[currentAlbumIndex].tracklist.map((track, index) => (
              <li className="text-white font-nunito py-[2px]" key={index}>{track}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Albums;
