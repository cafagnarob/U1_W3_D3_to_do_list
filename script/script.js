const maxItems = 9

const formSubmitFn = function (e) {
  e.preventDefault()
  const activityInput = document.getElementById("activity")
  const activity = activityInput.value
  const card = document.createElement("article")
  card.classList.add("activity-card")
  const section = document.getElementById("saved-activity")

  if (section.children.length >= maxItems) {
    alert("hai troppe cose da fare! Relax")
    return
  }
  section.innerHTML += `<article class="activity-card">
  <div>
  <p>${activity} </p>
  </div>
  <div>
        <button onclick="deleteCard(event)">🗑️</button>
        <button onclick="linecard(event)"> ✅</button>
    </div>
        </article>`

  form.reset()
}

const deleteCard = function (e) {
  const button = e.target
  const article = button.parentElement
  const article2 = article.parentElement
  article2.remove()
}

const linecard = function (e) {
  const button = e.target
  const article = button.parentElement
  const article2 = article.parentElement
  const p = article2.querySelector("p")

  if (p.style.textDecoration === "line-through") {
    p.style.textDecoration = "none"
  } else {
    p.style.textDecoration = "line-through"
  }
}

const form = document.getElementById("new-activity-form")
form.addEventListener("submit", formSubmitFn)
