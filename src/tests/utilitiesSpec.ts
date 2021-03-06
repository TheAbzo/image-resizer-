import { resizing } from '../routes/utilities/index';
import { resolve } from 'path';
import fs from 'fs';

describe('suite for testing the resizing function', (): void => {
    it('Testing on Image processing fjord of 50:50 dimensions', (): void => {
        const data: boolean = resizing('fjord', 50, 50);
        expect(data).toBe(true);
    });

    it('Testing on image output resized file', (): void => {
        const result: boolean = fs.existsSync(resolve('scaled/fjord-50-50.jpg'));
        expect(result).toBe(true);
    });
});
