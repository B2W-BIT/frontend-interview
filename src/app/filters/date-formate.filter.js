
export class DateFormatFilter{
    
    constructor(input){
      'ngInject'

      this.input = input;
    }

    static dateFormatFilter() {
        return (input)=> { 
            let date = new Date(input);
            moment.locale('pt-br')
            let dateBR = moment(date).format('MMMM YYYY');
            return dateBR;
        }
    }



}