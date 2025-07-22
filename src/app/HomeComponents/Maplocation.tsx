import React from "react";

export default function Maplocation() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48580501.954436295!2d-179.3878585!3d40.26686895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb37a82eec3cba0b%3A0x35c656a837be42c1!2sAppcartify%20%7C%20App%20Development%20Service!5e1!3m2!1sen!2sin!4v1753181174811!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}