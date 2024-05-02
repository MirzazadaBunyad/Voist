import { useState } from "react";
import MarkIcon from "../../../../Icon/Mark";
import styles from "./index.module.scss";

const boxes = [
  {
    id: 1,
    title: "Talk/Listen Ratio",
    description: "How much you talked vs. how much you listened",
    subTitle: "22%",
    range: "Above recommended range",
  },
  {
    id: 2,
    title: "Emotions",
    description: "How many filler words like 'um' and 'uh' you used",
    subTitle: "6 words / min",
    range: "Above recommended range",
  },
  {
    id: 3,
    title: "Call Intention Identification",
    description: "How fast you spoke",
    subTitle: "30 words/min",
    range: "Above recommended range",
  },
  {
    id: 4,
    title: "Longest Monologue",
    description: "The longest stretch of time you spoke without interruption",
    subTitle: "00:05",
    range: "Above recommended range",
  },
];

const SummaryTab = () => {
  const description = `In the conversation, an individual named Sylvia is trying to communicate
with someone via a messaging system, presumably AI. She initially
struggles to be heard or understood, indicated by the AI asking for her
to repeat herself.`;

  const [descLength, setDescLength] = useState(200);

  return (
    <div className={styles.container}>
      <h2>Call short description</h2>
      <p className={styles.description}>
        {description.slice(0, descLength)}
        {description.length > descLength ? (
          <span onClick={() => setDescLength(description.length)}>
            See more
          </span>
        ) : (
          ""
        )}
      </p>
      <div className={styles.boxes}>
        {boxes?.map((box) => {
          return (
            <div key={box?.id} className={styles.box}>
              <h3>{box?.title}</h3>
              <p>{box?.description}</p>
              <span>{box?.subTitle}</span>
              <div className={styles.range}>
                <MarkIcon color="#FF3D3D" />
                <p>{box?.range}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SummaryTab;
