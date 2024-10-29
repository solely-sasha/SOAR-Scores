const soarForm = document.getElementById("soarForm");
const totalScoreSpan = document.getElementById("totalScore");

for (let hour = 1; hour <= 8; hour++) {
  const hourDiv = document.createElement("div");
  hourDiv.classList.add("hour-div");
  hourDiv.innerHTML = `

    <h5 class="hour">Hour ${hour}</h5>
    <label for="safe_${hour}">S:</label>
   <span class="scores"> <span> 0 </span> <span> 1 </span> <span> 2 </span> </span>

    <label for="open_${hour}">O:</label>
    <span class="scores"> <span> 0 </span> <span> 1 </span> <span> 2 </span> </span>
    
    <label for="accept_${hour}">A:</label>
   <span class="scores"> <span> 0 </span> <span> 1 </span> <span> 2 </span> </span>
   
    <label for="respect_${hour}">R:</label>
   <span class="scores"> <span> 0 </span> <span> 1 </span> <span> 2 </span> </span>

  `;
  soarForm.appendChild(hourDiv);
  const scoreSpans = hourDiv.querySelectorAll(".scores span");
  scoreSpans.forEach((span) => {
    span.addEventListener("click", () => {
      const siblings = span.parentNode.querySelectorAll("span");
      siblings.forEach((sibling) => {
        sibling.classList.remove("red", "yellow", "green");
      });

      const value = span.textContent.trim();
      if (value === "0") {
        span.classList.add("red");
      } else if (value === "1") {
        span.classList.add("yellow");
      } else if (value === "2") {
        span.classList.add("green");
      }
    });
  });
}

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Total";
soarForm.appendChild(submitButton);

soarForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let totalScore = 0;

  const hourDivs = soarForm.querySelectorAll(".hour-div");
  hourDivs.forEach((hourDiv) => {
    const scoreSpans = hourDiv.querySelectorAll(".scores span");
    scoreSpans.forEach((span) => {
      if (span.classList.contains("red")) {
        totalScore += 0;
      } else if (span.classList.contains("yellow")) {
        totalScore += 1;
      } else if (span.classList.contains("green")) {
        totalScore += 2;
      }
    });
  });

  totalScoreSpan.textContent = totalScore;
});
