const handleLoadLottie = () => {
  let lottieContact = document.getElementById('lottie-contact');
  let lottieAbout = document.getElementById('lottie-about');
  let lottieEmailBlack = document.getElementById('lottie-email__black');
  let lottieEmailWhite = document.getElementById('lottie-email__white');

  let renderAbout = bodymovin.loadAnimation({
    container: lottieAbout,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "/Images/new/Main-Scene.svg",
  });
  let renderContact = bodymovin.loadAnimation({
    container: lottieContact,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "/Images/new/Main-Scene.svg",
  });
  let renderEmailBlack = bodymovin.loadAnimation({
    container: lottieEmailBlack,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "/Images/new/Main-Scene.svg",
  });
}

export default handleLoadLottie;