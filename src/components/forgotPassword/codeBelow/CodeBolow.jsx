import BackButton from "../../backButton/BackButton";

function CodeBelow({ handleClickToChange, sendInformation }) {
  const handleGoBack = () => {
    handleClickToChange();
    console.log(sendInformation);
  };
  return (
    <>
      <div onClick={handleGoBack}>
        <BackButton />
      </div>
    </>
  );
}

export default CodeBelow;
