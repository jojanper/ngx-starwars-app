describe('Application main view', function () {

    beforeEach(function () {
        browser.get('/');
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual("Star Wars UI proto");
    });

    it('should have header', function () {
        expect(element(by.css('dng-app dng-header')).isPresent()).toEqual(true);
    });

    it('should have container', function () {
        expect(element(by.css('dng-app main')).isPresent()).toEqual(true);
    });
});
