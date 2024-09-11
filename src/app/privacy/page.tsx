import { type Metadata } from 'next';
import { PagePrivacy } from './__page__/PagePrivacy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

const Privacy = () => {
  return (
    <PagePrivacy />
  );
};

export default Privacy;
