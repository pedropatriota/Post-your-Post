/* eslint-disable @typescript-eslint/no-explicit-any */
export type TFetcher = (
  url: string,
  method?: string,
  body?: TBody
) => Promise<any>;

export type TBody = {
  id?: number;
  title: string;
  body: string;
  userId?: number | null;
};

export type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: TAddress;
  phone: string;
  website: string;
  company: TCompany;
};

type TAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: TGeo;
};

type TGeo = {
  lat: string;
  lng: string;
};

type TCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type TUsers = TUser[];

export type TCreatePostType = {
  body: string;
  user?: { value: number | null; label: string };
  title: string;
};

export type TPostData = {
  id?: number;
  body: string;
  user: TUser;
  title: string;
};
