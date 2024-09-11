import { type Metadata } from 'next';
import { PageCodeOfConduct } from './__page__/PageCodeOfConduct';

export const metadata: Metadata = {
  title: 'Code of Conduct',
};

const CodeOfConduct = () => {
  return (
    <PageCodeOfConduct />
  );
};

export default CodeOfConduct;
