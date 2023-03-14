import type { GetStaticPropsContext } from 'next';
import { PreviewTestPage } from 'src/containers/PreviewTestPage/PreviewPage';
export type PreviewType = {
  preview: {
    name?: string;
    age?: string;
  };
};

const Test = ({ preview }: PreviewType) => {
  return preview ? (
    <PreviewTestPage name={preview.name} age={preview.age} />
  ) : (
    <p>올바르지 않은 경로입니다 (프리뷰 모드 아닐때 나오는 메세지)</p>
  );
};

export default Test;

export async function getStaticProps(context: GetStaticPropsContext) {
  const { preview, previewData } = context;
  // context.preview; // * true, false 값
  // context.previewData; // * preview Data 값
  return {
    props: {
      preview: preview ? previewData : null,
    },
  };
}
