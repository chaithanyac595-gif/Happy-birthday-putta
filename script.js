function startSurprise() {
    const music = document.getElementById("music");

    music.play();

    document.body.innerHTML = `
    <div style="padding:25px;
                text-align:center;
                color:white;
                background:black;
                min-height:100vh;
                font-family:Georgia,serif;">

        <h1 style="color:gold;">
        💌 A Letter From My Heart
        </h1>

        <p style="font-size:20px;line-height:1.8;">
        Dear Putta ❤️,<br><br>

        Happy Birthday to the most special person in my life.

        You came into my life as my best friend,
        became my boyfriend,
        and one day I hope to proudly call you my husband.

        Thank you for every smile,
        every hug,
        every memory,
        and every moment.

        I love you more than words can ever express.

        ❤️ Forever Yours,<br>
        Chaithanya ❤️
        </p>

        <br>

        <button onclick="showGallery()"
        style="padding:15px 30px;
        font-size:20px;
        border:none;
        border-radius:40px;
        background:gold;">
        Continue ❤️
        </button>

    </div>`;
}

function showGallery(){
    window.location.href = "gallery.html";
}

document.body.innerHTML=`
<div style="background:#000;
color:white;
text-align:center;
padding:20px;">

<h1 style="color:gold;">
📸 Our Beautiful Memories ❤️
</h1>

<img src="photos/putta.jpg"
style="width:90%;
max-width:320px;
border-radius:20px;
margin:20px;">

<p>This smile is the reason my heart feels at home. ❤️</p>

<h2>🎂 Happy Birthday Putta ❤️</h2>

<p>
May God bless you with happiness,
success,
good health,
peace
and endless love.

I will always choose you.

Forever Yours,
❤️ Chaithanya ❤️
</p>

</div>`;
}