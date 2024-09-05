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
    };
  }