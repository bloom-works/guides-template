function renderKeyQuestions(content){
  return `
    <div class="l-section key-questions">
      <h3 class="h4">Key Questions</h3>
      <ul class="l-stack-basic">
        ${content}
      </ul>
    </div>
  `
}

module.exports = renderKeyQuestions;
