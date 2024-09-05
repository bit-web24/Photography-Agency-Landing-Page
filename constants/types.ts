export interface Award {
  image: string;
  year: string;
  title: string;
  description: string;
}

export interface ProductProps {
product: {
  title: string;
  description: string;
  icon: React.ReactNode;
  links: string;
  subProducts?: {
    title: string;
    description: string;
    links: string;
  }[];
};
}
