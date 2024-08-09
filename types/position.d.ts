export type Position = {
  address: Address | "remote";
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
  recruiterID: string | null;
  internalID: string | null;
  status: number;
};

type Status = {
  status:
    | "applied"
    | "recruiter interview"
    | "first interview"
    | "second interview"
    | "third interview"
    | "technical assesment"
    | "final interview"
    | "offer made";
};

type Recruiter = {
  name: string;
  surname: string;
  was_ghosted: boolean;
};

type Address = {
  state: string;
  street_address: string;
  city: string;
};

export type ConcisePosition = {
  company_name: string;
  position_name: string;
};
