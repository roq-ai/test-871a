const mapping: Record<string, string> = {
  administrations: 'administration',
  products: 'product',
  purchases: 'purchase',
  reservations: 'reservation',
  reviews: 'review',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
