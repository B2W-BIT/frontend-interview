import { thousandsFormatter, textToLinks, identifyFirstHashTag, stringShortener, dateMonthYear, isDate } from '../../../source/assets/js/vanilla/utils/miscellaneous';

/** @test {Miscellaneous} */
describe('BDD - Miscellaneous', () => {

  describe('thousandsFormatter', () => {
    it('Parameter defined', () => {
      expect( thousandsFormatter(10) ).to.equal(10);
      expect( thousandsFormatter() ).to.be.false;
    });

    it('Verify parameter', () => {
      expect( thousandsFormatter('10') ).to.be.false;
      expect( thousandsFormatter('text') ).to.be.false;
    });

    it('Allow positive and negative numbers', () => {
      expect( thousandsFormatter(10) ).to.equal(10);
      expect( thousandsFormatter(-10) ).to.equal('-10');
    });

    it('Numbers will be changed', () => {
      expect( thousandsFormatter(500) ).to.equal(500);
      expect( thousandsFormatter(5000) ).to.equal('5K');
      expect( thousandsFormatter(5000000) ).to.equal('5M');
      expect( thousandsFormatter(5000000000) ).to.equal('5G');
    });
  });

  describe('textToLinks', () => {
    it('Parameter defined', () => {
      expect( textToLinks('text') ).to.equal('text');
      expect( textToLinks() ).to.be.false;
    });

    it('Verify parameter', () => {
      expect( textToLinks(10) ).to.be.false;
      expect( textToLinks(true) ).to.be.false;
    });

    it('Identification in the string', () => {
      expect( textToLinks('http://www.tse.jus.br') ).to.equal('<a href="http://www.tse.jus.br">http://www.tse.jus.br</a>');
      expect( textToLinks('https://www.google.com.br') ).to.equal('<a href="https://www.google.com.br">https://www.google.com.br</a>');
    });
  });

  describe('identifyFirstHashTag', () => {
    it('Parameter defined', () => {
      expect( identifyFirstHashTag('#text') ).to.equal('text');
      expect( identifyFirstHashTag() ).to.be.false;
    });

    it('Verify parameter', () => {
      expect( identifyFirstHashTag(10) ).to.be.false;
      expect( identifyFirstHashTag(true) ).to.be.false;
    });

    it('Identification in the string', () => {
      expect( identifyFirstHashTag('#test #text') ).to.equal('test');
      expect( identifyFirstHashTag('#text') ).to.equal('text');
    });
  });

  describe('stringShortener', () => {
    it('Parameter defined', () => {
      expect( stringShortener('text') ).to.equal('text');
      expect( stringShortener() ).to.be.false;
    });

    it('Verify parameter', () => {
      expect( stringShortener(10) ).to.be.false;
      expect( stringShortener(true) ).to.be.false;
    });

    it('Max length', () => {
      expect( stringShortener('Steve Jobs', 5) ).to.equal('Steve...');
      expect( stringShortener('Steve') ).to.equal('Steve');
    });
  });

  describe('dateMonthYear', () => {
    it('Parameter defined', () => {
      expect( dateMonthYear('text') ).to.be.false;
      expect( dateMonthYear() ).to.be.false;
    });

    it('Verify parameter', () => {
      expect( dateMonthYear(10) ).to.be.false;
      expect( dateMonthYear(true) ).to.be.false;
    });

    it('Return format with month and year', () => {
      expect( dateMonthYear('2016-07-11T13:45:41.893Z') ).to.equal('July 2016');
    });
  });

  describe('isDate', () => {
    it('Parameter defined', () => {
      expect( isDate('text') ).to.be.false;
      expect( isDate() ).to.be.false;
    });

    it('Verify parameter', () => {
      expect( isDate('2016-07-11T13:45:41.893Z') ).to.be.true;
      expect( isDate(true) ).to.be.false;
    });
  });

});
