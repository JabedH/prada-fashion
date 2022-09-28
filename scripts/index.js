const allClass = ["banner-1", "banner-2", "banner-3"];
const getClass = document.getElementById("main-slider");
let classIndex = 0;
setInterval(() => {
  if (classIndex >= allClass.length) {
    classIndex = 0;
  }
  const classNumber = allClass[classIndex];
  getClass.setAttribute("class", classNumber);
  console.log(classNumber);
  classIndex++;
}, 3000);
