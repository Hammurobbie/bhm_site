import utilStyles from "../styles/utils.module.scss";

export default function ContactForm() {
  return (
    <div className={utilStyles.contactForm}>
      <form>
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
            className={utilStyles.radio}
            type="radio"
            name="coc"
            value="coc"
          />
          <label htmlFor="coc">I would like a Chain of Custody form</label>
        </div>
        <div>
          <input
            className={utilStyles.radio}
            type="radio"
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
