 // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

const Header = (title, date, temp) => {
  const header = document.createElement('div');
  const dateSpan = document.createElement('span');
  const tempSpan = document.createElement('span');
  const h1 = document.createElement('h1');
  
  header.className = 'header';
  tempSpan.className = 'temp';
  dateSpan.className = 'date';

  h1.textContent = title;
  dateSpan.textContent = date;
  tempSpan.textContent = temp;

  header.appendChild(dateSpan);
  header.appendChild(h1);
  header.appendChild(tempSpan);
  return header;
}
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
const headerAppender = (selector) => {
  const parent = document.querySelector(selector);
  parent.appendChild(Header())
}

export { Header, headerAppender }
