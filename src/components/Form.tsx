import { useRef, useState } from "react";
import styles from "../styles/Form.module.css";

const EmailRegex = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export default function Form() {
  const [stateFormData, setFormData] = useState({
    RadioInputs: {
      InteriorRendering: 0,
      ExteriorRendering: 0,
      ["360°Rendering"]: 0,
      AerialRendering: 0,
      Animation: 0,
      Typology: 0,
    },
    Email: "",
    PromoCode: "",
  });
  const [stateFormError, setFormError] = useState({
    email: !EmailRegex.test(stateFormData.Email),
    click: false,
  });
  const [stateBttn, setBttnState] = useState<0 | 1 | 2 | 3>(0);
  const refButton = useRef<HTMLButtonElement>(null);

  const inputLoopData = [
    {
      position: 0,
      title: "Interior Rendering",
      maxInputValue: 5,
      numbers: true,
      setForm: (value: any) =>
        setFormData((prevState) => ({
          ...prevState,
          RadioInputs: {
            ...prevState.RadioInputs,
            InteriorRendering: value,
          },
        })),
    },
    {
      position: 1,
      title: "Exterior Rendering",
      maxInputValue: 5,
      numbers: true,
      setForm: (value: any) =>
        setFormData((prevState) => ({
          ...prevState,
          RadioInputs: {
            ...prevState.RadioInputs,
            ExteriorRendering: value,
          },
        })),
    },
    {
      position: 2,
      title: "360° Rendering",
      maxInputValue: 5,
      numbers: true,
      setForm: (value: any) =>
        setFormData((prevState) => ({
          ...prevState,
          ...prevState,
          RadioInputs: {
            ...prevState.RadioInputs,
            ["360°Rendering"]: value,
          },
        })),
    },
    {
      position: 3,
      title: "Aerial Rendering",
      maxInputValue: 5,
      numbers: true,
      setForm: (value: any) =>
        setFormData((prevState) => ({
          ...prevState,
          RadioInputs: {
            ...prevState.RadioInputs,
            AerialRendering: value,
          },
        })),
    },
    {
      position: 4,
      title: "Animation (Select aproximate value)",
      maxInputValue: 5,
      numbers: false,
      titlesInput: ['0"', '10"', '20"', '30"', '60"', '90"'],
      setForm: (value: any) =>
        setFormData((prevState) => ({
          ...prevState,
          RadioInputs: {
            ...prevState.RadioInputs,
            Animation: value,
          },
        })),
    },
    {
      position: 5,
      title: "Typology",
      maxInputValue: 4,
      numbers: false,
      titlesInput: ["House", "Building", "Commercial", "Park", "Other"],
      setForm: (value: any) =>
        setFormData((prevState) => ({
          ...prevState,
          RadioInputs: {
            ...prevState.RadioInputs,
            Typology: value,
          },
        })),
    },
  ];

  function InputLoopRender() {
    const items: JSX.Element[] = [];

    for (let indexItems = 0; indexItems < inputLoopData.length; indexItems++) {
      const labelElements: JSX.Element[] = [];
      const inputData = inputLoopData.find(
        (element) => element.position === indexItems
      );

      for (
        let indexLabels = 0;
        indexLabels <= inputData?.maxInputValue!;
        indexLabels++
      ) {
        labelElements.push(
          <label className={styles.labelContainer} key={indexLabels}>
            <p className={styles.titleLabel}>
              {inputData?.numbers
                ? indexLabels
                : inputData?.titlesInput![indexLabels]}
            </p>
            <input
              defaultChecked={indexLabels === 0}
              type="radio"
              name={inputData?.title}
              value={indexLabels}
              className={styles.inputLabel}
              onClick={() => inputData?.setForm(indexLabels)}
            />
            <span className={styles.spanLabel} />
          </label>
        );
      }

      items.push(
        <div className={styles.inputsGroup} key={indexItems}>
          <p className={styles.inputsGroupTitle}>{inputData?.title}</p>
          <div className={styles.labelsGroup}>{labelElements}</div>
        </div>
      );
    }

    return items;
  }

  function SendForm(bttn: any) {
    bttn.preventDefault();
    setFormError((prevState) => ({ ...prevState, click: true }));
    if (!stateFormError.email && stateBttn === 0) {
      const SendToServer = (jsonResponse: any) =>
        fetch("http://localhost:3001/", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...stateFormData,
            country: !jsonResponse.ok
              ? jsonResponse.country
              : navigator.language,
          }),
        }).then(async (data) => {
          const error = await data.json();
          if (error.state === 200) {
            refButton.current!.animate(
              [
                { width: "200px", height: "45px" },
                { width: "250px", height: "90px" },
              ],
              {
                easing: "ease",
                duration: 300,
                fill: "forwards",
              }
            );
            setBttnState(2);
            setTimeout(() => {
              setBttnState(0);
              refButton.current!.animate(
                [
                  { width: "250px", height: "90px" },
                  { width: "200px", height: "45px" },
                ],
                {
                  easing: "ease",
                  duration: 300,
                  fill: "forwards",
                }
              );
            }, 5500);
          } else {
            setBttnState(3);
            setTimeout(() => {
              setBttnState(0);
            }, 3500);
          }
        });
      setBttnState(1);
      try {
        setTimeout(() => {
          fetch("https://ipinfo.io/json?token=b96ad3e9a1dd40")
            .then((res) => res.json())
            .then((jsonResponse: any) => SendToServer(jsonResponse))
            .catch((jsonResponse: any) => SendToServer(jsonResponse));
        }, 400);
      } catch (error) {
        setTimeout(() => {
          setBttnState(3);
          setTimeout(() => {
            setBttnState(0);
          }, 3500);
        }, 400);
      }
    }
  }

  return (
    <>
      <div className={styles.inputsRadioContainer}>{InputLoopRender()}</div>
      <div className={styles.inputsTextContainer}>
        <label>
          Email
          <input
            type="text"
            className={
              styles.inputsText +
              (stateFormError.click
                ? stateFormError.email
                  ? " " + styles.errorEmail
                  : ""
                : "")
            }
            placeholder="Put Your Email"
            onChange={(e) => {
              setFormData((prevState) => ({
                ...prevState,
                Email: e.target.value,
              }));
              setFormError((prevState) => ({
                ...prevState,
                email: !EmailRegex.test(e.target.value),
              }));
            }}
          />
        </label>
        <label>
          Promo Code (Optional)
          <input
            type="text"
            className={styles.inputsText}
            placeholder="Enter Promo Code"
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                PromoCode: e.target.value,
              }))
            }
          />
        </label>
      </div>
      <button
        className={
          styles.bttnButton +
          (stateBttn === 0
            ? !stateFormError.email
              ? " " + styles.bttnActive
              : ""
            : "")
        }
        style={{ margin: "0 auto 60px" }}
        onClick={SendForm}
        ref={refButton}
      >
        <p style={stateBttn === 0 ? { opacity: 1 } : { opacity: 0 }}>
          REQUEST QUOTE
        </p>
        <div
          style={stateBttn === 1 ? { opacity: 1 } : { opacity: 0 }}
          className={styles.Loader}
        >
          <span />
          <span />
          <span />
          <span />
        </div>
        <p style={stateBttn === 2 ? { opacity: 1 } : { opacity: 0 }}>
          Thanks for the information.
          <span />
          You'll receive the quote
          <span />
          in the next few hours.
        </p>
        <p style={stateBttn === 3 ? { opacity: 1 } : { opacity: 0 }}>Error!</p>
      </button>
    </>
  );
}
