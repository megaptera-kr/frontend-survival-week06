type PriceOptions = {
  locales?: Intl.LocalesArgument;
  options?: Intl.NumberFormatOptions;
};

export default function priceToLocal(
  price: number,
  { locales, options }: PriceOptions = {
    locales: 'ko-KR',
    options: {
      currency: 'KRW',
    },
  },
) {
  return price.toLocaleString(locales, options);
}
