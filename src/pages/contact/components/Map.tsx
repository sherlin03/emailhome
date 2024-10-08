export default function Map() {
  return (
    <section className="relative z-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6999248108027!2d103.9636738745307!3d1.3566534615548558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3cfe9f2f5643%3A0x9a0b97040b5d729f!2sFlora%20Dr%2C%20Singapore!5e0!3m2!1sen!2sin!4v1703660035031!5m2!1sen!2sin"
          height="450"
          className="w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </section>
  );
}
