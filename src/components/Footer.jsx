import React, { useState } from "react";

const Footer= () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) {
      alert("Lütfen mesajınızı yazın.");
      return;
    }

    const subject = encodeURIComponent("İletişim Formu");
    const body = encodeURIComponent(`Gönderen: ${email}\n\nMesaj:\n${message}`);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=btlll.dgnn@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <footer id="iletisim" className="py-5 bg-gray-300 ">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h3 className="text-xl mb-0 font-semibold">Bana Ulaşın</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
         
          <textarea
            placeholder="Mesajınız"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-4 py-2 rounded  h-24 resize-none"
            required
          />
          <button
            type="submit"
            className="bg-black hover:bg-gray-600 w-60 mx-auto transition px-6 py-2 rounded text-white
      "
          >
            Gönder
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
