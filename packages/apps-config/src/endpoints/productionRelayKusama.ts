// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { EndpointOption } from './types';

import { KUSAMA_GENESIS } from '../api/constants';

/* eslint-disable sort-keys */

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   value: The actual hosted secure websocket endpoint
export function createKusama (t: TFunction): EndpointOption {
  return {
    dnslink: 'kusama',
    genesisHash: KUSAMA_GENESIS,
    info: 'kusama',
    text: t('rpc.kusama.parity', 'Kusama', { ns: 'apps-config' }),
    providers: {
      Parity: 'wss://kusama-rpc.polkadot.io',
      OnFinality: 'wss://kusama.api.onfinality.io/public-ws',
      'Patract Elara': 'wss://kusama.elara.patract.io'
    },
    teleport: [],
    linked: [
      // (1) all system parachains (none available yet)
      // ...
      // (2) all common good parachains
      {
        info: 'statemine',
        paraId: 1000,
        text: t('rpc.kusama.statemine', 'Statemine', { ns: 'apps-config' }),
        providers: {
          Parity: 'wss://kusama-statemine-rpc.paritytech.net',
          OnFinality: 'wss://statemine.api.onfinality.io/public-ws',
          'Patract Elara': 'wss://statemine.kusama.elara.patract.io'
        },
        teleport: []
      },
      /// (3) parachains with id, see Rococo (info here maps to the actual "named icon")
      //
      // NOTE: Added alphabetical based on chain name
      {
        info: 'bifrost',
        isUnreachable: true,
        paraId: 2001,
        text: t('rpc.kusama.bifrost', 'Bifrost', { ns: 'apps-config' }),
        providers: {
          Bifrost: 'wss://bifrost-rpc.liebi.com/ws'
        }
      },
      {
        info: 'shadow',
        isUnreachable: true,
        paraId: 2012,
        text: t('rpc.kusama.shadow', 'Crust Shadow', { ns: 'apps-config' }),
        providers: {
          Crust: 'wss://shadow.crust.network/'
        }
      },
      {
        info: 'crab',
        isUnreachable: true,
        paraId: 2006,
        text: t('rpc.kusama.crab', 'Darwinia Crab', { ns: 'apps-config' }),
        providers: {
          Crab: 'wss://crab-rpc.darwinia.network/'
        }
      },
      {
        info: 'encointer_canary',
        isUnreachable: true,
        paraId: 2014,
        text: t('rpc.kusama.encointer', 'Encointer Canary', { ns: 'apps-config' }),
        providers: {
          Encointer: 'wss://canary.encointer.org'
        }
      },
      {
        info: 'genshiro',
        isUnreachable: true,
        text: t('rpc.test.equilibriumtestnet', 'Genshiro', { ns: 'apps-config' }),
        providers: {
          Equilibrium: 'wss://testnet.equilibrium.io'
        }
      },
      {
        info: 'integritee',
        isUnreachable: true,
        paraId: 2015,
        text: t('rpc.kusama.integritee', 'IntegriTEE Network', { ns: 'apps-config' }),
        providers: {
          IntegriTEE: 'wss://mainnet.integritee.network'
        }
      },
      {
        info: 'karura',
        isUnreachable: true,
        paraId: 2000,
        text: t('rpc.kusama.karura', 'Karura', { ns: 'apps-config' }),
        providers: {
          'Acala Foundation': 'wss://karura-rpc-0.aca-api.network'
        }
      },
      {
        info: 'khala',
        isUnreachable: true,
        paraId: 2004,
        text: t('rpc.kusama.khala', 'Khala Network', { ns: 'apps-config' }),
        providers: {
          Phala: 'wss://khala.phala.network/ws'
        }
      },
      {
        info: 'kilt',
        isUnreachable: true,
        paraId: 2005,
        text: t('rpc.kusama.kilt', 'KILT Mainnet', { ns: 'apps-config' }),
        providers: {
          'KILT Protocol': 'wss://mainnet.kilt.io/'
        }
      },
      {
        info: 'polkasmith',
        isUnreachable: true,
        paraId: 2009,
        text: t('rpc.kusama.polkasmith', 'Polkasmith', { ns: 'apps-config' }),
        providers: {
          Polkasmith: 'wss://polkasmith.polkafoundry.com'
        }
      },
      {
        info: 'sakura',
        isUnreachable: true,
        paraId: 2016,
        text: t('rpc.kusama.sakura', 'Sakura', { ns: 'apps-config' }),
        providers: {
          Clover: 'wss://api-sakura.clover.finance'
        }
      },
      {
        info: 'sherpax',
        isUnreachable: true,
        paraId: 2013,
        text: t('rpc.kusama.sherpax', 'SherpaX', { ns: 'apps-config' }),
        providers: {
          ChainX: 'wss://sherpax.chainx.org'
        }
      },
      {
        info: 'shiden',
        isUnreachable: true,
        paraId: 2007,
        text: t('rpc.kusama.shiden', 'Shiden', { ns: 'apps-config' }),
        providers: {
          StakeTechnologies: 'wss://rpc.shiden.plasmnet.io'
        }
      }
    ]
  };
}
