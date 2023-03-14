import type { GetStaticPropsContext } from 'next';
type PreviewType = {
  preview: {
    data: string;
  };
};

const Test = ({ preview }: PreviewType) => {  
  return <h1>{preview.data}</h1>;
};

export default Test;

export async function getStaticProps(context: GetStaticPropsContext) {
  const { preview, previewData } = context;
  // console.log(context.preview); // true, false 값
  // console.log(context.previewData); // previewData 값
  return {
    props: {
      preview: preview ? previewData : { data: 'none-data' },
    },
  };
}
