import $ from 'jquery'
import home from './home.html'

export default class Home{

  render(){

    $('#idView').html(home);
  }
}
