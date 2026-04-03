# DOM PROJECTS


## PROJECT 1
``` javascript
console.log("Hitesh")
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Color Changer</title>
    <style>
      * {
        color: black;
      }

      body {
        height: 100vh;
        width: 100vw;
        display: flex;
      }

      #box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .parent {
        display: flex;
        flex-direction: row;
        width: fit-content;
        justify-content: center;
        align-items: center;
        padding: 24px;
        border: 2px solid white;
        height: fit-content;
        gap: 24px;
      }

      .button {
        padding: 24px;
        border: 2px solid white;
      }

      #yellow {
        background-color: yellow;
        color: black;
        font-size: 20px;
        font-weight: 600;
      }

      #red {
        background-color: red;
        font-weight: 500;
        font-size: 20px;
      }

      #blue {
        background-color: blue;
        font-weight: 500;
        font-size: 20px;
      }

      #white {
        background-color: white;
        font-weight: 500;
        font-size: 20px;
        color: black;
        border: 2px solid black;
      }

      #black {
        background-color: black;
        color: black;
        border: 2px solid black;
        color: white;
      }
    </style>
  </head>
  <body>
    <div id="box">
      <h1>Select the color</h1>

      <div class="parent">
        <div id="yellow" class="button">Yellow</div>
        <div id="red" class="button">Red</div>
        <div id="blue" class="button">Blue</div>
        <div id="black" class="button">Black</div>
        <div id="white" class="button">White</div>
      </div>
    </div>
  </body>
  <script>
    let element = document.querySelectorAll(".button");
    let body = document.querySelector('body')
    element.forEach(function (button) {
      button.onclick = function () {
        // if(button.id === 'yellow'){
        // document.body.style.color = 'black'
        // }
        body.style.backgroundColor = button.id;
      };
    });
  </script>
</html>

````

