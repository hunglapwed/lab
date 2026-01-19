// BÀI 1: ĐỔI NỀN
document.getElementById("toggleTheme").onclick = () => {
    document.body.classList.toggle("dark");
  };
  
  // BÀI 2: MENU ACTIVE
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll(".menu a");
  
  window.addEventListener("scroll", () => {
    sections.forEach((sec, i) => {
      const top = sec.getBoundingClientRect().top;
      if (top < 200) {
        links.forEach(l => l.classList.remove("active"));
        if (links[i]) links[i].classList.add("active");
      }
    });
  });
  
  // BÀI 3: BOX HIỆN KHI CUỘN
  const boxes = document.querySelectorAll(".box");
  
  window.addEventListener("scroll", () => {
    boxes.forEach(box => {
      const top = box.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        box.classList.add("show");
      }
    });
  });
  
  // BÀI 4: NÚT NHẢY
  const jumpBtn = document.querySelector(".jump");
  jumpBtn.addEventListener("mouseover", () => {
    jumpBtn.classList.add("animate");
    setTimeout(() => jumpBtn.classList.remove("animate"), 400);
  });
  
  // BÀI 5: CIRCLE THEO CHUỘT
  const circle = document.querySelector(".circle");
  window.addEventListener("mousemove", e => {
    circle.style.left = e.clientX + "px";
    circle.style.top = e.clientY + "px";
  });
  