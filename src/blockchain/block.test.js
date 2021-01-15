import Block, { DIFFICULTY } from "./block";


describe('Block', ()  => {
    let timestamp;
    let previousBlock;
    let data;
    let hash;
    let nonce;

    beforeEach(() => {
        timestamp = new Date(2010, 0, 1);
        previousBlock = Block.genesis;
        data = 't3st-d4t4';
        hash = 'h4sh';
        nonce = 128;
    });

    it('create an instance with parameters', function () {
        const block = new Block(timestamp, previousBlock.hash, hash, data, nonce);

        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
        expect(block.nonce).toEqual(nonce);
    });

    it('use static mine', function() {
        const block = Block.mine(previousBlock, data);


        expect(block.hash.length).toEqual(64);
        expect(block.hash.substring(0, DIFFICULTY)).toEqual('0'.repeat(DIFFICULTY));
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.nonce).not.toEqual(0);
        expect(block.data).toEqual(data);
    });

    it('use static hash', function() {
       hash = Block.hash(timestamp, previousBlock.hash, data, nonce);

       expect(hash).toEqual('e9a58dd4cd719c1e23a957ed57825e5fb73341d86b36e9f64a8ccfb262b3e189');
    });

    it('use ToString()', function() {
        const block = Block.mine(previousBlock, data);

        expect(typeof block.toString()).toEqual('string');

    });

});