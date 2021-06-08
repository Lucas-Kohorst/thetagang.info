import { BigNumber } from "ethers";

export type VenueName = "HEGIC" | "OPYN_GAMMA";

export type OptionType = 1 | 2;

export type TradeRequest = {
  spotPrice: string;
  buyAmount: string;
  instrument: string;
};

export type TradeResponse = {
  venues: string[];
  optionTypes: OptionType[];
  amounts: string[];
  strikePrices: string[];
  buyData: string[];
  gasPrice: string;
  totalPremium: string;
  premiums: string[];
  callIndex: number;
  putIndex: number;
};

export type ZeroExApiResponse = {
  to: string;
  value: string;
  data: string;
  gasPrice: string;
  sellTokenAddress: string;
  buyTokenAddress: string;
  buyAmount: string;
  sellAmount: string;
  sellTokenToEthRate: string;
};

export type ContractOptionTerms = {
  underlying: string;
  strikeAsset: string;
  collateralAsset: string;
  expiry: BigNumber;
};

export type PriceQuote = {
  premium: BigNumber;
  strikePrice: BigNumber;
  data: string;
  gasPrice: BigNumber;
  exists: boolean;
  venueName: string;
};

export type CallPutPriceQuotes = {
  call: PriceQuote;
  put: PriceQuote;
};
