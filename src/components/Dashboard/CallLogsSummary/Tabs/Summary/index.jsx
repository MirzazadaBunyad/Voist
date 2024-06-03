import { useEffect, useState } from "react";
import MarkIcon from "../../../../Icon/Mark";
import styles from "./index.module.scss";

const boxes = [
  {
    id: 1,
    title: "Talk/Listen Ratio",
    description: "How much you talked vs. how much you listened",
    subTitle: "%",
    range: "Above recommended range",
    key: "talkListenRatio",
  },
  {
    id: 2,
    title: "Emotions",
    description: "How many filler words like 'um' and 'uh' you used",
    subTitle: "words / min",
    range: "Above recommended range",
    key: "fillerWords",
  },
  {
    id: 3,
    title: "Call Intention Identification",
    description: "How fast you spoke",
    subTitle: "words/min",
    range: "Above recommended range",
    key: "talkSpeed",
  },
  {
    id: 4,
    title: "Longest Monologue",
    description: "The longest stretch of time you spoke without interruption",
    subTitle: "",
    range: "Above recommended range",
    key: "longestMonologue",
  },
];

const SummaryTab = ({ summary }) => {
  const description = `In the conversation, an individual named Sylvia is trying to communicate
with someone via a messaging system, presumably AI. She initially
struggles to be heard or understood, indicated by the AI asking for her
to repeat herself.`;

  const [descLength, setDescLength] = useState(200);

  const [data, setData] = useState(boxes);

  function formatTime(input) {
    if (typeof input !== "number" || input < 0) {
      throw new Error("Input must be a non-negative number");
    }

    const minutes = Math.floor(input / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (input % 60).toString().padStart(2, "0");

    return `${minutes}:${seconds}`;
  }

  useEffect(() => {
    if (summary) {
      setData((prevData) =>
        prevData.map((item) => {
          if (Object.prototype.hasOwnProperty.call(summary, item.key)) {
            if (item.key === "longestMonologue") {
              return { ...item, key: formatTime(summary?.[item.key]) };
            }
            return { ...item, key: summary[item.key] };
          }
          return item;
        })
      );
    }
  }, [summary]);

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
        {data &&
          data?.map((box) => {
            return (
              <div key={box?.id} className={styles.box}>
                <h3>{box?.title}</h3>
                <p>{box?.description}</p>
                <span>
                  {box?.key} {box?.subTitle}
                </span>
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
