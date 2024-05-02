import styles from "./index.module.scss";

const questions = [
  {
    id: 1,
    question: "Hello? Who is this?",
    time: "00:01",
    image: "./img/profile.jpeg",
  },
  {
    id: 2,
    question:
      "Cras consectetur blandit sit vitae habitasse. In pulvinar tempus vitae?",
    time: "00:05",
    image: "./img/profile.jpeg",
  },
  {
    id: 3,
    question:
      "Eget donec scelerisque sollicitudin maecenas consectetur amet nibh tortor nibh. Quam iaculis ornare nulla etiam sit potenti nunc?",
    time: "00:01",
    image: "./img/profile.jpeg",
  },
  {
    id: 4,
    question: "Mollis lobortis ridiculus egestas feugiat velit?",
    time: "00:05",
    image: "./img/profile.jpeg",
  },
  {
    id: 5,
    question: "Hello? Who is this?",
    time: "00:01",
    image: "./img/profile.jpeg",
  },
  {
    id: 6,
    question:
      "Cras consectetur blandit sit vitae habitasse. In pulvinar tempus vitae?",
    time: "00:05",
    image: "./img/profile.jpeg",
  },
  {
    id: 7,
    question:
      "Eget donec scelerisque sollicitudin maecenas consectetur amet nibh tortor nibh. Quam iaculis ornare nulla etiam sit potenti nunc?",
    time: "00:01",
    image: "./img/profile.jpeg",
  },
  {
    id: 8,
    question: "Mollis lobortis ridiculus egestas feugiat velit?",
    time: "00:05",
    image: "./img/profile.jpeg",
  },
  {
    id: 9,
    question: "Hello? Who is this?",
    time: "00:01",
    image: "./img/profile.jpeg",
  },
  {
    id: 10,
    question:
      "Cras consectetur blandit sit vitae habitasse. In pulvinar tempus vitae?",
    time: "00:05",
    image: "./img/profile.jpeg",
  },
  {
    id: 11,
    question:
      "Eget donec scelerisque sollicitudin maecenas consectetur amet nibh tortor nibh. Quam iaculis ornare nulla etiam sit potenti nunc?",
    time: "00:01",
    image: "./img/profile.jpeg",
  },
  {
    id: 12,
    question: "Mollis lobortis ridiculus egestas feugiat velit?",
    time: "00:05",
    image: "./img/profile.jpeg",
  },
];

const QuestionsTab = () => {
  return (
    <div className={styles.container}>
      <h2>Qustions asked</h2>
      <p>
        In the conversation, an individual named Sylvia is trying to communicate
        with someone via a messaging system, presumably
      </p>
      <div className={styles.questions}>
        {questions?.map((question) => {
          return (
            <div key={question?.id} className={styles.question}>
              <div className={styles.left}>
                <div className={styles.photo}>
                  <img src={question?.image} alt="" />
                </div>
                <p>{question?.question}</p>
              </div>
              <div className={styles.right}>
                <p>{question?.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionsTab;
