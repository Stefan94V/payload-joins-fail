import type { CollectionConfig } from 'payload'

export const Customers: CollectionConfig = {
  slug: 'customers',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'orders',
      label: 'Orders',
      type: 'join',
      collection: 'orders',
      on: 'customer',
    },
  ],
}
