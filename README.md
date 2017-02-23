# wrong-width
demo for a bug with styled-jsx

npm run dev

On initial (server) render the correct width will be outputted for the inner div. However, when routing away and back to this page (use the nav links) the width output for the inner div is wrong. This can cause UI issues if your project has parts that rely on setting widths dynamically based on the size of their parent element. 
