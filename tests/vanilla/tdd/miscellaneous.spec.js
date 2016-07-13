/** @test {Miscellaneous} */
describe('TDD - Miscellaneous', () => {

  describe('thousandsFormatter', () => {
    it('Parameter defined', () => {
      let num = 2;
      let str;

      assert.isDefined(num, 'num has been defined');
      assert.isUndefined(str, 'no str defined');
    });

    it('Verify parameter', () => {
      let num = 2;
      let str = '2';

      assert.isNumber(num, 'num is ok');
      assert.isNotNumber(str, 'this will fail');
    });

    it('Allow positive and negative numbers', () => {
      let positive = 2;
      let negative = -3;

      assert.isNumber(positive, 'positive is ok');
      assert.isNumber(negative, 'negative is ok');
    });

    it('Numbers will be changed', () => {
      let thousand  = 1000;
      let million   = 1000000;
      let billion   = 1000000000;

      assert.operator(500, '<', thousand, 'not changed');
      assert.operator(5000, '>', thousand, 'received the letter K');
      assert.operator(5000000, '>', million, 'received the letter M');
      assert.operator(5000000000, '>', billion, 'received the letter G');
    });
  });

  describe('textToLinks', () => {
    it('Parameter defined', () => {
      let str = 'text';
      let strEmpty;

      assert.isDefined(str, 'str has been defined');
      assert.isUndefined(strEmpty, 'no strEmpty defined');
    });

    it('Verify parameter', () => {
      let str = 'text';
      let num = 10;

      assert.isString(str, 'str is ok');
      assert.isNotString(num, 'this will fail');
    });

    it('Identification in the string', () => {
      let http  = 'http://www.tse.jus.br/';
      let https = 'https://www.google.com.br';
      let text  = 'empty';

      assert.match(http, /^http/, 'http is ok');
      assert.match(https, /^https/, 'https is ok');
      assert.notMatch(text, /^http/, 'regexp does not match');
    });
  });

  describe('identifyFirstHashTag', () => {
    it('Parameter defined', () => {
      let str = 'text';
      let strEmpty;

      assert.isDefined(str, 'str has been defined');
      assert.isUndefined(strEmpty, 'no strEmpty defined');
    });

    it('Verify parameter', () => {
      let str = 'text';
      let num = 10;

      assert.isString(str, 'str is ok');
      assert.isNotString(num, 'this will fail');
    });

    it('Identification in the string', () => {
      let hashTag   = '#test';
      let text      = 'empty';

      assert.match(hashTag, /^#/, 'hashTag is ok');
      assert.notMatch(text, /^#/, 'regexp does not match');
    });
  });

  describe('stringShortener', () => {
    it('Parameter defined', () => {
      let str = 'text';
      let strEmpty;

      assert.isDefined(str, 'str has been defined');
      assert.isUndefined(strEmpty, 'no strEmpty defined');
    });

    it('Verify parameter', () => {
      let str = 'text';
      let num = 10;

      assert.isString(str, 'str is ok');
      assert.isNotString(num, 'this will fail');
    });

    it('Max length', () => {
      let maxLength = 10;

      assert.operator(5, '<', maxLength, 'below the limit');
      assert.operator(25, '>', maxLength, 'above the limit');
    });
  });

  describe('dateMonthYear', () => {
    it('Parameter defined', () => {
      let date = '2016-07-11T13:45:41.893Z';
      let dateEmpty;

      assert.isDefined(date, 'date has been defined');
      assert.isUndefined(dateEmpty, 'no dateEmpty defined');
    });

    it('Verify parameter', () => {
      let date = '2016-07-11T13:45:41.893Z';
      let dateBoolean;

      assert.isString(date, 'date is ok');
      assert.isNotString(dateBoolean, 'this will fail');
    });

    it('Return format with month and year', () => {
      let date = 'July 2016';

      assert.isString(date, 'date is ok');
    });
  });

  describe('isDate', () => {
    it('Parameter defined', () => {
      let date = '2016-07-11T13:45:41.893Z';
      let dateEmpty;

      assert.isDefined(date, 'date has been defined');
      assert.isUndefined(dateEmpty, 'no dateEmpty defined');
    });

    it('Verify parameter', () => {
      let date = '2016-07-11T13:45:41.893Z';
      let dateBoolean;

      assert.isString(date, 'date is ok');
      assert.isNotString(dateBoolean, 'this will fail');
    });
  });

});
