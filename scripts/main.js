var adBlockEnabled = false;

function checkAd() {
    if (ad.offsetHeight === 0) {
      adBlockEnabled = true;
    };
  
    ad.remove();
    console.log('Blocking ads?', adBlockEnabled);
};


const ad = document.createElement('div');

ad.innerHTML = '&nbsp;';
ad.className = 'adsbox';
document.body.appendChild(ad);

window.setTimeout(checkAd(), 100);

if (adBlockEnabled == false) {

    let msgWindow = document.createElement("div");
    msgWindow.className = "msgWindow";
    document.body.appendChild(msgWindow);

    let msgContent = document.createElement("div");
    msgContent.className = "msgContent";
    msgContent.innerHTML = `
        <h3>Ad Blocker Detected!</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ligula metus. Nulla vitae accumsan est. In hac habitasse platea dictumst. 
        Suspendisse vulputate, leo non maximus molestie, libero mauris efficitur sem, vel pulvinar justo lorem eu tellus.</p>

        <p> Etiam tristique justo sed risus volutpat porta vel in tortor. 
        Morbi ante felis, hendrerit in erat vitae, condimentum scelerisque enim. Vivamus vel laoreet tellus. Nam aliquet imperdiet lorem.</p>
        <a id='accept' href="#">Accept</a>
        <a id='decline' href="#">Decline</a>
    `;

    document.body.appendChild(msgContent);
    msgContent.querySelector('#accept').onclick = e => {
        e.preventDefault();
        document.body.removeChild(msgWindow);
        document.body.removeChild(msgContent);
    };

    msgContent.querySelector('#decline').onclick = e => {
        e.preventDefault();
        document.body.removeChild(msgWindow);
        document.body.removeChild(msgContent);
    };

};

var e = document.createElement('div');
e.id = 'test-block';
e.style.display = 'none';
document.body.appendChild(e);