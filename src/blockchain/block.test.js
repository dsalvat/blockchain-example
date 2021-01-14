import Block from "./block";

describe('Block', ()  => {
    let timestamp;
    let previousBlock;
    let data;
    let hash;

    beforeEach(() => {
        timestamp = new Date(2010, 0, 1);
        previousBlock = Block.genesis;
        data = 't3st-d4t4';
        hash = 'h4sh';
    });

    it('create an instance with parameters', function () {
        const block = new Block(timestamp, previousBlock.hash, hash, data);

        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });

    it('use static mine', function() {
        const block = Block.mine(previousBlock, data);

        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
    });

    it('use static hash', function() {
       hash = Block.hash(timestamp, previousBlock.hash, data);

       expect(hash).toEqual('bcd4e43232027d3f5be256f3dea1d0411f90dc3508fca1754caa1f8fe79959c3');
    });

    it('use ToString()', function() {
        const block = Block.mine(previousBlock, data);

        expect(typeof block.toString()).toEqual('string');

    });

});