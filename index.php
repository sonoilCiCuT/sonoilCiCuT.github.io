<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Greeny</title>
    <link rel="shortcut icon" href="logo.gif" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="index.css">
    <script src="script.js"></script>
    <script type="module" src="huggingface.js"></script>
</head>
<body onscroll="nav(this, event)">
    <div id="chat">
        <div id="chat-messages"></div>
        <input type="text" id="user-input" placeholder="Scrivi a Greeny"></input>
    </div>

    <nav>   
        <div class="eco">ECO <z class="d1">sos</z><z class="d2">te</z><z class="d3">ni</z><z class="d4">bi</z><z class="d5">li</z><z class="d6">tà</z></div>
        <div class="greeny" onclick="toggleChat()">greeny</div>
    </nav>
    <div class="body">
        <div class="cont">
            <div class="title">
                <span>green s</span><img src="./logo.gif"><span>ftware</span>
            </div>
            <p class="desc">
                Guida per lo sviluppo e progettazione di software sostenibili
            </p>
        </div>
    </div>
    <div class="section"></div>
    <div class="section"></div>
    <div class="section"></div>
    <div class="section"></div>
</body>
</html>
