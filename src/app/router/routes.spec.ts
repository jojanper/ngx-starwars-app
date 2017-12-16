import { RouteManager } from './routes';


describe('RouteManager', () => {
    it('ROUTES', () => {
        expect(Object.keys(RouteManager.ROUTES).length).toBeGreaterThan(0);
    });

    it('resolveByName', () => {
        expect(RouteManager.resolveByName('home-view')).toEqual('/home');
        expect(RouteManager.resolveByName('planets-view')).toEqual('/planets');
        expect(RouteManager.resolveByName('species-detail-view', {id: 1})).toEqual('/species/1');
    });

    it('topMenuItems', () => {
        expect(RouteManager.topMenuItems('left').length).toBeGreaterThan(0);
        expect(RouteManager.topMenuItems('right').length).toEqual(0);
        expect(RouteManager.topMenuItems('side').length).toEqual(0);
    });
});
