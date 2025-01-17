const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 15;

function goResult(score) {
  qna.style.WebkitAnimation = "fadeOut 0.5s";
  qna.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 0.5s";
    result.style.animation = "fadeIn 0.5s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";
    }, 250);
    setResult(score);
  }, 250);
}

function setResult(score) {
  var point;
  if (score >= 150) {
    point = 1;
    document.getElementById("mention").innerHTML = "곧 좋은 인연이 찾아올거에요!!";
  }
  else if (score >= 100) {
    point = 2;
    document.getElementById("mention").innerHTML = "내년에 좋은일이 생길수도?";
  }
  else if (score >= 80) {
    point = 3;
    document.getElementById("mention").innerHTML = "가능성이 있어요! 주변을 잘 둘러보세요";
  }
  else if (score >= 60) {
    point = 4;
    document.getElementById("mention").innerHTML = "그래도 이정도면 나쁘진 않아요... 파이팅!";
  }
  else if (score >= 0) {
    point = 5;
    document.getElementById("mention").innerHTML = "안타깝지만 다음생을 노려봐요ㅠㅠ";
  }
  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = 'img/image-' + point + '.png';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);
  document.getElementById("score").innerHTML = score;
  
}

function addAnswer(answerText, qIdx, idx) {
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  var score = 0;
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function () {
    var children = document.querySelectorAll('.answerList');
    for (let i = 0; i < children.length; i++) {
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 1s";
      children[i].style.animation = "fadeOut 1s";
    }
    setTimeout(() => {
      for (let i = 0; i < children.length; i++) {
        score += qnaList[qIdx].a[idx].type;
        children[i].style.display = 'none';
      }
      goNext(++qIdx, score);
    }, 50)
  }, false);
}

function goNext(qIdx, score) {
  if (qIdx === endPoint) {
    goResult(score);
    return;
  }
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100 / endPoint) * (qIdx + 1) + '%';
}

function begin() {
  main.style.WebkitAnimation = "fadeOut 0.5s";
  main.style.animation = "fadeOut 0.5s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 0.5s";
    qna.style.animation = "fadeIn 0.5s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block"
    }, 250)
    let qIdx = 0;
    goNext(qIdx);
  }, 250);
}