import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xa6f4fd697c302A2487B29FD6d95135C61de9bf8a";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/PuHlk_9nXwEcmI_UW-Ossc-Q3_ZQWSHR",
  },
};