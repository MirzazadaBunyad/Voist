import { useState } from "react";
import UserIcon from "../../Icon/UserIcon";
import styles from "./index.module.scss";
import MessageIcon from "../../Icon/MessageIcon";
import axios from "axios";
import Swal from "sweetalert2";
const Account = ({ profile, setProfile }) => {
  const [data, setData] = useState(profile);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    if (!imageFile) return; // No file selected

    const { name } = event.target;
    setData({
      ...data,
      [name]: imageFile,
    });

    setSelectedImage(imageFile);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    console.log(data);
    const body = {
      first_name: data?.first_name ?? profile?.first_name,
      last_name: data?.last_name ?? profile?.last_name,
      email: data?.email ?? profile?.email,
      is_active: profile?.is_active,
      role: profile?.role,
      image_url: profile?.image_url ?? null,
    };

    console.log(body);

    if (data?.photoFile) {
      body.image_url = data?.photoFile;
    }

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/users/${profile?.id}/`,
        body
      );
      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          position: "center-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        setProfile(response.data);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "center-center",
        icon: "error",
        title: "Error: Your work could not be saved",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.top}>
          <div className={styles.image}>
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : data && data?.image_url
                  ? data?.image_url
                  : "/img/user.png"
              }
              alt=""
            />
          </div>
          <h3>{profile && profile.first_name + " " + profile.last_name}</h3>
          <label htmlFor="file_upload" className={styles.custom_file_input}>
            <span className={styles.custom_file_label}>
              Click to change photo
            </span>
            <input
              id="file_upload"
              accept="image/*"
              type="file"
              name="photoFile"
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
                  name="first_name"
                  defaultValue={profile && profile?.first_name}
                  onChange={handleChange}
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
                  name="last_name"
                  defaultValue={profile && profile?.last_name}
                  onChange={handleChange}
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
                  defaultValue={profile && profile?.email}
                  onChange={handleChange}
                />
                <MessageIcon />
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.button_left}>
              <button
                type="button"
                className={styles.save_btn}
                onClick={handleSubmit}
              >
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
