const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_YYmTL5Vf3nhVg9Xp5jc6GU3M';

export default STRIPE_PUBLISHABLE;