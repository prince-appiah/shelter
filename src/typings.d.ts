export interface IPropertyImage {
  readonly _id: string;
  folder: string;
  url: string;
  secure_url: string;
  type: string;
  format: string;
}

export interface IProperty {
  readonly _id: string;
  owner: IHost<Pick<"_id">>;
  name: string;
  referenceNo: string;
  roomType: IPropertyType<Pick<"_id">>;
  price: string;
  numOfBedrooms: number;
  numOfBathrooms: number;
  description: string;
  location: string;
  stayPeriod: "night" | "week" | "month" | "year" | string;
  images: IPropertyImage[];
  amenities: IAmenity<Pick<"_id">>[];
  isApproved?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
}

export interface IUser {
  readonly _id: string;
  firstname: string;
  lastname: string;
  email: string;
  userType: "admin" | "customer" | "host" | string;
  profilePicture?: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
}

export interface IHost extends IUser {
  readonly _id: string;
  user_id: string;
  isVerified: boolean;
  phone: string;
  properties: IProperty[];
}

export interface IDecodedUser extends IUser {
  iat: number;
  exp: number;
}

export interface IAmenity {
  readonly _id: string;
  name: string;
  icon: string;
}

export interface IPropertyType {
  readonly _id: string;
  name: string;
  icon: string;
}
