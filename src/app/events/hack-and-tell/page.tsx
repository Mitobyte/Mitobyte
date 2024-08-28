import { type Metadata } from 'next';
import { PageHackAndTell } from './__page__/PageHackAndTell';

export const metadata: Metadata = {
  title: 'Hack & Tell',
};

const HackAndTell = () => {
  return (
    <PageHackAndTell />
  );
};

export default HackAndTell;
