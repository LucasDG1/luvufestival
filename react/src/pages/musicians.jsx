function Musicians() {
  return (
    <main className="py-15 flex flex-col items-center px-6">
      <section className="w-full">
        <div className="flex justify-between items-center">
          <a href="/">
            <i class="fa-solid fa-circle-xmark absolute top-0 left-0 m-5 text-vermilion text-4xl"></i>
          </a>
        </div>
        <div className="flex gap-6 mt-5 border-gray-400 rounded-tl-3xl rounded-tr-3xl shadow-top">
          <img
            className="rounded-br-3xl rounded-tl-3xl object-cover h-30 w-30"
            src="/img/artist/vanbuuren.png"
            alt=""
          />
          <div className="flex flex-col mt-8">
            <h2 className="font-bold text-xl">Armin van Buuren</h2>
            <p className="font-bold text-md text-gray-400">Trance Icon</p>
          </div>
        </div>
        <div className="p-3 shadow rounded-bl-3xl rounded-br-3xl">
          <p>
            Five-time “World’s No. 1 DJ” and{" "}
            <span className="text-vermilion">trance icon</span>, Armin delivers
            euphoric, high-energy sets that have headlined festivals from{" "}
            <span className="text-vermilion">Tomorrowland</span> to{" "}
            <span className="text-vermilion">Ultra</span>. His uplifting
            melodies and impeccable mixing keep crowds{" "}
            <span className="text-vermilion">dancing</span> for hours.
          </p>
        </div>
        <div className="flex gap-6 mt-5 border-gray-400 rounded-tl-3xl rounded-tr-3xl shadow-top">
          <img
            className="rounded-br-3xl rounded-tl-3xl object-cover h-30 w-30"
            src="/img/artist/garrix.png"
            alt=""
          />
          <div className="flex flex-col mt-8">
            <h2 className="font-bold text-xl">Martin Garrix</h2>
            <p className="font-bold text-md text-gray-400">EDM Superstar</p>
          </div>
        </div>
        <div className="p-3 shadow rounded-bl-3xl rounded-br-3xl">
          <p>
            Broke through as a teenager with “
            <span className="text-vermilion">Animals</span>,” Martin Garrix has
            become one of the <span className="text-vermilion">biggest</span>{" "}
            names in EDM. His anthemic big-room tracks and stadium-sized drops
            make him a <span className="text-vermilion">festival favorite</span>{" "}
            across Europe.
          </p>
        </div>
        <div className="flex gap-6 mt-5 border-gray-400 rounded-tl-3xl rounded-tr-3xl shadow-top">
          <img
            className="rounded-br-3xl rounded-tl-3xl object-cover h-30 w-30"
            src="/img/artist/keningston.png"
            alt=""
          />
          <div className="flex flex-col mt-8">
            <h2 className="font-bold text-xl">Kensington</h2>
            <p className="font-bold text-md text-gray-400">
              Indie Rock Anthems
            </p>
          </div>
        </div>
        <div className="p-3 shadow rounded-bl-3xl rounded-br-3xl">
          <p>
            Rotterdam-born indie rock quintet known for{" "}
            <span className="text-vermilion">soaring</span> choruses and{" "}
            <span className="text-vermilion">driving</span> guitar riffs. Hits
            like “<span className="text-vermilion">Streets</span>” and “
            <span className="text-vermilion">Riddles</span>” showcase their
            knack for arena-ready hooks and{" "}
            <span className="text-vermilion">emotionally</span> charged
            lyricism.
          </p>
        </div>
      </section>
    </main>
  );
}
export default Musicians;
