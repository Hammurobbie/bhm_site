import utilStyles from "../styles/utils.module.scss";

export default function ContactForm() {
  return (
    <div>
      <form className={utilStyles.contactForm}>
        <label htmlFor="name"></label>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="subject" placeholder="Subject" />
        <input
          as="textarea"
          type="text"
          name="message"
          placeholder="Your message"
        />
        <div>
          <input type="radio" name="coc" value="coc" />
          <label htmlFor="coc">I would like a Chain of Custody form</label>
        </div>
        <div>
          <input type="radio" name="application" value="application" />
          <label htmlFor="application">I would like an Application form</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
