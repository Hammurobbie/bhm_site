import utilStyles from "../styles/utils.module.scss";

export default function ContactForm() {
  const handleEmail = (e) => {
    e.preventDefault();
  };

  return (
    <div className={utilStyles.contactForm}>
      <form onSubmit={handleEmail}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" placeholder="Subject" />
        <label htmlFor="message">Message</label>
        <textarea type="text" name="message" placeholder="Your message" />
        <div>
          <input
            className={utilStyles.checkBox}
            type="checkbox"
            name="coc"
            value="coc"
          />
          <label htmlFor="coc">I would like a Chain of Custody form</label>
        </div>
        <div>
          <input
            className={utilStyles.checkBox}
            type="checkbox"
            name="application"
            value="application"
          />
          <label htmlFor="application">I would like an Application form</label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
