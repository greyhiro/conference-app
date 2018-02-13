import $ from 'jquery'

export default class TalkService{


  constructor(){


  }


  findAllSpeakers(){
    return  $.get('http://localhost:8083/speakers')
  }

  findAllSessions(){

    return $.get('http://localhost:8083/sessions')
  }

  findAllHours()
  {
    return $.get('http://localhost:8083/hours')
  }

  findAllCategories()
  {
    return $.get('http://localhost:8083/categories')

  }

}
