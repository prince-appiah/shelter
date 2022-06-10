export interface IProperty {
  readonly _id: string;
  owner: string;
  name: string;
  referenceNo: string;
  roomType: string;
  price: string;
  numOfBedrooms: number;
  numOfBathrooms: number;
  description: string;
  location: string;
  stayPeriod: string;
  images: string[];
  amenities: IAmenity<Pick<"_id">>[];
  isApproved: boolean;
}

export interface IUser {
  readonly _id: string;
  firstname: string;
  lastname: string;
  email: string;
  userType: string;
  profilePicture: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
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
