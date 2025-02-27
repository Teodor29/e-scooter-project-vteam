import assert from 'assert';
import Scooter from '../scooter.js';

describe('Scooter Class', () => {
    describe('setStatus', () => {
        it('should set a valid status', () => {
            const scooter = new Scooter();
            scooter.setStatus('rented');
            
            assert.strictEqual(scooter.status, 'rented', 'Status is not set to "rented"');
        });

        it('should throw error for invalid status', () => {
            const scooter = new Scooter();
            assert.throws(() => {
                scooter.setStatus('invalid');
            }, /Invalid status/, 'Error not thrown for invalid status');
        });
    });
});
