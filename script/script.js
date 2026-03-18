const formSubmitFn = function (e) {
  e.preventDefault()
  const activityInput = document.getElementById("activity")
  const activity = activityInput.value
  const card = document.createElement("article")
  card.classList.add("activity-card")
  const section = document.getElementById("saved-activity")
  section.innerHTML += `<article class="activity-card">
            <p>${activity} </p>
            <button onclick="deleteCard(event)">🗑️</button>
            <button onclick="linecard(event)"> Done</button>
        </article>`
  form.reset()
}

const deleteCard = function (e) {
  const button = e.target
  const article = button.parentElement
  article.remove()
}

const linecard = function (e) {
  const button = e.target
  const article = button.parentElement
  article.style.textDecoration = "line-through"
}

const form = document.getElementById("new-activity-form")
form.addEventListener("submit", formSubmitFn)
