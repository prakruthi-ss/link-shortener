async function shortenlink() {
    const url = document.getElementById("url").value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
    if (response.ok) {
        const data = await response.text();
        document.getElementById('result').innerHTML = `
        <span class="active"> Shorten URL: </span><br> <a href="${data}" target="_blank" id ="link">${data}</a><br> <span class="copy">Copy</span>
        `;
        const copy = result.querySelector(".copy");
        let shortLink = document.getElementById("link");
        copy.addEventListener("click", () => {
        navigator.clipboard.writeText(shortLink);
        alert("link copied");
    });
    }
    else {
        document.getElementById('result').innerHTML = `<p class="error_section">Error Occured While Shortening</p>`;
    }
}
  