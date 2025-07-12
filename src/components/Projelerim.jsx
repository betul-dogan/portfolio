const Projelerim = () => {
  const projects = [
    {
      id: 1,
      name: "İngilizce Sözlük",
      image: "resim1.png",
      github: "https://github.com/betul-dogan",
    },
    {
      id: 2,
      name: "Araç Kiralama Sitesi",
      image: "resim2.png",
      github: "https://github.com/betul-dogan",
    },
    {
      id: 3,
      name: "Kelime Bulma Oyunu",
      image: "resim5.png",
      github: "https://github.com/betul-dogan",
    },
    {
      id: 4,
      name: "Portfolio",
      image: "resim4.png",
      github: "https://github.com/betul-dogan",
    },
  ];

  return (
    <section id="projelerim" className="py-20">
      <h2
        className="text-3xl font-bold text-center mb-10"
      >
        Projelerim
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-900 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projelerim;
