import styles from "./index.module.scss";
// import CopyIcon from "../../../Icon/CopyIcon";
// import DownloadIcon from "../../../Icon/DownloadIcon";
import AudioPlayer from "../../../AudioPlayer";
import AudioFile from "../../../../assets/audio/stomps-and-claps-percussion-and-rhythm-141190.mp3";

const transcript = [
  {
    id: 1,
    time: "12:29",
    name: "Operator",
    message: "Welcome! How can I help you?",
    image: "/img/profile.jpeg",
  },
  {
    id: 2,
    time: "12:29",
    name: "Client",
    message: "Hello there!",
    image: "/img/profile.jpeg",
  },
  {
    id: 3,
    time: "12:29",
    name: "Operator",
    message: "Anoother message",
    image: "/img/profile.jpeg",
  },
  {
    id: 4,
    time: "12:29",
    name: "Operator",
    message: "Welcome! How can I help you?",
    image: "/img/profile.jpeg",
  },
  {
    id: 5,
    time: "12:29",
    name: "Client",
    message: "Hello there!",
    image: "/img/profile.jpeg",
  },
];

const CallRecording = () => {
  return (
    <div className={styles.container}>
      <div className={styles.recording}>
        <div className={styles.title}>
          <p>Recording</p>
          {/* <div>
            <CopyIcon />
            <DownloadIcon />
          </div> */}
        </div>
        {/* <div className={styles.text}>
          <p>
            In purus ultricies lorem faucibus sit sed faucibus. In purus
            ultricies lorem faucibus sit sed.
          </p>
        </div> */}
        <div className={styles.audio}>
          <AudioPlayer audioFile={AudioFile} />
        </div>
      </div>
      <div className={styles.transcript}>
        <div className={styles.title}>
          <p>Transcript</p>
          {/* <div>
            <CopyIcon />
            <DownloadIcon />
          </div> */}
        </div>
        {/* <div className={styles.text}>
          <p>
            In purus ultricies lorem faucibus sit sed faucibus. In purus
            ultricies lorem faucibus sit sed.
          </p>
        </div> */}
        <div className={styles.chat}>
          {transcript?.map((script) => {
            return (
              <div
                key={script?.id}
                className={`${
                  script?.name === "Operator"
                    ? styles.operator_transcript
                    : styles.client_transcript
                }`}
              >
                <div className={styles.txt}>
                  <p>{script?.message}</p>
                  <span>{script?.time}</span>
                </div>
                <div className={styles.image}>
                  <img src={script?.image} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CallRecording;
