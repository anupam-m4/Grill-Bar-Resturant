import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: 'Rs.1060',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: 'Rs1199',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: 'Rs.1055',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: 'Rs.1111',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: 'Rs.826',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: 'Rs.400',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: 'Rs.616',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: 'Rs.710',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: 'Rs.899',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: 'Rs.726',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [

  {
    imgUrl: images.award01,
    title: 'Rising Star',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
  },
];

export default { wines, cocktails, awards };
