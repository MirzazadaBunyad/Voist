import { useState } from "react";
import UserIcon from "../../Icon/UserIcon";
import styles from "./index.module.scss";
import MessageIcon from "../../Icon/MessageIcon";
const Account = ({ profile }) => {
  const [data, setData] = useState(profile);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    if (!imageFile) return; // No file selected

    setSelectedImage(imageFile);
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.top}>
          <div className={styles.image}>
            <img
              src={
                selectedImage ? URL.createObjectURL(selectedImage) : data?.image
              }
              alt=""
            />
          </div>
          <h3>
            {data.name} {data.surname}
          </h3>
          <label htmlFor="file_upload" className={styles.custom_file_input}>
            <span className={styles.custom_file_label}>
              Click to change photo
            </span>
            <input
              id="file_upload"
              accept="image/*"
              type="file"
              onChange={handleImageChange}
            />
          </label>
        </div>
        <form>
          <div>
            <div>
              <label htmlFor="name">Name*</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter name"
                  id="name"
                  name="name"
                  defaultValue={data?.name}
                  // onChange={(e) => {
                  //   handleChange(e);
                  // }}
                />
                <UserIcon color="#1D2B21" />
              </div>
            </div>
            <div>
              <label htmlFor="surname">Surname*</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter surname"
                  id="surname"
                  name="surname"
                  defaultValue={data?.surname}
                  // onChange={(e) => {
                  //   handleChange(e);
                  // }}
                />
                <UserIcon color="#1D2B21" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="email">Email*</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter email address"
                  id="email"
                  name="email"
                  defaultValue={data?.email}
                  // onChange={(e) => {
                  //   handleChange(e);
                  // }}
                />
                <MessageIcon />
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.button_left}>
              <button type="button" className={styles.save_btn}>
                Save
              </button>
              <button type="button" className={styles.cancel_btn}>
                Cancel
              </button>
            </div>
            <div className={styles.button_right}>
              <button type="button">Change Password</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
