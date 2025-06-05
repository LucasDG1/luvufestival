import artists from "@/data/artists.json";

export default function Agenda() {
    const saturdayArtists = artists.filter((artist) => artist.day === "sat");
  return (
    <main className="py-15 flex flex-col items-center px-6">
      <section className="w-full mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {saturdayArtists.map((artist, index) => (
          <article
            key={index}
            className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={artist.img}
              alt={artist.artist}
              className="w-full md:w-1/3 object-cover"
            />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold">{artist.artist}</h3>
                <p className="text-sm text-gray-500 mb-2">{artist.genre} • {artist.stage}</p>
                <p className="text-md text-gray-700 font-medium">
                  {artist.start} – {artist.end}
                </p>
                <p className="text-gray-600 mt-2 italic">{artist.shortDesc}</p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Hit song: <em>{artist.song}</em></p>
                {artist.vid && (
                  <div className="mt-2 aspect-video">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src={artist.vid}
                      title={artist.artist}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
