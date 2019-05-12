<template>
  <div id="app">
    <div id="nav">
      <div class="logo">
        <img alt="Vue logo" src="./assets/logo.png" class="logo">
      </div>
      <div class="navlink">
        <router-link to="/" class="nav-links">Home</router-link>
        <router-link to="/about" class="nav-links">About</router-link>
        <router-link to="/#" class="nav-links">Services</router-link>
        <router-link to="houses" class="nav-links">Our Homes</router-link>
        <router-link to="/contact" class="nav-links">Contacts</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>



<style>
/* reset */
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

@import url("https://fonts.googleapis.com/css?family=Poppins:700,900");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
  /* 09da93 */
}
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}
.logo {
  height: 40px;
}

#nav a {
  font-weight: bold;
  color: #30336b;
  text-decoration: none;
  font-size: 1em;
}

#nav a.router-link-exact-active {
  color: #677e96;
}
.nav-links {
  padding-left: 20px;
}
</style>
