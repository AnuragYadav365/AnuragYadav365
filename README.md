<!DOCTYPE html>
<html class="no-js fontawesome-i2svg-active fontawesome-i2svg-complete" data-lt-installed="true" lang="en">
    <head>
<!-- Styles -->
<link rel="stylesheet" href="./src/files/style.css">

<!-- Typewriter -->
<script src="./src/files/core.js"></script>

<style>.Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}</style></head>


<body class="vsc-initialized" data-site-url="https://src/files" data-page-url="/" data-gr-c-s-loaded="true">

<div class="wrap mainpage">

    <h1 id="header"><span class="Typewriter__wrapper"></span><span class="Typewriter__cursor">|</span></h1>

    <h4 id="subheader"><span class="Typewriter__wrapper"></span><span class="Typewriter__cursor">|</span></h4>

    <p id="subheader" style="display: none;"><span      class="Typewriter__wrapper"></span><span    class="Typewriter__cursor">|</span>
    </p>
</div>

</section>

    </div>

    <script>

        var header = document.getElementById('header');
        var subheader = document.getElementById('subheader');

        var typewriter = new Typewriter(header, {
            loop: true
        });

        var typewriter2 = new Typewriter(subheader, {
            loop: false
        });

        let header1 = "Hi there, I'm Mpho.";
        let header2 = "I'm a Software Engineer.";
        let header3 = " Technical Blogger.";
        let header4 = " Maker.";
        let header5 = "n ML/AI Enthusiast."
        let header6 = "Check out my work below.";

        let subHeader1 = "Nice to meet you.";
        let subHeader2 = "Python, DevOps.";
        let subHeader3 = "blog.mphomphego.co.za";
        let subHeader4 = "IoT, Raspberry Pi, Arduino, MicroPython, ESP8266/ESP32.";
        let subHeader5 = "OpenCV, PyTorch etc.";
        let subHeader6 = "Follow me on Twitter: @mphomphego";

        let typingSpeed = 20;
        let deleteSpeed = 1;
        let pauseDelay = 3000;

        function subtyping(string) {
            typewriter2
                .changeDelay(5)
                .typeString(string)
                .start();
        }

        function subdelete() {
            typewriter2
                .deleteAll(1)
                .start();
        }

        function finaltype() {
            jQuery('#subheader').hide();
            jQuery('#headerSocial').fadeIn();
        }

        function typing() {

            typewriter
                .changeDelay(typingSpeed)
                .changeDeleteSpeed(deleteSpeed)
                .typeString(header1)
                .callFunction(function () { subtyping(subHeader1) })
                .pauseFor(pauseDelay)
                .callFunction(function () { subdelete() })
                .pauseFor(subHeader1.length * deleteSpeed)
                .deleteChars(21)

                .typeString(header2)
                .callFunction(function () { subtyping(subHeader2) })
                .pauseFor(pauseDelay)
                .callFunction(function () { subdelete() })
                .pauseFor(subHeader2.length * deleteSpeed)
                .deleteChars(19)

                .typeString(header3)
                .callFunction(function () { subtyping(subHeader3) })
                .pauseFor(pauseDelay)
                .callFunction(function () { subdelete() })
                // .pauseFor(pauseDelay)
                .pauseFor(subHeader3.length * deleteSpeed)
                .deleteChars(18)

                .typeString(header4)
                .callFunction(function () { subtyping(subHeader4) })
                .pauseFor(pauseDelay)
                .callFunction(function () { subdelete() })
                .pauseFor(subHeader4.length * deleteSpeed)
                .deleteChars(8)


                .typeString(header5)
                .callFunction(function () { subtyping(subHeader5) })
                .pauseFor(pauseDelay)
                .callFunction(function () { subdelete() })
                .pauseFor(subHeader5.length * deleteSpeed)
                .deleteAll(1)

                .typeString(header6)
                .callFunction(function () { subtyping(subHeader6) })
                .pauseFor(pauseDelay)
                .callFunction(function () { subdelete() })
                .pauseFor(subHeader6.length * deleteSpeed)
                .deleteAll(1)

                .pauseFor(pauseDelay)
                .start();
        }

        typing();
    </script>
</section>

<p align="left"> <img src="https://komarev.com/ghpvc/?username=anuragyadav365&label=Profile%20views&color=0e75b6&style=flat" alt="anuragyadav365" /> </p>


- Email **anuragyadavmnp@gmail.com**

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://linkedin.com/in/anurag-y-70295b178" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="anurag-y-70295b178" height="30" width="40" /></a>
<a href="https://www.codechef.com/users/anurag_yadav01" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg" alt="anurag_yadav01" height="30" width="40" /></a>
<a href="https://www.hackerrank.com/str_anuragyadav" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="str_anuragyadav" height="30" width="40" /></a>
<a href="https://discord.gg/#5785" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg" alt="#5785" height="30" width="40" /></a>
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.cprogramming.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/> </a> <a href="https://www.w3schools.com/cpp/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.java.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://www.oracle.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" alt="oracle" width="40" height="40"/> </a> <a href="https://www.php.net" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> </p>

<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=anuragyadav365&show_icons=true&locale=en" alt="anuragyadav365" /></p>

<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=anuragyadav365&" alt="anuragyadav365" /></p>

</body>
<script src = "./src/files/script.js"></script>
<!-- Typewriter -->
<script src="./src/files/core.js"></script>
</html>