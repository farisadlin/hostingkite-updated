import * as Yup from "yup";
import Axios from "axios";

const emptyTextInput = "Kolom input tidak boleh kosong";
const onlyNumberInput = "Mohon masukkan huruf angka saja";
const onlyStringInput = "Mohon masukkan huruf abjad saja";
const onlyPasswordInput =
  "Silahkan masukkan minimal 6 karakter yang terdiri dari minimal satu huruf abjad dan satu huruf angka (tidak boleh ada karakter khusus)";
const emptyEmailInput =
  "Format email yang dimasukkan salah (Contoh: budi@mail.com)";
const passwordRe = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
const fullNameRe = /^[a-zA-Z ]*$/;
const urlBase = "http://localhost:8000";

export const InitialValuesRegister = {
  fullName: "",
  email: "",
  password: "",
  phoneNumber: "",
  address: "",
};

export const InitialValuesLogin = {
  email: "",
  password: "",
};

export const InitialValuesContact = {
  fullName: "",
  email: "",
  text: "",
  phoneNumber: "",
};

export const ValidationSchemaRegister = Yup.object().shape({
  fullName: Yup.string(onlyStringInput)
    .min(3, "Nama yang dimasukkan terlalu pendek")
    .matches(fullNameRe, {
      message: onlyStringInput,
    })
    .required(emptyTextInput),
  password: Yup.string()
    .matches(passwordRe, {
      message: onlyPasswordInput,
    })
    .required(emptyTextInput),
  email: Yup.string()
    .email(emptyEmailInput)
    .lowercase(emptyTextInput)
    .required(emptyTextInput),
  phoneNumber: Yup.number(onlyNumberInput)
    .positive()
    .integer()
    .required(emptyTextInput),
  address: Yup.string().required(emptyTextInput),
});

export const ValidationSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .email(emptyEmailInput)
    .lowercase(emptyTextInput)
    .required(emptyTextInput),
  password: Yup.string()
    .matches(passwordRe, {
      message: onlyPasswordInput,
    })
    .required(emptyTextInput),
});

export const ValidationSchemaContact = Yup.object().shape({
  fullName: Yup.string(onlyStringInput)
    .min(3, "Nama yang dimasukkan terlalu pendek")
    .matches(fullNameRe, {
      message: onlyStringInput,
    })
    .required(emptyTextInput),
  email: Yup.string()
    .email(emptyEmailInput)
    .lowercase(emptyTextInput)
    .required(emptyTextInput),
  phoneNumber: Yup.number(onlyNumberInput)
    .positive()
    .integer()
    .required(emptyTextInput),
  text: Yup.string().required(emptyTextInput),
});

export const postData = async (data) => {
  await Axios.post(`${urlBase}/api/login`, {
    email: data.email,
    password: data.password,
  })
    .then((res) => {
      const {
        data: {
          user: { firstName, lastName },
          token,
        },
        status,
      } = res;

      console.log(res);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("token", token);
      localStorage.setItem("email", data.email);
      localStorage.setItem("password", data.password);

      if (status === 200) {
        window.location = "/";
      } 
    })
    .catch((err) => {
      console.error(err.message || err.statusText);
      alert(err.message)
    });
};

export const ValidationSubmitLogin = async (values) => {
  const submitToStorage = async () => {
    try {
      postData(values);
      
    } catch (err) {
      console.log("An error has been occurred: ", err.message);
    }
  };
  submitToStorage();
};

export const ValidationSubmitRegister = () => {
  try {
    window.location = "/login";
  } catch (err) {
    console.log("An error has been occurred: ", err.message);
  }
};

export const ValidationSubmitContact = async (values, { resetForm }) => {
  try {
    await setTimeout(() => {
      alert(
        "Pesan sudah terkirim. Terima kasih atas pesannya. Kami akan merespon secepatnya"
      );
      resetForm();
      window.location = "/contact-us";
    }, 1000);
  } catch (err) {
    console.log("An error has been occurred: ", err.message);
  }
};
