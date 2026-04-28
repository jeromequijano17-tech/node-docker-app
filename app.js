// app.js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.write(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Guessing Game</title>
        <style>
            body {
                font-family: Arial;
                text-align: center;
                margin-top: 50px;
                background-color: #222;
                color: white;
            }
            input, button {
                padding: 10px;
                font-size: 16px;
                margin: 5px;
            }
        </style>
    </head>
    <body>
        <h1>🎮 Number Guessing Game123</h1>
        <p>Guess a number between 1 and 10</p>
        
        <input type="number" id="guess" />
        <button onclick="checkGuess()">Guess</button>
        
        <p id="result"></p>

        <script>
            const randomNumber = Math.floor(Math.random() * 10) + 1;

            function checkGuess() {
                const userGuess = document.getElementById("guess").value;
                const result = document.getElementById("result");

                if (userGuess == randomNumber) {
                    result.innerHTML = "🎉 Correct! You win!";
                } else {
                    result.innerHTML = "❌ Wrong! Try again.";
                }
            }
        </script>
    </body>
    </html>
  `);

  res.end();
});

server.listen(3000, () => {
  console.log("Game running at http://localhost:3000");
});
