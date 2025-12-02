/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  TwilightCCADemo,
  TwilightCCADemo_AuctionStepRecorded,
  TwilightCCADemo_BidExited,
  TwilightCCADemo_BidSubmitted,
  TwilightCCADemo_CheckpointUpdated,
  TwilightCCADemo_ClearingPriceUpdated,
  TwilightCCADemo_CurrencySwept,
  TwilightCCADemo_NextActiveTickUpdated,
  TwilightCCADemo_TickInitialized,
  TwilightCCADemo_TokensClaimed,
  TwilightCCADemo_TokensReceived,
  TwilightCCADemo_TokensSwept,
} from "generated";

TwilightCCADemo.AuctionStepRecorded.handler(async ({ event, context }) => {
  const entity: TwilightCCADemo_AuctionStepRecorded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    startBlock: event.params.startBlock,
    endBlock: event.params.endBlock,
    mps: event.params.mps,
  };

  context.TwilightCCADemo_AuctionStepRecorded.set(entity);
});

TwilightCCADemo.BidExited.handler(async ({ event, context }) => {
  const entity: TwilightCCADemo_BidExited = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    bidId: event.params.bidId,
    owner: event.params.owner,
    tokensFilled: event.params.tokensFilled,
    currencyRefunded: event.params.currencyRefunded,
  };

  context.TwilightCCADemo_BidExited.set(entity);
});

TwilightCCADemo.BidSubmitted.handler(async ({ event, context }) => {
  const entity: TwilightCCADemo_BidSubmitted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    event_id: event.params.id,
    owner: event.params.owner,
    price: event.params.price,
    amount: event.params.amount,
  };

  context.TwilightCCADemo_BidSubmitted.set(entity);
});

TwilightCCADemo.CheckpointUpdated.handler(async ({ event, context }) => {
  const entity: TwilightCCADemo_CheckpointUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blockNumber: event.params.blockNumber,
    clearingPrice: event.params.clearingPrice,
    cumulativeMps: event.params.cumulativeMps,
  };

  context.TwilightCCADemo_CheckpointUpdated.set(entity);
});

TwilightCCADemo.ClearingPriceUpdated.handler(async ({ event, context }) => {
  const entity: TwilightCCADemo_ClearingPriceUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blockNumber: event.params.blockNumber,
    clearingPrice: event.params.clearingPrice,
  };

  context.TwilightCCADemo_ClearingPriceUpdated.set(entity);
});

TwilightCCADemo.CurrencySwept.handler(async ({ event, context }) => {
  const entity: TwilightCCADemo_CurrencySwept = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    fundsRecipient: event.params.fundsRecipient,
    currencyAmount: event.params.currencyAmount,
  };

  context.TwilightCCADemo_CurrencySwept.set(entity);
});

TwilightCCADemo.NextActiveTickUpdated.handler(async ({ event, context }) => {
  const entity: TwilightCCADemo_NextActiveTickUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    price: event.params.price,
  };

  context.TwilightCCADemo_NextActiveTickUpdated.set(entity);
});

TwilightCCADemo.TickInitialized.handler(async ({ event, context }) => {
  const entity: TwilightCCADemo_TickInitialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    price: event.params.price,
  };

  context.TwilightCCADemo_TickInitialized.set(entity);
});

TwilightCCADemo.TokensClaimed.handler(async ({ event, context }) => {
  const entity: TwilightCCADemo_TokensClaimed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    bidId: event.params.bidId,
    owner: event.params.owner,
    tokensFilled: event.params.tokensFilled,
  };

  context.TwilightCCADemo_TokensClaimed.set(entity);
});

TwilightCCADemo.TokensReceived.handler(async ({ event, context }) => {
  const entity: TwilightCCADemo_TokensReceived = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    totalSupply: event.params.totalSupply,
  };

  context.TwilightCCADemo_TokensReceived.set(entity);
});

TwilightCCADemo.TokensSwept.handler(async ({ event, context }) => {
  const entity: TwilightCCADemo_TokensSwept = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokensRecipient: event.params.tokensRecipient,
    tokensAmount: event.params.tokensAmount,
  };

  context.TwilightCCADemo_TokensSwept.set(entity);
});
