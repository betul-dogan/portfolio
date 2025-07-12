const Hakkimda = () => {
  return (
     <section id="hakkımda" className="py-20 ">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10"
      >

        {/* Profil Fotoğrafı */}
        <img
          src="betul.png"
          alt="Betül"
          className="w-64 h-64 object-cover shadow-lg"
          data-aos="fade-left"
          data-aos-delay="500"
        />

        {/* Yazı */}
        <div  data-aos="fade-right"
          data-aos-delay="500">
          <h2 className="text-3xl font-bold text-center mb-3">Hakkımda</h2>
          <p className="text-gray-700 text-lg mb-4">
            Merhaba, ben <span className="font-semibold">Betül</span>. Frontend Developer olarak, modern ve kullanıcı dostu arayüzler geliştiriyorum. React, Tailwind CSS ve JavaScript teknolojilerini aktif olarak kullanıyorum.
            Node.js hakkında bilgi sahibiyim ve hala öğrenmeye çalışıyorum.
          </p>
          <p className="text-gray-700 text-lg">
            Yazılım geliştirme sürecinde yenilikleri takip etmeyi, tasarımları gerçeğe dönüştürmeyi ve temiz kod yazmayı önemsiyorum.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Hakkimda
