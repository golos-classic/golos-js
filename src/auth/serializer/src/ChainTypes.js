var ChainTypes;

module.exports = ChainTypes = {};

ChainTypes.reserved_spaces = {
  relative_protocol_ids: 0,
  protocol_ids: 1,
  implementation_ids: 2
};

ChainTypes.operations = {
  vote: 0,
  comment: 1,
  transfer: 2,
  transfer_to_vesting: 3,
  withdraw_vesting: 4,
  limit_order_create: 5,
  limit_order_cancel: 6,
  feed_publish: 7,
  convert: 8,
  account_create: 9,
  account_update: 10,
  witness_update: 11,
  account_witness_vote: 12,
  account_witness_proxy: 13,
  pow: 14,
  custom: 15,
  report_over_production: 16,
  delete_comment: 17,
  custom_json: 18,
  comment_options: 19,
  set_withdraw_vesting_route: 20,
  limit_order_create2: 21,
  challenge_authority: 22,
  prove_authority: 23,
  request_account_recovery: 24,
  recover_account: 25,
  change_recovery_account: 26,
  escrow_transfer: 27,
  escrow_dispute: 28,
  escrow_release: 29,
  pow2: 30,
  escrow_approve: 31,
  transfer_to_savings: 32,
  transfer_from_savings: 33,
  cancel_transfer_from_savings: 34,
  custom_binary: 35,
  decline_voting_rights: 36,
  reset_account: 37,
  set_reset_account: 38,
  delegate_vesting_shares: 39,
  account_create_with_delegation: 40,
  account_metadata: 41,
  proposal_create: 42,
  proposal_update: 43,
  proposal_delete: 44,
  chain_properties_update: 45,
  break_free_referral: 46,
  delegate_vesting_shares_with_interest: 47,
  reject_vesting_shares_delegation: 48,
  fill_convert_request: 49,
  author_reward: 50,
  curation_reward: 51,
  comment_reward: 52,
  liquidity_reward: 53,
  interest: 54,
  fill_vesting_withdraw: 55,
  fill_order: 56,
  shutdown_witness: 57,
  fill_transfer_from_savings: 58,
  hardfork: 59,
  comment_payout_update: 60,
  comment_benefactor_reward: 61,
  return_vesting_delegation: 62,
  producer_reward: 63,
  delegation_reward: 64,
  auction_window_reward: 65,
};

//types.hpp
ChainTypes.object_type = {
  "null": 0,
  base: 1
};
