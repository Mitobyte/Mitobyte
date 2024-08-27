import { type Metadata } from 'next';
import { PageSponsors } from './__page__/PageSponsors';

export const metadata: Metadata = {
  title: 'Sponsors',
};

const Sponsors = () => {
  return (
    <PageSponsors />
  );
};

export default Sponsors;
