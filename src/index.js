import TalkService from './common/talk.service'
import Layout from './layout'
import speackerList from './speackers/list'
import SessionList from './sessions/list'
import Home from'./home'
import 'bootstrap/dist/css/bootstrap.css'
//alert('Conférence App démarré !');
/*
const talkService = new TalkService();


talkService.findAllSpeakers()
.then(speakers => {
  speakers.forEach(function(element) {
  document.write("<br>Id: "+element.id +"<br>Fistname: "+element.firstname +"<br>Lastname: "+ element.lastname);

});
}
)*/

const layout = new Layout()
layout.render()

var router = () => {
if (location.hash == '#speakers-list') {

  const speackerlist = new speackerList()
  speackerlist.render();

} else if (location.hash == '#sessions-list') {

const Sessionlist = new SessionList()
Sessionlist.render();


} else {
 const home = new Home()
 home.render();
}
}
window.addEventListener('load', () => {
window.onhashchange = () => {
router();
};
router();
});
