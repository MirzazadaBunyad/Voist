import CheckIcon from "../../../../Icon/CheckIcon";
import CloseIcon from "../../../../Icon/CloseIcon";
import styles from "./index.module.scss";

const scoreCard = [
  {
    id: 1,
    title: "Opener",
    score: "1/2",
    shorts: [
      {
        id: 1,
        status: false,
        text: "SDR turned this connect into a quality conversation?",
      },
      {
        id: 2,
        status: true,
        text: "Permission based opener?",
      },
    ],
  },
  {
    id: 2,
    title: "Closing",
    score: "1/3",
    shorts: [
      {
        id: 1,
        status: false,
        text: "SDR turned this connect into a quality conversation?",
      },
      {
        id: 2,
        status: false,
        text: "Follow-up meeting booked?",
      },
      {
        id: 3,
        status: true,
        text: "Next steps agreed upon?",
      },
    ],
  },
  {
    id: 3,
    title: "Opener",
    score: "1/2",
    shorts: [
      {
        id: 1,
        status: false,
        text: "SDR asked for preconceptions of product?",
      },
    ],
  },
];

const ScorecardTab = () => {
  return (
    <div className={styles.container}>
      <div className={styles.score_cards}>
        {scoreCard?.map((e) => {
          return (
            <div key={e?.id} className={styles.score_card}>
              <div className={styles.top}>
                <h3>{e?.title}</h3>
                <p>{e?.score}</p>
              </div>
              <div className={styles.bottom}>
                {e?.shorts.map((short) => {
                  return (
                    <div key={short.id}>
                      <div className={styles.icon}>
                        {short?.status ? <CheckIcon /> : <CloseIcon />}
                      </div>
                      <p>{short?.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScorecardTab;
