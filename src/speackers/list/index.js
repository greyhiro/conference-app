import $ from 'jquery'
import TalkService from '../../common/talk.service'

export default class speackerList{

  render(){



   const talkService = new TalkService();


    talkService.findAllSpeakers()
    .then(speakers => {
      var firstnames = ''
      speakers.forEach(element => {
         firstnames+= "<li>"  +element.firstname+" "+element.lastname+"</li>";
      // console.log(firstname);
      });
      console.log(firstnames);
      $('#idView').html("<h1>SPEAKERS LIST</h1><br><ul>"+firstnames+"</ul>");

    }
  )

}

}
