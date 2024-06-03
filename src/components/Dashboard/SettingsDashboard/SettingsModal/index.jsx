import { useState } from "react";
import ArrowDown from "../../../Icon/ArrowDown";
import CloseIcon from "../../../Icon/CloseIcon";
import MessageIcon from "../../../Icon/MessageIcon";
import UserIcon from "../../../Icon/UserIcon";
import styles from "./index.module.scss";
import CheckIcon from "../../../Icon/CheckIcon";
import HesaWarningIcon from "../../../Icon/HesaWarning";
import axios from "axios";

const SettingsModal = ({ setActiveModal, activeUser, activeModal }) => {
  const roles = ["admin", "operator"];
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [formData, setFormData] = useState({
    first_name: activeModal === "edit" ? activeUser?.first_name : "",
    last_name: activeModal === "edit" ? activeUser?.last_name : "",
    email: activeModal === "edit" ? activeUser?.email : "",
    role: activeModal === "edit" ? activeUser?.role : roles[0],
  });

  const [isTyping, setIsTyping] = useState(null);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectRole = (role) => {
    setFormData({
      ...formData,
      role,
    });
    setActiveDropdown(!activeDropdown);
  };

  const handleKeyDown = (e) => {
    setIsTyping(e.target.name);
  };

  const handleKeyUp = () => {
    setIsTyping(null);
  };

  const handleSubmit = async () => {
    if (activeModal === "add") {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/company/members/invite/`,
          formData
        );
        if (response.status === 200 || response.status === 201) {
          setStatus("success");
          setFormData({
            name: "",
            surname: "",
            email: "",
          });
        }
      } catch (error) {
        setStatus("error");
      }
    } else if (activeModal === "edit") {
      try {
        const response = await axios.patch(
          `${import.meta.env.VITE_BASE_URL}/company/members/`,
          {
            id: activeUser?.id,
            ...formData,
          }
        );
        if (response.status === 200 || response.status === 201) {
          setStatus("success");
          setFormData({
            name: "",
            surname: "",
            email: "",
          });
        }
      } catch (error) {
        setStatus("error");
      }
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/company/members/`,
        {
          data: {
            id: activeUser?.id,
            role: activeUser?.role,
          },
        }
      );
      if (response?.status === 200 || response?.status === 201) {
        setActiveModal(null);
        window.location.reload();
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div
          className={styles.close_icon}
          onClick={() => {
            setActiveModal(null);
          }}
        >
          <CloseIcon color="#3D73FF" />
        </div>
        {status === "success" ? (
          <div className={styles.alert_modal}>
            <div className={styles.check_icon}>
              <CheckIcon />
            </div>
            <h3>Invitation sent to new member succesfully</h3>
            <p>Please, remind them to check and activate their account.</p>
            <div className={styles.buttons}>
              <button
                className={styles.success_btn}
                onClick={() => {
                  setActiveModal(null);
                  window.location.reload();
                }}
              >
                Okay
              </button>
              <button
                className={styles.close_btn}
                onClick={() => {
                  setActiveModal(null);
                }}
              >
                Close
              </button>
            </div>
          </div>
        ) : status === "error" ? (
          <div className={styles.alert_modal}>
            <div className={styles.cancel_icon}>
              <CloseIcon />
            </div>
            <h3>Oops, something went wrong, please, try again.</h3>
            <p>Please, remind them to check and activate their account.</p>
            <div className={styles.buttons}>
              <button
                className={styles.cancel_btn}
                onClick={() => {
                  setActiveModal(null);
                }}
              >
                Okay
              </button>
              <button
                className={styles.close_btn}
                onClick={() => {
                  setActiveModal(null);
                }}
              >
                Close
              </button>
            </div>
          </div>
        ) : activeModal === "delete" ? (
          <div className={styles.alert_modal}>
            <div className={styles.cancel_icon}>
              <HesaWarningIcon />
            </div>
            <h3>Are you sure to delete the user?</h3>
            <p>
              It will be deleted permanently and you will not be able to bring
              it back.
            </p>
            <div className={styles.buttons}>
              <button className={styles.cancel_btn} onClick={handleDelete}>
                Delete user
              </button>
              <button
                className={styles.close_btn}
                onClick={() => {
                  setActiveModal(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.title}>
              <h3>Add new member</h3>
              <p>Please, fill required information below.</p>
            </div>
            <form>
              <div>
                <div>
                  <label htmlFor="name">Name*</label>
                  <div
                    className={`${isTyping === "name" ? styles.active : ""}`}
                  >
                    <input
                      type="text"
                      placeholder="Enter name"
                      id="name"
                      name="first_name"
                      defaultValue={formData.first_name}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      onKeyDown={handleKeyDown}
                      onKeyUp={(e) => handleKeyUp(e)}
                    />
                    <UserIcon color="#1D2B21" />
                  </div>
                </div>
                <div>
                  <label htmlFor="surname">Surname*</label>
                  <div
                    className={`${isTyping === "surname" ? styles.active : ""}`}
                  >
                    <input
                      type="text"
                      placeholder="Ente surname"
                      id="surname"
                      name="last_name"
                      defaultValue={formData.last_name}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      onKeyDown={handleKeyDown}
                      onKeyUp={(e) => handleKeyUp(e)}
                    />
                    <UserIcon color="#1D2B21" />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="email">E-mail*</label>
                  <div
                    className={`${isTyping === "email" ? styles.active : ""}`}
                  >
                    <input
                      type="text"
                      placeholder="example@company.com"
                      id="email"
                      name="email"
                      defaultValue={formData.email}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      onKeyDown={handleKeyDown}
                      onKeyUp={(e) => handleKeyUp(e)}
                    />
                    <MessageIcon />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="role">Role*</label>
                  <div>
                    <div
                      className={styles.select_role}
                      onClick={() => setActiveDropdown(!activeDropdown)}
                    >
                      <p>{formData.role}</p>
                    </div>
                    {activeModal !== "edit" && (
                      <div
                        className={`${styles.role_scroll} ${
                          activeDropdown ? styles.active : ""
                        }`}
                      >
                        <div className={styles.roles}>
                          {activeDropdown &&
                            roles?.map((role, index) => (
                              <div
                                key={index}
                                onClick={() => handleSelectRole(role)}
                              >
                                <p>{role}</p>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                    <div className={styles.select_icon}>
                      <ArrowDown />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className={styles.send_btn}
                  onClick={handleSubmit}
                >
                  Send invitation
                </button>
                <button
                  type="button"
                  className={styles.cancel_btn}
                  onClick={() => {
                    setActiveModal(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SettingsModal;
