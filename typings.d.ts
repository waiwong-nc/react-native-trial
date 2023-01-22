type Customer = {
    email: string
    name : string
}

type CustomerList = {
    name: ID
    value: Customer
}

type TrackingItem = {
  customer_id: ID
  items: Items[]
  customer: Customer
}

type Item = {
    item_id: IDBCursor;
    name: string;
    price: number;
    quantity: number;
}

type OrderResponse = {
    value: Order;
}

type CustomerResponse = {
    name: ID;
    value: Customer;
}

type Order = {
  Address: string;
  City: string;
  Lat: float;
  Lng: float;
  carrier: string;
  createdAt: Date;
  shippingCost: Int;
  trackingId: string;
  trackingItems: TrackingItem
};