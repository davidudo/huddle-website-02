function ContactContent({ id, icon_url, alt_text, content }) {
  return (
    <div key={id} className="contact-content">
      <img src={icon_url} alt={alt_text} />
      <p>{content}</p>
    </div>
  );
}

export default ContactContent;
