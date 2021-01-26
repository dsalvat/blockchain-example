const MINE_RATE = 3000;

export default (previsousBlock, timestamp) => {
  const { difficulty } = previsousBlock;

  return previsousBlock.timestamp + MINE_RATE > timestamp
    ? difficulty + 1
    : difficulty - 1;
};
