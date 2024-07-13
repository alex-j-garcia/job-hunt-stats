export type Position = {
  address: Address;
  company_name: string;
  date_applied: Date;
  date_contacted: null | Date;
  date_posted: null | Date;
  position_name: string;
  salary: number;
  salary_range: number[];
  total_compensation: number;
  fully_qualified: boolean;
  requires_relocation: boolean;
  is_served_by_public_transit: boolean;
  is_referral: boolean;
  is_fishy: boolean;
  is_application_confirmed: boolean;
  was_rejected: boolean;
};

type Address = {
  state: string;
  street_address: string;
  city: string;
};
