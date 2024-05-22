import styles from "./range.module.scss";

function Range({ currentStep, totalSteps }) {
    return <div className={styles.range}>
        <p className={styles.totalCount}>
            {currentStep}/
            <span>{totalSteps}</span>
        </p>
        <div className={styles.rangeColors}>
            <div
                className={styles.greenRange}
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
            <div
                className={styles.grayRange}
                style={{ width: `${((totalSteps - currentStep) / totalSteps) * 100}%` }}
            />
        </div>
    </div>;
}
export default Range;