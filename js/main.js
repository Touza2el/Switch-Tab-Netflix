// HTML       ---> HTML Document       ---> HTML elements (<div>)
// JavaScript ---> JavaScript Document ---> document.querySelector("div")
// HTML element = <div> = document.querySelector("div") ---> Properties and Methods
// The Environement
// The Function
// The Event
// -----------------------------------------------------------------------------------------------------------------
// The Environement
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// The Function (select tab-content-item)
function selectItem(e) {
  // remove the tab-border-bottom class from all tab-item
  removeBorderBottom();
  // add the tab-border-bottom class to the clicked tab-item
  this.classList.add("tab-border-bottom");
  // remove the show class from all tab-content-item
  removeShowClass();
  // Grab Tab Content Item From The DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}
function removeBorderBottom() {
  tabItems.forEach(item => item.classList.remove("tab-border-bottom"));
}
function removeShowClass() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}

// The EventListener (Listen For tab-item click)
tabItems.forEach(item => item.addEventListener("click", selectItem));
// tabItems.forEach(function(item) {
//   item.addEventListener("click", selectItem);
// });
