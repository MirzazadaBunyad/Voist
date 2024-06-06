import { useState } from "react";
import styles from "./index.module.scss";
import NetworkIcon from "../../Icon/NetworkIcon";
import TextFormattingIcon from "../../Icon/TextFormatting";
import PhoneIcon from "../../Icon/PhoneIcon";
import ArrowDown from "../../Icon/ArrowDown";
import axios from "axios";
import Swal from "sweetalert2";

const countries = [
  { name: "Azerbaijan", code: "Az" },
  // { name: "Canada", code: "CA" },
  // { name: "United Kingdom", code: "GB" },
  // ... add more countries
];
// const timeZones = [
//   { label: "(GMT-08:00)", value: "America/Los_Angeles" },
//   { label: "(GMT-05:00)", value: "America/New_York" },
//   { label: "(GMT+01:00)", value: "Europe/Paris" },
// ];
const counts = ["1-10", "11-20", "21-50", "51-100", "More than 100"];

const CompanySettings = ({ company, setCompany }) => {
  const [data, setData] = useState(company);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCountries, setActiveCountries] = useState(null);
  // const [activeTimeZones, setActiveTimeZones] = useState(null);

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

  const handleSelectCountry = (country) => {
    setData({
      ...data,
      country,
    });
    setActiveCountries(!activeCountries);
  };

  const handleSubmit = async () => {
    const body = {
      name: data?.name ?? company?.name,
      domain: data?.domain ?? company?.domain,
      description: data?.description ?? company?.description,
      phone_number: data?.phone_number
        ? data?.phone_number.startsWith("+")
          ? data?.phone_number
          : "+994" + data?.phone_number
        : company?.phone_number,
      country: data?.country ?? company?.country,
    };

    if (data?.photoFile) {
      body.photo = data?.photoFile;
    }

    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/company/`,
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
        setCompany(response.data);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  // const handleSelectTimeZones = (timeZone) => {
  //   setData({
  //     ...data,
  //     timeZone,
  //   });
  //   setActiveTimeZones(!activeTimeZones);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.company}>
        <div className={styles.top}>
          <div className={styles.image}>
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : company
                  ? company?.photo
                  : "./img/company.png"
              }
              alt="company"
            />
          </div>
          <h3>{company && company.name}</h3>
          <label htmlFor="file_upload" className={styles.custom_file_input}>
            <span className={styles.custom_file_label}>
              Click to change photo
            </span>
            <input
              id="file_upload"
              accept="image/*"
              type="file"
              name="photoFile"
              onChange={(e) => handleImageChange(e)}
            />
          </label>
        </div>
        <form>
          <div>
            <div>
              <label htmlFor="name">Company name*</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter company name"
                  id="name"
                  name="name"
                  defaultValue={company && company?.name}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <NetworkIcon />
              </div>
            </div>
            <div>
              <label htmlFor="domain">Company domain*</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter company domain"
                  id="domain"
                  name="domain"
                  defaultValue={company && company?.domain}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <TextFormattingIcon />
              </div>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="phone">Company phone number*</label>
              <div>
                <img src="./img/azerbaijan.png" alt="" />
                <p>+994</p>
                <input
                  type="tel"
                  placeholder="enter phone number"
                  id="phone"
                  name="phone_number"
                  maxLength="9"
                  defaultValue={company && company?.phone_number.slice(4)}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <PhoneIcon />
              </div>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="description">Company Description Shortly*</label>
              <div>
                <textarea
                  placeholder="Enter description"
                  id="description"
                  name="description"
                  defaultValue={company && company?.description}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="country">Country*</label>
              <div>
                <div className={styles.select_country}>
                  <p>
                    {company && company?.country
                      ? company?.country
                      : "Choose one"}
                  </p>
                </div>
                <div
                  className={`${styles.country_scroll} ${
                    activeCountries ? styles.active : ""
                  }`}
                >
                  <div className={styles.countries}>
                    {countries?.map((country, index) => (
                      <div
                        key={index}
                        onClick={() => handleSelectCountry(country.name)}
                      >
                        <p>{country.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={styles.select_icon}
                  onClick={() => setActiveCountries(!activeCountries)}
                >
                  <ArrowDown />
                </div>
              </div>
            </div>
            {/* <div>
              <label htmlFor="Time_zone">Time zone*</label>
              <div>
                <div className={styles.select_timeZone}>
                  <p>{data?.timeZone ? data?.timeZone?.label : "Choose one"}</p>
                </div>
                <div
                  className={`${styles.timeZone_scroll} ${
                    activeTimeZones ? styles.active : ""
                  }`}
                >
                  <div className={styles.timeZones}>
                    {timeZones?.map((timeZone, index) => (
                      <div
                        key={index}
                        onClick={() => handleSelectTimeZones(timeZone)}
                      >
                        <p>{timeZone.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={styles.select_icon}
                  onClick={() => setActiveTimeZones(!activeTimeZones)}
                >
                  <ArrowDown />
                </div>
              </div>
            </div> */}
          </div>
          <div>
            <div>
              <label htmlFor="">How many operators do your company have?</label>
              <div className={styles.radio}>
                {counts.map((count, index) => (
                  <p
                    key={index}
                    className={`${
                      count.split("-")[0] <= (company?.operators_count ?? 0) &&
                      count.split("-")[1] >= (company?.operators_count ?? 0)
                        ? styles.active
                        : count === counts[counts.length - 1]
                        ? counts[counts.length - 1].split(" ")[2] <
                          (company?.operators_count ?? 0)
                          ? styles.active
                          : ""
                        : ""
                    }`}
                  >
                    {count}
                  </p>
                ))}
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanySettings;
