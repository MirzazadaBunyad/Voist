import { useState } from "react";
import styles from "./landingPage.module.scss";
import "./fonts.css";
import voistLogo from "../../assets/img/voistLogo.svg";
import landingPageArrow from "../../assets/img/landingPageArrow.svg";
import landingPageArrTwo from "../../assets/img/landingPageArrTwo.svg";
import landingPageArrThree from "../../assets/img/landingPageArrThree.svg";
import landingPageArrFour from "../../assets/img/landingPageArrFour.svg";
import landingPageArrBlack from "../../assets/img/landingPageArrBlack.svg";
import questionArr from "../../assets/img/questionArr.svg";
import highlightIcon from "../../assets/img/highlightIcon.svg";
import featureCall from "../../assets/img/featureCall.svg";
import faceIcon from "../../assets/img/faceIcon.svg";
import chartIcon from "../../assets/img/chartIcon.svg";
import landingLoc from "../../assets/img/landingLoc.svg";
import callChatIcon from "../../assets/img/callChatIcon.svg";
import shareIconFooter from "../../assets/img/shareIconFooter.svg";
import callIconFooter from "../../assets/img/callIconFooter.svg";
import callLogsSummary from "../../assets/img/callLogsSummary.png";
import callLogsSummaryTwo from "../../assets/img/callLogsSummaryTwo.png";
import featuredImgOne from "../../assets/img/featuredImgOne.png";
import featuredImgTwo from "../../assets/img/featuredImgTwo.png";
import companyIcon from "../../assets/img/companyIcon.svg";
import inputMessageIcon from "../../assets/img/inputMessageIcon.svg";
import toggleIcon from "../../assets/img/toggleIcon.svg";
import { BsArrowRight } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMiniArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Carousel from "../Carousel/Carousel";

function LandingPage() {
  const menuItems = [
    { name: "About", to: "about", offset: -300 },
    { name: "Features", to: "features", offset: -200 },
    { name: "Testimonials", to: "testimonials", offset: -150 },
    { name: "FAQ", to: "faq", offset: -80 },
    { name: "Contact", to: "contact", offset: -50 },
  ];

  const [actMenuItem, setActMenuItem] = useState(menuItems[0].name);

  const handleMenuItemClick = (itemName) => {
    setActMenuItem(itemName);
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const accordionItems = [
    {
      title: "What is Voist?",
      content:
        "Voist is an AI-powered platform that transforms customer service through automated transcripts, emotion analysis, AI-powered scoring, and call intent identification.",
    },
    {
      title: "How does Voist's AI improve customer service?",
      content:
        "By analyzing call content and emotions in real-time, Voist provides insights for personalized customer interactions and continuous improvement in service quality.",
    },
    {
      title: "Can Voist integrate with existing customer service systems?",
      content:
        "Yes, Voist is designed for easy integration with most existing customer service platforms to enhance functionality without disrupting current operations.",
    },
    {
      title: "Is Voist suitable for businesses of all sizes?",
      content:
        "Absolutely, Voist offers scalable solutions tailored to meet the needs of both small businesses and large enterprises.",
    },
    {
      title: "How does Voist ensure the privacy and security of data?",
      content:
        "Voist adheres to strict data privacy and security protocols, ensuring all customer and call data are encrypted and securely stored.",
    },
    {
      title: "What kind of support does Voist offer?",
      content:
        "Voist provides comprehensive support ranging from online resources and email support to dedicated account management for enterprise clients.",
    },
    {
      title: "How can I get started with Voist?",
      content:
        "To get started, simply contact us for a demo request. Our team will guide you through the setup process and help customize Voist for your specific needs.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    message: "",
  });

  const [isTyping, setIsTyping] = useState(false);
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setIsTyping(true);
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://0ia78onnye.execute-api.eu-central-1.amazonaws.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            companyName: formData.companyName,
            email: formData.email,
            message: formData.message,
          }),
        }
      );
      // const data = await response.json();
      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }
      console.log("Form data sent successfully!");
    } catch (error) {
      console.error("Error sending form data:", error.message);
    }
    setIsTyping(false);
  };
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <ScrollLink
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={400}
            >
              <img
                className={styles.logoImg}
                src={voistLogo}
                alt="Voist Logo"
              />
            </ScrollLink>
          </div>
          <div className={styles.nav}>
            <ul className={styles.navList}>
              {menuItems.map((menuItem) => (
                <li key={menuItem.name}>
                  <ScrollLink
                    to={menuItem.to}
                    spy={true}
                    smooth={true}
                    offset={menuItem.offset}
                    duration={400}
                    className={
                      actMenuItem === menuItem.name ? styles.active : ""
                    }
                    onClick={() => handleMenuItemClick(menuItem.name)}
                  >
                    {menuItem.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.buttons}>
            <div className={styles.hero}>
              <Link to="/authentication" className={styles.started}>
                Get started <BsArrowRight className={styles.arrowRight} />
              </Link>
            </div>
            <div className={styles.toggle}>
              <img src={toggleIcon} alt="Toggle Icon" />
            </div>
          </div>
        </div>
      </header>

      <main className={styles.mainContainer}>
        <section name="home" className={`${styles.backgroundVector} element`}>
          <div className={styles.textContainer}>
            <div className={styles.arrow}>
              <div className={styles.arrowOneContainer}>
                <img
                  className={styles.arrowOne}
                  src={landingPageArrow}
                  alt="Arrow one"
                />
              </div>
              <div className={styles.arrowTwoContainer}>
                <img
                  className={styles.arrowTwo}
                  src={landingPageArrTwo}
                  alt="Arrow two"
                />
              </div>
            </div>
            <div className={styles.text}>
              <h1 className={styles.title}>
                Transform Customer Conversations into Insights with Voist.
              </h1>
              <p className={styles.description}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.
              </p>
            </div>
            <div className={styles.btns}>
              <Link to="/authentication" className={styles.btnStarted}>
                Get started <BsArrowRight className={styles.arrowRight} />
              </Link>
              {/* <button className={styles.learnMoreBtn}>Learn more</button> */}
            </div>
          </div>

          <div className={styles.imgContainer}>
            <img
              className={styles.callLogsImg}
              src={callLogsSummary}
              alt="Call Logs Summary One"
            />
          </div>

          {/* burda about hissesi baslayir */}
          <div name="about" className={`${styles.features} about`}>
            {/* // */}
            <div className={styles.featuredImgs}>
              <img
                className={styles.featuredImgOne}
                src={featuredImgOne}
                alt="Black image"
              />
              <img
                className={styles.featuredImgTwo}
                src={featuredImgTwo}
                alt="Green image"
              />
            </div>

            <div className={styles.featureTextContainer} >
              <div className={styles.arrow}>
                <img
                  className={styles.featureArrow}
                  src={landingPageArrow}
                  alt="Feature arrow"
                />
              </div>
              <div className={styles.featureContainer}>
                <div className={styles.text}>
                  <h2 className={styles.heading}>
                    Tailored experience that fits your business needs.
                  </h2>
                  <p className={styles.paragraph}>
                    Aliquet pellentesque ullamcorper fringilla nec. Tristique
                    pharetra donec diam pretium risus in. Eu pellentesque
                    faucibus quis lacus sed. At molestie augue bibendum nisl
                    adipiscing molestie sem massa. Amet eget eleifend ante
                    porttitor a. Sed neque nulla in mattis viverra dolor.
                    Condimentum amet feugiat amet amet est mattis. Adipiscing
                    nisl sit hendrerit vel a sollicitudin proin.
                  </p>
                </div>
                <div className={styles.btns}>
                  <Link to="/authentication" className={styles.btnRequest}>
                    Get started
                    <BsArrowRight className={styles.arrowRight} />
                  </Link>
                  <ScrollLink
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={400}
                    to="form"
                    className={styles.btnContact}
                  >
                    Contact us
                  </ScrollLink>
                </div>
              </div>
            </div>
            {/* // */}
          </div>
        </section>

        {/* // */}
        <section name="features" className={`${styles.secKeyFeatures} element`}>
          <div className={styles.keyFeatures}>
            <img
              src={landingPageArrow}
              className={styles.keyFeatArrOne}
              alt="Arrow one"
            />
            <div className={styles.keyFeatText}>
              <h3 className={styles.keyFeatHeading}>Key features of Voist</h3>
              <p className={styles.keyFeatParagraph}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.
              </p>
            </div>
            <img
              src={landingPageArrThree}
              className={styles.keyFeatArrTwo}
              alt="Arrow two"
            />
          </div>
          <div className={styles.keyFeatElements}>
            <div className={styles.automatTranscripts}>
              <div className={styles.autoTranscriptsImgContainer}>
                <img
                  src={featureCall}
                  className={styles.autoTranscriptsImg}
                  alt="Call Icon"
                />
                <div className={styles.circle}></div>
              </div>
              <div className={styles.autoTranscriptsInfo}>
                <h3 className={styles.autoTranscriptsHeading}>
                  Automated Transcripts
                </h3>
                <p className={styles.autoTranscriptsParagraph}>
                  Automated Transcripts convert calls into text for
                  straightforward analysis.
                </p>
              </div>
            </div>
            <div className={styles.analysisEmotions}>
              <div className={styles.analysisEmotImgContainer}>
                <img
                  src={faceIcon}
                  className={styles.analysisEmotImg}
                  alt="Face Icon"
                />
                <div className={styles.circle}></div>
              </div>
              <div className={styles.analysisEmotInfo}>
                <h3 className={styles.analysisEmotInfoHeading}>
                  Analysis of emotions
                </h3>
                <p className={styles.analysisEmotInfoParagraph}>
                  Measure customer sentiments in real time to tailor responses
                  effectively.
                </p>
              </div>
            </div>
            <div className={styles.aiScoring}>
              <div className={styles.aiScorImgContainer}>
                <img
                  src={chartIcon}
                  className={styles.aiScorImg}
                  alt="Chart Icon"
                />
                <div className={styles.circle}></div>
              </div>
              <div className={styles.aiScorInfo}>
                <h3 className={styles.aiScorInfoHeading}>AI-Powered Scoring</h3>
                <p className={styles.aiScorInfoParagraph}>
                  Objectively assess call quality to promote continuous agent
                  improvement.
                </p>
              </div>
            </div>
            <div className={styles.callIdent}>
              <div className={styles.callIdentImgContainer}>
                <img
                  src={callChatIcon}
                  className={styles.callIdentImg}
                  alt="Call Chat Icon"
                />
                <div className={styles.circle}></div>
              </div>
              <div className={styles.callIdentInfo}>
                <h3 className={styles.callIdentInfoHeading}>
                  Call Intent Identification
                </h3>
                <p className={styles.callIdentInfoParagraph}>
                  Precisely categorize call reasons, streamlining routing and
                  resolution processes.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* // */}

        {/* // */}
        <section className={styles.callLogsSumSec}>
          <img
            className={styles.callLogsSumImg}
            src={callLogsSummaryTwo}
            alt="Call Logs Summary Two"
          />
        </section>
        <section className={styles.requestDemo}>
          <div className={styles.requestDemoContainer}>
            <div className={styles.requestDemoText}>
              <img
                className={styles.requestDemoImg}
                src={landingPageArrBlack}
                alt="Demo img one"
              />
              <img
                className={styles.requestDemoImgTwo}
                src={highlightIcon}
                alt="Demo img two"
              />
              <h3 className={styles.requestDemoHeading}>
                For a tailored experience that fits your business needs, contact
                us to request a demo.
              </h3>
              <p className={styles.requestDemoParagraph}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.
              </p>
            </div>
            <div className={styles.requestDemoBtns}>
              <Link to="/authentication" className={styles.requestDemoBtn}>
                Get started
                <BsArrowRight className={styles.arrowRight} />
              </Link>
              <ScrollLink
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={400}
                to="form"
                className={styles.contactUsBtn}
              >
                Contact us
              </ScrollLink>
            </div>
          </div>
        </section>
        <section name="testimonials" className={`${styles.trustedBy} element`}>
          <div className={styles.trustedByContainer}>
            <img
              className={styles.trustedByImg}
              src={landingPageArrow}
              alt="Arrow one"
            />
            <img
              className={styles.trustedByImgTwo}
              src={landingPageArrFour}
              alt=""
            />
            <h3 className={styles.trustedByHeading}>
              Trusted by Leading Companies
            </h3>
            <p className={styles.trustedByParagraph}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.
            </p>
          </div>
          <div className={styles.slider}>
            <Carousel />
          </div>
        </section>
        <section name="faq" className={`${styles.questions} element`}>
          <div className={styles.questionsContainer}>
            <img
              className={styles.arrowOne}
              src={landingPageArrow}
              alt="Arrow one"
            />
            <div className={styles.questionsInfo}>
              <h3 className={styles.questionsInfoHeading}>
                Questions Are Often Asked To Us
              </h3>
              <p className={styles.questionsInfoParagraph}>
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
            </div>
            <img
              className={styles.arrowTwo}
              src={questionArr}
              alt="Arrow two"
            />
          </div>
          <div className={styles.questionsContent}>
            {accordionItems.map((item, index) => (
              <div key={index} className={styles.accordionItem}>
                <div
                  className={styles.title}
                  onClick={() => onTitleClick(index)}
                >
                  <p className={styles.titleText}>{item.title}</p>
                  <span className={styles.minPlus}>
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className={`${styles.content} ${styles.active}`}>
                    <p className={styles.contentText}>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        {/* // */}

        {/* // */}
        <section name="form" className={styles.contact}>
          <div className={styles.contHeadContainer}>
            <img
              className={styles.arrowOne}
              src={landingPageArrow}
              alt="Arrow one"
            />
            <div className={styles.contHeadInfo}>
              <h3 className={styles.contHeadInfoHeading}>
                We provide varuois packeges for you
              </h3>
              <p className={styles.contHeadInfoParagraph}>
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
            </div>
          </div>
          <form className={styles.contactFormContainer} onSubmit={handleSubmit}>
            <div className={styles.contactForm}>
              <div className={styles.nameFields}>
                <div className={styles.nameField}>
                  <label htmlFor="name">Name Surname*</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter company domain"
                    onChange={handleChange}
                    value={formData.name}
                  />
                  <FiUser className={styles.inputIcon} />
                </div>
                <div className={styles.nameField}>
                  <label htmlFor="companyName">Company name*</label>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    name="companyName"
                    onChange={handleChange}
                    value={formData.companyName}
                  />
                  <img
                    className={styles.inputIcon}
                    src={companyIcon}
                    alt="Company Icon"
                  />
                </div>
                <div className={styles.nameField}>
                  <label htmlFor="email">E-mail*</label>
                  <div
                    className={`${styles.inputField} ${
                      isTyping && !isValidEmail(formData.email)
                        ? styles.invalid
                        : ""
                    }`}
                  >
                    <input
                      type="email"
                      placeholder="example@company.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <img
                    className={styles.inputIcon}
                    src={inputMessageIcon}
                    alt="Message Icon"
                  />
                </div>
              </div>
              <div className={styles.messageField}>
                <label htmlFor="message">Your message shortly*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  id="note"
                  cols="30"
                  rows="10"
                  placeholder="Describe your message here..."
                ></textarea>
              </div>
            </div>
            <div className={styles.sendBtn}>
              <button type="submit" className={styles.continueBtn}>
                Continue <HiMiniArrowRight className={styles.continueBtnIcon} />
              </button>
            </div>
          </form>
        </section>

        {/* // */}
      </main>
      <footer name="contact" className={`${styles.footerContainer} element`}>
        <div className={styles.footerInfoContainer}>
          <div className={styles.footerInfo}>
            <h3 className={styles.footerInfoHeading}>Get in Touch</h3>
            <p className={styles.footerInfoParagraph}>
              Using it can make you sound like you have been studying english
              for a long time. Here’s the challenge
            </p>
          </div>
          <div className={styles.footerContInfo}>
            <div className={styles.footerCont}>
              <div className={styles.footerContIcon}>
                <img src={landingLoc} alt="Location Icon" />
              </div>
              <div className={styles.footerContText}>
                <h4 className={styles.footerContTextHead}>Location</h4>
                <p className={styles.footerContTextPar}>
                  4140 Parker Rd., New Mexico
                </p>
              </div>
            </div>
            <div className={styles.footerCont}>
              <div className={styles.footerContIcon}>
                <img src={callIconFooter} alt="Location Icon" />
              </div>
              <div className={styles.footerContText}>
                <h4 className={styles.footerContTextHead}>Phone Number</h4>
                <p className={styles.footerContTextPar}>(319) 555-0115</p>
              </div>
            </div>
            <div className={styles.footerCont}>
              <div className={styles.footerContIcon}>
                <img src={shareIconFooter} alt="Location Icon" />
              </div>
              <div className={styles.footerContText}>
                <h4 className={styles.footerContTextHead}>Follow Us:</h4>
                <div className={styles.footerContSocial}>
                  <a target="blank" href="">
                    <FaFacebook className={styles.footerContSocialIcon} />
                  </a>
                  <a target="blank" href="">
                    <FaInstagram className={styles.footerContSocialIcon} />
                  </a>
                  <a target="blank" href="">
                    <FaTwitter className={styles.footerContSocialIcon} />
                  </a>
                  <a target="blank" href="">
                    <FaLinkedin className={styles.footerContSocialIcon} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerCopyRight}>
          <p className={styles.footerCopyRightText}>
            {" "}
            All rights reserved @ 2023 <span>Voist</span>
          </p>
          <div className={styles.footerCopyRightLinks}>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Condition</a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default LandingPage;
