function a(success, fail) {
  const password = true;
  if (password) {
    success();
  } else {
    fail();
  }
}

const obj = {
  name: "Zain Gulbaz",
  func(decide) {
    console.log(`${decide === true ? "Successfull Login" : "Login Failed"}`);
  },
};
