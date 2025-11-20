import React from "react";

const Home = () => {
  const bgimg = "https://images8.alphacoders.com/118/thumb-1920-1180819.jpg";

  return (
    <div
      className="
        w-full min-h-screen bg-cover bg-center relative 
        flex items-center justify-center px-4
      "
      style={{ backgroundImage: `url('${bgimg}')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Content */}
      <div
        className="
          relative text-white 
          max-w-3xl w-full 
          bg-black/40 backdrop-blur-sm 
          rounded-lg border border-white/20 
          p-6 sm:p-10
        "
      >
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Demon Slayer: Kimetsu no Yaiba
        </p>

        <p className="mt-5 text-sm sm:text-base lg:text-lg leading-relaxed">
          Demon Slayer: Kimetsu no Yaiba (Japanese: 鬼滅の刃, Hepburn: Kimetsu no
          Yaiba; lit. 'Blade of Demon Destruction') is a Japanese manga series
          written and illustrated by Koyoharu Gotouge. It was serialized in
          Shueisha's Weekly Shōnen Jump from February 2016 to May 2020, with its
          chapters collected in 23 volumes. It follows teenage Tanjiro Kamado,
          who joins the Demon Slayer Corps after his family is slaughtered and
          his sister Nezuko is turned into a demon, in hopes of turning her
          human again.
        </p>
      </div>
    </div>
  );
};

export default Home;
