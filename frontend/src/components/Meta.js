import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to YYkids',
  keywords: 'kids learning materials, digital materials for kids',
  description:
    'We sell the best quality kids activity digital materials for cheap',
};

export default Meta;
