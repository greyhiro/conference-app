import $ from 'jquery'
import TalkService from '../../common/talk.service'

export default class SessionList{



    render(){
      const talkService = new TalkService();
        talkService.findAllSessions()
        .then(session => {
          var sess = ''
          session.forEach(element => {
             sess+= "<li>"  +element.id+" "+element.title+"</li>";

          });
          console.log(sess);
          $('#idView').html("<h1>SESSIONS LIST</h1><br><ul>"+sess+"</ul>");

        }
      )

      }

      }
