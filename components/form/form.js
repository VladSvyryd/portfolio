import f from "./form.module.css";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion, useCycle, useAnimation } from "framer-motion";

const form = () => {
  const [response, setResponse] = useState({
    type: "",
    message: ""
  });

  const popUpFrames = {
    open: (height = 300) => ({
      clipPath: `circle(${height * 2 + 200}px at 140px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: (width = 300) => ({
      clipPath: `circle(0px at ${width / 2}px 40px)`,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    })
  };

  const [isOpen, toggleOpen] = useCycle(false, true);
  const callback = () => {
    toggleOpen();
  };
  const handleSubmit = async (values, setSubmitting) => {
    values = {
      ...values,
      replyTo: `@${values.email}`,
      honeypot: "",
      accessKey: "a1b4756a-145c-4d64-8313-cbb68c921082"
    };
    values = { ...values, replyTo: `@${values.email}` };
    console.log(values);
    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" }
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: "Success",
          message: "Thank you for reaching out to me."
        });
        setSubmitting(false);
        toggleOpen();
      } else {
        setResponse({
          type: "Error",
          message: json.message
        });
        setSubmitting(false);
        toggleOpen();
      }
    } catch (e) {
      console.log("An error occurred", e);
      toggleOpen();

      setResponse({
        type: "error",
        message: "An error occured while submitting the form, please try again."
      });
    }
  };
  const validate = value => {
    let errorMessage;
    if (value.toLowerCase() === "alexsandr11@gmail.com") {
      errorMessage = "Alex, Stop!!! This Page is not for games!!!";
    }
    if (value.toLowerCase() === "zarichna19@gmail.com") {
      errorMessage = "Yuliya, Stop!!! This Page is not for games!!!";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errorMessage = "Invalid email address";
    }
    return errorMessage;
  };
  const isRequired = value => {
    let errorMessage;
    if (value.length <= 0) {
      errorMessage = "This field is required";
    }
    return errorMessage;
  };
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 1
      }
    }
  };
  const plane = {
    closed: {
      scale: 1,
      rotate: 0
    },
    open: {
      translateX: [-500, 0, 0, 1000],
      translateY: [500, 0, 0, -1000],
      transition: {
        duration: 4,
        ease: "easeOut",
        times: [0, 0.2, 0.5, 1],
        repeatDelay: 1
      }
    }
  };

  useEffect(() => {
    let timerId;
    if (isOpen) {
      timerId = setTimeout(callback, 2200);
    } else {
      clearTimeout(timerId);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [isOpen]);
  return (
    <motion.div
      style={{ display: "flex", width: "360px", position: "relative" }}
    >
      <Formik
        initialValues={{ email: "", name: "", subject: "", message: "" }}
        onSubmit={(values, { setSubmitting }) =>
          handleSubmit(values, setSubmitting)
        }
      >
        {({ isSubmitting }) => (
          <Form className={f.form}>
            <div className={f.fieldRow}>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                validate={isRequired}
                className={f.input}
              />
              <ErrorMessage
                className={f.errorMessage}
                name="name"
                component="div"
              />
            </div>
            <div className={f.fieldRow}>
              <Field
                type="email"
                name="email"
                placeholder="Email Address"
                validate={validate}
                className={f.input}
              />
              <ErrorMessage
                className={f.errorMessage}
                name="email"
                component="div"
              />
            </div>
            <div className={f.fieldRow}>
              <Field
                type="text"
                name="subject"
                validate={isRequired}
                className={f.input}
                placeholder="Subject"
              />
              <ErrorMessage
                className={f.errorMessage}
                name="subject"
                component="div"
              />
            </div>
            <div style={{ height: "200px" }}>
              <Field
                type="text"
                name="message"
                validate={isRequired}
                as="textarea"
                className={`${f.input} ${f.textfield}`}
                placeholder="Message"
              />
              <ErrorMessage
                className={f.errorMessage}
                name="message"
                component="div"
              />
            </div>

            <button
              className={`${f.button} morphoShadow ${
                isSubmitting ? "borderSpinner" : ""
              }`}
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={300}
        style={{
          position: "absolute",
          left: "0",
          right: "0",
          marginLeft: "auto",
          marginRight: "auto",
          width: "300px",
          height: "300px",
          pointerEvents: "none"
        }}
      >
        <motion.div className="popUp" variants={popUpFrames}>
          <div
            className={`${
              response.type === "Success" ? "success" : "error"
            } popUpContactForm`}
            onClick={() => toggleOpen()}
          >
            <motion.div
              initial={false}
              animate={isOpen ? "open" : "close"}
              variants={plane}
            >
              {response.type === "Success" ? (
                <svg
                  height="60"
                  viewBox="0 0 60 60"
                  width="60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Page-1" fill="none" fillRule="evenodd">
                    <g
                      id="135---Send"
                      fillRule="nonzero"
                      transform="translate(-1)"
                    >
                      ; #45c467
                      <path
                        id="Shape"
                        d="m59.71 1.31-13.71 14.69-4.66 5-23.27 24.93-15.43-6.3c-.35400402-.1430338-.59943859-.470646-.63722209-.8505801s.13832167-.7494674.45722209-.9594199l55.95-36.65c.4117773-.26721043.9545576-.20875717 1.3.14z"
                        fill="#45c467"
                      />
                      <path
                        id="Shape"
                        d="m59.99 2.19-8.68 55.94c-.0495951.3111221-.2388522.5824362-.5137022.7364302s-.6050622.17373-.8962978.0535698l-16.91-6.91.01-.01 26.79-50.6c.1688652.22635653.2408154.51055978.2.79z"
                        fill="#45c467"
                      />
                      <path
                        id="Shape"
                        d="m59.79 1.4-3.79 7.153-7.69 49.577c-.009412.0426967-.0214346.0847757-.036.126l1.626.664c.2912356.1201602.6214478.1004242.8962978-.0535698s.4641071-.4253081.5137022-.7364302l8.68-55.94c.0408154-.27944022-.0311348-.56364347-.2-.79z"
                        fill="#399953"
                      />
                      <path
                        id="Shape"
                        d="m59.79 1.4-26.79 50.6-.01.01h-.01l-6.98 6.57c-.4813731.3731333-1.1065393.5065863-1.6983146.3625357s-1.0856628-.5499047-1.3416854-1.1025357l-4.96-11.84.07-.07 23.27-24.93 4.66-5 13.71-14.69c.0238109.03242169.0505935.06255215.08.09z"
                        fill="#399953"
                      />
                      <path
                        id="Shape"
                        d="m47.812 54.458c-.1292957.0002138-.2573786-.0249271-.377-.074l-8.764-3.579c-.5114157-.2087636-.7567636-.7925843-.548-1.304s.7925843-.7567636 1.304-.548l8.764 3.579c.4430009.1806068.6960316.649679.6036626 1.1190792-.092369.4694003-.504261.8076284-.9826626.8069208z"
                        fill="#f5f5f5"
                      />
                      <path
                        id="Shape"
                        d="m17 41.858c-.1296296.0003188-.2580599-.0248237-.378-.074l-7-2.858c-.51141568-.2087636-.75676364-.7925843-.548-1.304s.79258432-.7567636 1.304-.548l7 2.859c.4414652.1813404.6932586.6493706.6012985 1.1176859s-.5020407.8063775-.9792985.8073141z"
                        fill="#f5f5f5"
                      />
                      <g fill="#000">
                        <path
                          id="Shape"
                          d="m17.188 46.65 4.864 11.609c.3801236.8311956 1.1206604 1.4419818 2.009 1.657.2290887.0562567.4641051.0847944.7.085.7002659-.0079105 1.3774086-.2517101 1.922-.692l6.517-6.131 16.329 6.67c.2448869.0995992.5066348.1512019.771.152.9968529-.0043287 1.8436677-.7304724 2-1.715l8.681-55.963c.0777267-.56313892-.0828151-1.133189-.443-1.573-.0385227-.05729605-.083114-.11026918-.133-.158-.6830559-.67005188-1.7392874-.77721182-2.543-.258l-55.957 36.655c-.62688026.4152712-.97236357 1.1434461-.89750021 1.8916603.07486337.7482143.55777009 1.3935037 1.25450021 1.6763397zm41.818-44.616-8.728 55.96-15.885-6.487 17.516-33.084c.175871-.3164711.1669459-.7032872-.023334-1.0113101-.19028-.3080229-.532192-.4891376-.8939108-.4735147s-.6867417.2255429-.8497552.5488248l-17.942 33.88-6.815 6.422c-.2409212.1883917-.5548054.2561789-.852.184-.2844206-.0675785-.5240673-.2581232-.654-.52l-4.709-11.24 22.893-24.53c.3772104-.4039963.3554962-1.0372895-.0485-1.4145-.4039963-.3772104-1.0372895-.3554963-1.4145.0485l-22.8 24.424-14.8-6.084z"
                        />
                        <path
                          id="Shape"
                          d="m46 17c.2770594.0001611.5417684-.1146306.731-.317l3.391-3.634c.3769343-.4039963.3549963-1.0370657-.049-1.414s-1.0370657-.3549963-1.414.049l-3.39 3.633c-.2721564.2910512-.3455452.7159021-.1867991 1.0813875.1587462.3654853.5193272.6018443.9177991.6016125z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              ) : (
                <svg
                  height="60px"
                  viewBox="0 0 365.71733 365"
                  width="60px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#f44336">
                    <path d="m356.339844 296.347656-286.613282-286.613281c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503906-12.5 32.769532 0 45.25l286.613281 286.613282c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082032c12.523438-12.480468 12.523438-32.75.019532-45.25zm0 0" />
                    <path d="m295.988281 9.734375-286.613281 286.613281c-12.5 12.5-12.5 32.769532 0 45.25l15.082031 15.082032c12.503907 12.5 32.769531 12.5 45.25 0l286.632813-286.59375c12.503906-12.5 12.503906-32.765626 0-45.246094l-15.082032-15.082032c-12.5-12.523437-32.765624-12.523437-45.269531-.023437zm0 0" />
                  </g>
                </svg>
              )}
            </motion.div>
            <h2>{response.type}</h2>
            <p style={{ textAlign: "center" }}>{response.message}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default form;
