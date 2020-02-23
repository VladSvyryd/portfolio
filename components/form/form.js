import f from "./form.module.css";
const form = () => {
  const submitForm = () => {
    console.log("submit form");
    sgMail.setApiKey(
      "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"
    );
    const msg = {
      to: "vladonius@gmail.com",
      from: "test@example.com",
      subject: "Sending with Twilio SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>"
    };
    sgMail.send(msg);
  };
  return (
    <form className={f.form}>
      <label className={f.label}>
        <input type="text" className={f.input} placeholder="Name" />
      </label>
      <label className={f.label}>
        <input type="email" className={f.input} placeholder="Email Address" />
      </label>
      <label className={f.label}>
        <input type="text" className={f.input} placeholder="Subject" />
      </label>
      <textarea
        className={`${f.input} ${f.textfield}`}
        placeholder="Message"
        name="msg"
      ></textarea>
      <button
        className={`${f.button} morphoShadow`}
        onClick={() => submitForm()}
        type="button"
      >
        SEND
      </button>
    </form>
  );
};

export default form;
