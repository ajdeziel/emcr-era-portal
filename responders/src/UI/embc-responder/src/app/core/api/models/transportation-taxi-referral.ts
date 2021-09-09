/* tslint:disable */
/* eslint-disable */
import { Referral } from './referral';
import { SupportCategory } from './support-category';
import { SupportSubCategory } from './support-sub-category';
export interface TransportationTaxiReferral extends Referral {
  category?: SupportCategory;
  fromAddress: string;
  subCategory?: SupportSubCategory;
  toAddress: string;
}