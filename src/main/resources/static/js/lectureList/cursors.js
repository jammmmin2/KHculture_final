const cursorTag = document.querySelector("div.cursors");
const modalDiv = cursorTag.querySelector("div");
const lectureModal = cursorTag.querySelector("div.lectureModal");
const lectures = document.querySelectorAll("div.days a");

document.addEventListener("mousemove", function(event) {
    modalDiv.style.left = event.pageX + "px";
    modalDiv.style.top = event.pageY + "px";
})

lectures.forEach(lecture => {
    lecture.addEventListener("mouseover", function() {
        let time = this.children[0].innerHTML;
        let lectureTitle = this.children[1].innerHTML;
        let html = `<div class="lectureImg">
        <img src="../../static/images/lectureList/20181129114054.jpg" alt="">
      </div>
      <div class="lectureInfo">
        <div>
          <p class="adult">성인강좌</p>
          <p class="regular">정기강좌</p>
        </div>
        <div>
          <h3>10/25 ` + lectureTitle +`</h3>
          <p>김선우 | (월)` + time + `</p>
          <p>5,000원(총1회)</p>
        </div>
      </div>`;
      lectureModal.innerHTML = html;
      lectureModal.classList.add("visible");
    })

    lecture.addEventListener("mouseout", function() {
        lectureModal.classList.remove("visible");
    })
});