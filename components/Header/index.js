// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const containerH = document.querySelector('.header-container')

function Header() {

  const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');
  const headerSpan1 = document.createElement('span');
    headerSpan1.classList.add('date');
  const headerH1 = document.createElement('h1');
      headerH1.textContent = "Lambda School";
  const headerSpan2 = document.createElement('span');
    headerSpan2.classList.add('temp');
      headerSpan2.textContent = "98°";

  headerDiv.appendChild(headerSpan1)
  headerDiv.appendChild(headerH1)
  headerDiv.appendChild(headerSpan2)
  
  containerH.appendChild(headerDiv);
 
 return headerDiv;
}
containerH.appendChild(Header());
console.log(containerH)

