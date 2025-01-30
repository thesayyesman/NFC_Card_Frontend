// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div className="container">
//         <div className="profile-card">
//           <img
//             src="https://media.istockphoto.com/id/1442179368/photo/maldives-island.jpg?s=612x612&w=0&k=20&c=t38FJQ6YhyyZGN91A8tpn3nz9Aqcy_aXolImsOXOZ34="
//             alt="Profile Picture"
//             className="profile-image"
//           />
//           <h2>Alex Thomson</h2>
//           <p className="title">Director</p>
//           <p className="company">Property Acme</p>
//           <div className="contact-info">
//             <div className="contact-item">
//               <img
//                 src="https://e7.pngegg.com/pngimages/193/250/png-clipart-blue-phone-inside-circle-icon-telephone-call-symbol-smartphone-ringing-phone-miscellaneous-blue-thumbnail.png"
//                 alt="Email Icon"
//               />
//               <span>hello@acme.com</span>
//             </div>
//             <div className="contact-item">
//               <img
//                 src="https://e7.pngegg.com/pngimages/193/250/png-clipart-blue-phone-inside-circle-icon-telephone-call-symbol-smartphone-ringing-phone-miscellaneous-blue-thumbnail.png"
//                 alt="Phone Icon"
//               />
//               <span>+31 6 11019214</span>
//             </div>
//             <div className="contact-item">
//               <img
//                 src="https://e7.pngegg.com/pngimages/193/250/png-clipart-blue-phone-inside-circle-icon-telephone-call-symbol-smartphone-ringing-phone-miscellaneous-blue-thumbnail.png"
//                 alt="Website Icon"
//               />
//               <span>www.acmenet.com</span>
//             </div>
//             <div className="contact-item">
//               <img
//                 src="https://e7.pngegg.com/pngimages/193/250/png-clipart-blue-phone-inside-circle-icon-telephone-call-symbol-smartphone-ringing-phone-miscellaneous-blue-thumbnail.png"
//                 alt="Location Icon"
//               />
//               <span>
//                 Acme LTD.
//                 <br />
//                 1111 AW Amsterdam,
//                 <br />
//                 The Netherlands
//               </span>
//             </div>
//           </div>

//           <button className="add-button">Add to Contacts</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";
import "./App.css"; // Create a separate CSS file for styling

const App = () => {
  const sendEmail = () => {
    var email = "manuarun19@gmail.com"; // Specify the email ID
    var subject = "Tester -- Template"; // Predefined subject
    var body = "Hello, this is the body of the email."; // Predefined body of the email

    // Create a mailto link
    var mailtjjoLink =
      "mailto:" +
      email +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    // Open the email client with the predefined email
    window.location.href = mailtjjoLink;
  };

  const call = () => {
    window.location.href = "tel:+919024090698";
  };

  const openLocation = () => {
    window.location.href = "https://maps.app.goo.gl/5UChp99HUohQ4Eth7";
  };

  const imageToBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result.split(",")[1]);
    reader.onerror = (error) => console.error("Error:", error);
  };

  const handleSaveContact = () => {
    const imageUrl = "https://i.postimg.cc/g2r85npd/IMG-1295.avif"; // Your image URL
    fetch(imageUrl)
      .then((res) => res.blob())
      .then((blob) => {
        imageToBase64(blob, (base64Image) => {
          const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Manu Sharma
TEL:+919024090698
EMAIL:manuarun19@gmail.com
URL:https://sharma-estates.com
PHOTO;TYPE=JPEG;ENCODING=b:${base64Image}
END:VCARD
                `.trim();

          const vcfBlob = new Blob([vCardData], { type: "text/vcard" });
          const vcfUrl = URL.createObjectURL(vcfBlob);

          const a = document.createElement("a");
          a.href = vcfUrl;
          a.download = `Save Contact.vcf`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);

          URL.revokeObjectURL(vcfUrl);
        });
      })
      .catch((error) => console.error("Error loading image:", error));
  };

  const pay = () => {
    const upiId = "9024090698@ybl"; // Replace with your UPI ID
    const txnNote = "Payment for service"; // Transaction note

    // Construct the UPI deep link
    const upiUrl = `upi://pay?pa=${upiId}&pn=MerchantName&cu=INR&tn=${encodeURIComponent(
      txnNote
    )}`;

    // Create a timeout to trigger fallback message
    const timeout = setTimeout(function () {
      alert(
        "If you don't have a UPI app like PhonePe, please download it from the App Store or Google Play."
      );
    }, 2000); // Timeout duration (2 seconds)

    // Try to open UPI app directly using the deep link
    window.location.href = upiUrl;

    // Cancel the timeout if the UPI app is opened
    setTimeout(function () {
      clearTimeout(timeout); // Clear the fallback timeout
    }, 10000); // Time to detect if app was opened (1.5 seconds)
  };

  //   const handleSaveContact = () => {
  //     const vCardData = `
  // BEGIN:VCARD
  // VERSION:3.0
  // FN:Manu
  // TEL;TYPE=cell:9024090698
  // EMAIL:manuarun19@gmail.com
  // URL:https://yourwebsite.com
  // PHOTO;TYPE=JPEG;ENCODING=b:[BASE64_ENCODED_IMAGE]
  // END:VCARD
  //     `.trim();

  //     const blob = new Blob([vCardData], { type: "text/vcard" });
  //     const url = URL.createObjectURL(blob);

  //     // Create a temporary download link
  //     const a = document.createElement("a");
  //     a.href = url;
  //     a.download = `Save Contact.vcf`;
  //     document.body.appendChild(a);
  //     a.click();
  //     document.body.removeChild(a);

  //     // Revoke the URL after download
  //     URL.revokeObjectURL(url);
  //   };

  // const pay = () => {
  //   const phoneNumber = "9024090698"; // Replace with the target phone number

  //   // Amount to be paid
  //   const amount = 100; // Amount in INR (or the currency set by PhonePe)

  //   // Construct the deep link (this is a hypothetical link, you need to check if PhonePe supports this)
  //   const phonePeUrl = `phonepe://pay?mobile=${phoneNumber}&amount=${amount}`;

  //   // Try to open PhonePe app directly using the deep link
  //   window.location.href = phonePeUrl;

  //   // If the app is not installed, fallback to a web URL
  //   setTimeout(function () {
  //     // If PhonePe is not opened (user doesn't have the app), you can fallback to a website or show a message
  //     alert(
  //       "If you don't have PhonePe installed, please download it from the App Store or Google Play."
  //     );
  //   }, 2000);
  // };

  const handleDownloadPdf = async () => {
    try {
      const pdfUrl =
        "https://res.cloudinary.com/dm63bvv8b/raw/upload/v1733893839/partners/fgzi7to4sfhkxd7ccxi6";
      const response = await fetch(pdfUrl);

      if (!response.ok) {
        throw new Error(`Failed to download PDF: ${response.statusText}`);
      }

      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.setAttribute("download", `Partner_Ki_PDF.pdf`);
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Failed to download PDF. Please try again.");
    }
  };

  return (
    <div className="container">
      {/* Header with background image */}
      <div className="header">
        <img
          src="../src/assets/my photo.jpeg"
          // src="data:image/jpeg;base64,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"
          alt="Scenic Background"
          className="background-image"
        />
      </div>

      {/* Profile Section */}
      <div className="profile">
        {/* <img
          src="https://media.istockphoto.com/id/1442179368/photo/maldives-island.jpg?s=612x612&w=0&k=20&c=t38FJQ6YhyyZGN91A8tpn3nz9Aqcy_aXolImsOXOZ34="
          alt="Profile"
          className="profile-image"
        /> */}
        <h1>Manu Sharma</h1>
        <p>Director</p>
        <p>Sharma Estates & Co.</p>
      </div>

      <div className="social-media-section">
        <div className="social-media-icon">
          <a href="https://www.instagram.com/manu_sharma_1903/">
            <img
              src="data:image/png;base64,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"
              alt="Instagram"
            />
          </a>
        </div>
        <div className="social-media-icon">
          <img
            src="data:image/png;base64,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"
            alt="Facebook"
          />
        </div>
        <div className="social-media-icon">
          <a href="https://wa.me/9024090698">
            <img
              src="data:image/png;base64,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"
              alt="WhatsApp"
            />
          </a>
        </div>
        <div className="social-media-icon">
          <a href="https://x.com/manusharma1903">
            <img
              src="data:image/png;base64,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"
              alt="Twitter"
            />
          </a>
        </div>
        <div className="social-media-icon">
          <a href="https://www.linkedin.com/in/manu-sharma-a89146198/">
            <img
              src="data:image/png;base64,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"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>

      {/* Contact Information */}
      <div className="contact">
        <p onClick={sendEmail}>
          <i className="fas fa-envelope"></i> manuarun19@gmaol.com
        </p>

        <p onClick={call}>
          <i className="fas fa-phone"></i>
          +91-9024090698
        </p>

        <p>
          <i className="fas fa-globe"></i> www.sharmaestates.com
        </p>

        <p onClick={openLocation}>
          <i className="fas fa-map-marker-alt"></i> Sharma Estates LTD, Jaipur,
          India
        </p>
      </div>

      <hr />

      <div className="utilities">
        <p className="utility-heading">Quick Links</p>

        <div className="utility-items">
          <div className="social-media-icon" onClick={pay}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEVfJZ////9TAJlYFZzVy+SmkMZaGZxcHp1OAJfXzuVdIZ6We718Va9dIJ5XEptVCZrGudp/WrCOb7ifhsKumszMwN7s5/PBs9fk3u708fi0os92TatuP6f6+PxoNaRiKqGehcLj3O2IZrWwnc2Rc7qBXbFpN6SGZLS8rNR0SapoNqTq5fF1SqptPaaljcarlcoexNUrAAAMCklEQVR4nO2da3fquA6GExtiE0oM4X4v3dDL0ML//3eH0F3IxXZiRzKZznnXmk+zdvDTOJYly5Lno2s+a00X7W48WH5ttp7nbTer5SHunhf9zmyN//Me5sOP4z/7FeGEiIgGrBd6PwoZC2gkyOX/fXYXrQnmILAIJ/3TknMRBT1PLxZEF86n9niONBIMwsl0z7igrIQtw0kF97pTjJcJTtgabrkIDODuUzcQfHtqQQ8IlnAcE0LDchg1JSUkHoOOCZBwHFu+vJwCwiEhoQhnQ0Eg8H4gyfMOaGQwhNMVrzU5JaJ8NQUZGwDh/CyEybpZVT1BTgAmpDbhcQ/++u6iPJ49mHD2wuG+PpkCftg9kBCdLxHjg1qMNQjnewd834wvNTY79oQnR3yJAv5s7YXYEk5F5IwvESULp4SzFUFbP1Ui/+zcEQ45hv0rU493HRG2ArcT9C4aWexXzQm73PkEvYvH6IS7kD6O7yJKO7iE50e+wKtCPkQknC/Fg/kSiZXRftyEsIPiQpiLEZNQhwHhH/5otB+F/IxB+EIeDZYSeQMnXH89dg3Ni75W/RgrEh6Nop8uxERF37gaYefhRqKokFdbbyoR9huzxmTE+1CE75aAIRWEc0IirBnOq3hUFQhHVoAhJb1hfzeZHzuLJZazzEcQhGcLQBbxzXl3f8ZkjzTPKxjGUkJzQCb4x+KYe0xHlB2z2akcsYzQeIoKPniXmao5Q0Ism6glhAtDwJBNVSGjCdKeiL/XIZyavkGuCfvtsL5FvdHQErZMx8S020Uss8q1TrGOcGY8okAfZPiDNVHz61pFwrkw36oR/X64i+NBh1QTL9YQvlpsRUKmRzzgeCjsy4bwzWowLNIfMXzh7ODoiznh2fKbCYnWq1kjmUXyx5TQeBm9KeQ7HeIE6TxAuaAqCOd1xqFfvTtINkMoVgAF4arW58K1wXcks8iWJoTDmqu6fpsxwjGLQr4JlxLWn0j6zSKSWZQvAFJCgOQKvfs9QDGLYViVMIb4fb3jZrObKBeVHTBKCMcwKwHRnaCsAxSbIQu/SQihzj+J7sj2iBKfDIMqhF2wb4ToPA0csxgVJ06BENJPFTp30di7riRe2DMWCDeQ+8ZooEG03flqxVZlhAvYn6WKjcZVewyzSPI5mznCNfTflRb+pik9IZjFUOgJn8F/M9ho/O8NglmMTjrCCcLXz7Zqt3+OkZrKs7+XJXzBOF9gmsjGEeFPGuzVhEgRTV1kw97TVitrMTKEA6RjMF1kA8EsBpmgTZoQKyitj2y04c1i5iWmCQ+IZ/WayEYMngiYeYkpQvMQt4k0kY0l+PqWDoKnCGPcrGZNZAPcLKaX0zvhHDsdQR3ZmEfQZjFlE++EJ/SUIHVkA/wDoW0JoYOkLnVkA9oshqRIOHWRWKnODbXNaFFJ3FyMG+EK5zwhJ3Vk4wQ7h+5+4g8hnrXPSh3ZADaLN6v/QwjvNimkjmzAmkU6zBG6Sx5VRza2kGbx5gn/JRxbEPaonYjK7Z9HIitOaswsMs4QWuxnxOrUttOp8hWmXY3bOT9ZE38JzdeZqK0eGKDmn9avkacJx8bGMEQtqJHWwXYBEv0UofkkLcmcgdTWctP6d4jfhObrjEPClu06T+6EFs9wSGj9Er8vnlwJLdwKl4RDy8Xm2+h7ln8kl4Tvlk5BuP0htIkDuyS0dnuuuaCe5RP+FYRXFyoh7FpYnECdSNYcwmu4JiH0LNaqnu5MqSmEXvBNaBeC4liVqyAJkw/Rs9myJYqUyYANIkw2bhfCtp25KUkHbgQhPV0Jn+wclOKJOZbs45xJNp9n794HZjeOrVXnogZPCO3PfRk/Y5SQm/YzatcJc5LjhdB66+4lVY68p8G3nuQe8e7jSaUPxXEUz4YyaoXIxPhCuKgXxWN/JeSR0A5nKqnugELGNaPRhdBmRyNRoCBUzxDVrXpIwsuuxvM/YGJ4zSS8bL08qEhpMwkvfr63BnpgQwn53Jv98nc48zRDMFJTCVteH+jcsKGEYurVNIc3NZQwWniWnkVBDSWkbQ/I4DeVMOh6MdChXUMJWexBpXo1lLA38JZAyToNJQyX3hfQoxpKeOHbAD2pqYQbbwv0pKYSQvE1lxBO/ycsyhXh7/8Ofzvh5tfbw9Wv39M8eQOgvNKGErLDf8C3+O3+4fOv9/HP/4E4DVSOfkMJRd+rc7iWVkMJSQcu5i1PIdo9mvDoQV13UhSj05wwuzm3WHtQD1SV+HkwIfE9qMsy34mARW2Uu0IXhOzzQrgHMvlEPl71jsLJGXD3QjgCMoiKNDD1yY8LwmhxIbRL+iqK7KTjVZ/AuiAkSS7GEchcCMUtWOVX4IKQT5KcKKAnUsUVE6W9cPIOr1lfSxj/iT3JB6wsz+aAMBmTB3cBWLGY+v5B/qU7IEzmladb7cykWGouepGWvXKQEyXGV0Koki2Ruu70NN8hsUdJMFIUrgEkTCxYkucNZPJ7mkKw/vsHJ4IGQUCTTsf8o62uIgFHeL1+lvwHtavRFiz25633dnfffT4vxvrOFHCEV4/O9r6FTNSg+4sTwtt9C7DaSbRhhLc7M9aXw/ISIN1fwQjDjf9DaHs5rPBIhQf1IEJ6uhFCxWqK5eAeSpi6fwh3Gz9qFKF/JwQrviOtkfogwsw9YKiNm3or9gDCvyUHrO/jKxTWvywENZbMfXzAGlFs0xDCXE0Fm7oYqid/NoMwVxfDB6wwRGsiAhHmapuAGf1EwabWtwhDWKhPA1ptixGLrrbAhIUaQzV7BRSeH1v30YYh7BXqREHX+gqs+2jDEEpqffnQnTVENNJ+jrsuZpxGUq/N9jqwWmHED1MFZOfkEcxIFL0XE8atm8gEf32e7tKYk8709MkJDVGjidK6iWDhmqy+2zyGr59Py4+vreBJQOp7UUMkTB9IpwgxqhbfFCa3RsPMp45ImC5Cmy739IZbwDQvPEJ2SD0uTYhbhLYgPMJM1eJMyS63LxGNkGWq+mUI3b5ENMJs4els2TXkUsJZYRHmSudkCdFrCaeFRZjro5krnXcCr62tFhIhfc4+Ll8c0KKro62QCEnOq8kTTt0VMsUhJPma2oUCj7B+onYsGIS9f/KPKxC6sxgohMUWBcUinc+uFhsMQknMXVKGlDlabDAIJecmEkKMtiEyIRDKGjDISsnC9SXTCp6QyvKUpcVyQyfzFJwwlJ6ySwndFGhXpfpZ/7i8D4q84PHZRRsBVaqfLaE4SR+nKOkMlM2nVfgKSsg+5I9T9QN20gtiB0ioPLhUleXG6kucliK93+6XlYfPysLjWL3s05I307YiJMp8LHVp9RcHVlHWXMfqEg9Vd8vUFI9HavSeES/uI21aozHFolVCuMZo3ZcXjUaZjMb1i8XGP1R1HS8hxA2C30YX8ehz8KMlsYmFFdurViR0sqAmSpWLtPnn+hwefRMHpEbvsNI3ci8h9BfNR9T3OC8l9EdNR+Tq/PlqhP652Yj6Fu6VCJuNWA5YgbDJE7V0ilYjbO5yU7bIVCZEaoNeWyVmwoTQb0kvLj1WoaZ5qzmhPxPOgv0Vxaj2ho4xoT/fuGquV030q2riXPXWW2/uTqXKRaq3SDFoLnZuzsfIDZprmLRPa5FmfIxMVFtjzAn9+cpFCK5MYmmUgmzYAm/48JkaVtio1SH0O/SxayoNd4YjNm9jGD9wgxNKIlfwhP44etRrjAKLO0dWrSi73El75JwYfy4fGhChv9s4N/8hWe2sxmrbTvS9TiNbC0XWN3CtG6aun7m7NL+Ay88GUQl9f/Ji36zXkC+ucc2oVtPb3cABY8Df9BUKMAkvjAfkuRrwl1p8tQkvvnHM8dYcyvcV/VxEwst+/EQEhn1kgrQBOrvBNJ+ersBfJOUrkAoNQIRJF3RidTAmV0DIsObndxNgA/FxzEEgA8HjOjc0c4JtkT6OCal1chxSQuJKYdDKAm8C3zptuQisKC8vbzusX7EgJ4w295Np1+M/N9SqiVHBg/0Uo2EkBmGi+bj9RDiJgjLOXpDUjVqe+hh0ibAIr5q0Ft3PCycREQ1YKvc47LEgqYhFOF/Fo3Ftq64TKuG31rNOf3HuxoflapP0KdhuvpaDuNteTFszB71a/wcYJL70mMrD5AAAAABJRU5ErkJggg=="
              alt="PhonePe Logo"
            />
          </div>

          <div className="social-media-icon" onClick={handleDownloadPdf}>
            <img
              src="data:image/jpeg;base64,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"
              alt="Download Pdf"
            />
          </div>
        </div>
      </div>

      {/* Add to Contacts Button */}
      <button className="add-to-contacts" onClick={handleSaveContact}>
        Add to Contacts
      </button>
    </div>
  );
};

export default App;
