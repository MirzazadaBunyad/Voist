import { useState } from "react";
import CheckIcon from "../../../../Icon/CheckIcon";
import CloseIcon from "../../../../Icon/CloseIcon";
import styles from "./index.module.scss";

const ScorecardTab = ({ data }) => {
  const [evaluations, setEvaluations] = useState(data && data?.evaluations);

  return (
    <div className={styles.container}>
      <div className={styles.score_cards}>
        {evaluations &&
          evaluations?.length > 0 &&
          evaluations?.map((e) => {
            return (
              <div key={e?.id} className={styles.score_card}>
                <div className={styles.top}>
                  <h3>{e?.type}</h3>
                  <p>{e?.score}</p>
                </div>
                <div className={styles.bottom}>
                  {e?.questions.map((qs) => {
                    return (
                      <div key={qs.id}>
                        <div className={styles.icon}>
                          {qs?.is_answered ? <CheckIcon /> : <CloseIcon />}
                        </div>
                        <p>{qs?.question}</p>
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
