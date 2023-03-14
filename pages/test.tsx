import type { GetStaticPropsContext, NextPage } from 'next';

const Test = ({ data }: {data: string}) => {
  return (
      <h1>{data}</h1>
  );
};

export default Test;

export async function getStaticProps(context: GetStaticPropsContext) {
  console.log(context.preview); // true, false 값
  return {
    props: {
      data: context.preview ? 'preview' : 'none-preview',
    },
  };
}
