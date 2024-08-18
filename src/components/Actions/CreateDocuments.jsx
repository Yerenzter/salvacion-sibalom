import axios from "axios";

export async function CreateClearance(fullname, age, sex) {
  const data = {
    fullname: fullname,
    age: age,
    sex: sex,
  };

  await axios.post("http://localhost:4435/document/create/clearance", data);
}

export async function CreateCutting(fullname, property) {
  const data = {
    fullname: fullname,
    property: property,
  };

  await axios.post("http://localhost:4435/document/create/cutting", data);
}

export async function CreateIndigency(fullname) {
  const data = {
    fullname: fullname,
  };

  await axios.post("http://localhost:4435/document/create/indigency", data);
}
