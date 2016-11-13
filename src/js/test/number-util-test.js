import assert from 'assert';
import { addNumber, subtractNumber } from "../number-util";

describe('addNumber', function () {
    it('足し算できる', () => {
        assert.equal(addNumber(1, 2), 3, '1 + 2 = 3');
        assert.equal(addNumber(10, -2), 8, '10 + -2 = 8');

    });
});

describe('subtractNumber', function () {
    it('引き算できる', () => {
        assert.equal(subtractNumber(3, 2), 1, '3 - 2 = 1');
        assert.equal(subtractNumber(100, -2), 102, '100 - -2 = 102');
    });
});
